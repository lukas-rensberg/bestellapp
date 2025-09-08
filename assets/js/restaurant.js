let currentRestaurant = null;
let modalItem = null;
let modalQuantity = 1;
let modalCustomizations = [];
let cart = [];

function getRestaurantId() {
  const queryString = window.location.search;

  if (queryString) {
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    if (id) {
      return parseInt(id);
    }
  }

  return 1;
}

function initRestaurantPage() {
  const restaurantId = getRestaurantId();
  currentRestaurant = restaurants.find((r) => r.id === restaurantId);
  if (!currentRestaurant) return (window.location.href = "index.html");

  updatePageToRestaurantInfo(currentRestaurant);
  loadMenu(restaurantId);
}

function updatePageToRestaurantInfo(restaurant) {
  setRestaurantGeneralInfos(restaurant.name, restaurant.cuisine);
  setRestaurantRating(restaurant.rating);
  setRestaurantDeliveryInfos(
    restaurant.deliveryTime,
    restaurant.deliveryFee,
    restaurant.minOrder
  );
  setRestaurantHeroImage(restaurant.image);
}

function setRestaurantGeneralInfos(name, cuisine) {
  document.title = `${name} - Bestellapp`;
  document.getElementById("restaurantName").textContent = name;
  document.getElementById("restaurantCuisine").textContent = cuisine;
}

function setRestaurantRating(rating) {
  document.getElementById("restaurantRating").textContent = rating;
}

function setRestaurantDeliveryInfos(deliveryTime, deliveryFee, minOrder) {
  setRestaurantDeliveryTime(deliveryTime);
  setRestaurantDeliveryFee(deliveryFee);
  setRestaurantMinOrder(minOrder);
}

function setRestaurantDeliveryTime(deliveryTime) {
  document.getElementById("restaurantDeliveryTime").textContent = deliveryTime;
}

function setRestaurantDeliveryFee(deliveryFee) {
  document.getElementById("restaurantDeliveryFee").textContent =
    deliveryFee === 0
      ? "Kostenlos"
      : `${deliveryFee.toFixed(2).replace(".", ",")} €`;
}

function setRestaurantMinOrder(minOrder) {
  document.getElementById("restaurantMinOrder").textContent = `${minOrder
    .toFixed(2)
    .replace(".", ",")} €`;
}

function setRestaurantHeroImage(image) {
  document.getElementById("restaurantHeroImage").src = image;
}

function generateMenuCategories(menu) {
  const categoriesContainer = document.getElementById("menuCategories");
  console.log(menu.categories);
  categoriesContainer.innerHTML = menu.categories
    .map((category) => createMenuCategoryButtonTemplate(category))
    .join("");

  if (menu.categories.length > 0) {
    categoriesContainer
      .querySelector(".menu-category-btn")
      .classList.add("active");
  }
}

function loadMenu(restaurantId) {
  const menu = menuData[restaurantId];
  if (!menu) {
    showMenuLoadingState();
    return;
  }

  generateMenuCategories(menu);
  renderMenuSections(menu);
}

function showMenuLoadingState() {
  document.getElementById("menuSections").innerHTML =
    "<p>Menü wird geladen...</p>";
}

function renderMenuSections(menu) {
  const sectionsContainer = document.getElementById("menuSections");
  sectionsContainer.innerHTML = menu.categories
    .map((category) => createMenuSectionHTML(category, menu.items[category]))
    .join("");
}

function createMenuSectionHTML(category, items) {
  const itemsHTML = (items || [])
    .map((item) => createMenuItemTemplate(item, category))
    .join("");

  return `
    <div class="menu-section" id="section-${category}">
      <h2 class="menu-section-title">${category}</h2>
      <div class="menu-items">${itemsHTML}</div>
    </div>`;
}

function scrollToCategory(category) {
  const section = document.getElementById(`section-${category}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll(".menu-category-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document
    .querySelector(`[data-category="${category}"]`)
    .classList.add("active");
}

function updateCartCount() {
  const totalItems = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);

  updateCartText(totalItems);
  updateCartDisplay();
  updateMobileCartDisplay();
}

function updateCartText(totalItems) {
  const cartCount = document.querySelector(".cart-count");
  const cartItemCount = document.getElementById("cartItemCount");
  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? "flex" : "none";
  }

  if (cartItemCount) {
    cartItemCount.textContent = totalItems;
  }
}

function showEmptyCartState(cartItems, cartTotal, cartCheckout) {
  if (cartItems) {
    cartItems.innerHTML = createEmptyCartStateTemplate();
  }
  if (cartTotal) cartTotal.textContent = "0,00 €";
  if (cartCheckout) {
    cartCheckout.disabled = true;
    cartCheckout.textContent = "Warenkorb leer";
  }
}

function updateCartItems(cartItems) {
  if (cartItems) {
    cartItems.innerHTML = cart
      .map((item) => createCartItemTemplate(item))
      .join("");
  }
}

function getCartSubtotal() {
  return cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
}

function updateCartTotal(cartTotal) {
  const subtotal = getCartSubtotal();
  if (cartTotal) {
    cartTotal.textContent = `${subtotal.toFixed(2).replace(".", ",")} €`;
  }
}

function updateCartCheckout(cartCheckout) {
  const subtotal = getCartSubtotal();

  if (cartCheckout) {
    const isSubtotalZero = subtotal === 0;
    cartCheckout.disabled = isSubtotalZero;
    if (isSubtotalZero) {
      cartCheckout.textContent = "Warenkorb leer";
    } else {
      cartCheckout.textContent = `Bestellen (${subtotal
        .toFixed(2)
        .replace(".", ",")} €)`;
    }
  }
}

function updateCartDisplay() {
  const cartElement = document.getElementById("cartSticky");
  const cartItemsContainerElement = document.getElementById("cartStickyItems");
  const cartTotalElement = document.getElementById("cartStickyTotal");
  const cartCheckoutElement = document.getElementById("cartStickyCheckout");
  if (!cartElement) return;

  cartElement.classList.add("has-items");

  if (cart.length === 0)
    return showEmptyCartState(
      cartItemsContainerElement,
      cartTotalElement,
      cartCheckoutElement
    );

  updateCartItems(cartItemsContainerElement);
  updateCartTotal(cartTotalElement);
  updateCartCheckout(cartCheckoutElement);
}

function changeCartQuantity(itemId, change) {
  const itemIndex = cart.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) return;

  const newQuantity = cart[itemIndex].quantity + change;

  if (newQuantity <= 0) {
    cart.splice(itemIndex, 1);
  } else {
    cart[itemIndex].quantity = newQuantity;
  }

  updateCartCount();
}

function openItemModal(itemId, category) {
  const menu = menuData[getRestaurantId()];
  const item = menu.items[category].find((i) => i.id === itemId);
  if (!item) return;

  initializeModalState(item);
  populateModalContent(item);
  renderModalCustomizations(item);
  showModal();
}

function initializeModalState(item) {
  modalItem = item;
  modalQuantity = 1;
  modalCustomizations = [];
}

function populateModalContent(item) {
  document.getElementById("modalItemImage").src = item.image;
  document.getElementById("modalItemName").textContent = item.name;
  document.getElementById("modalItemDescription").textContent =
    item.description;
  const priceText = `${item.price.toFixed(2).replace(".", ",")} €`;
  document.getElementById("modalItemPrice").textContent = priceText;
  document.getElementById("modalQuantity").textContent = modalQuantity;
}

function renderModalCustomizations(item) {
  const container = document.getElementById("modalCustomizations");
  if (item.customizations && item.customizations.length > 0) {
    container.innerHTML = item.customizations
      .map((custom, index) => createCustomizationOptionHTML(custom, index))
      .join("");
  } else {
    container.innerHTML =
      '<p style="color: var(--text-secondary); font-style: italic;">Keine Anpassungen verfügbar</p>';
  }
}

function createCustomizationOptionHTML(custom, index) {
  const prefix = custom.type === "remove" ? "Ohne " : "";
  const priceSign = custom.price > 0 ? "+" : "";
  const priceText = `${priceSign}${custom.price
    .toFixed(2)
    .replace(".", ",")} €`;

  return `
    <div class="customization-option">
      <label>
        <input type="checkbox" onchange="toggleCustomization(${index})">
        ${prefix}${custom.name}
      </label>
      <span class="customization-price">${priceText}</span>
    </div>`;
}

function showModal() {
  updateModalPrice();
  document.getElementById("itemModalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeItemModal() {
  document.getElementById("itemModalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  modalItem = null;
  modalQuantity = 1;
  modalCustomizations = [];
}

function toggleCustomization(index) {
  const customizationIndex = modalCustomizations.indexOf(index);
  if (customizationIndex > -1) {
    modalCustomizations.splice(customizationIndex, 1);
  } else {
    modalCustomizations.push(index);
  }
  updateModalPrice();
}

function changeModalQuantity(change) {
  const newQuantity = modalQuantity + change;
  if (newQuantity >= 1 && newQuantity <= 10) {
    modalQuantity = newQuantity;
    document.getElementById("modalQuantity").textContent = modalQuantity;
    updateModalPrice();
  }
}

function updateModalPrice() {
  if (!modalItem) return;

  let totalPrice = modalItem.price;

  modalCustomizations.forEach((index) => {
    totalPrice += modalItem.customizations[index].price;
  });

  totalPrice *= modalQuantity;

  document.getElementById("modalTotalPrice").textContent = `${totalPrice
    .toFixed(2)
    .replace(".", ",")} €`;
}

function addModalItemToCart() {
  if (!modalItem) return;

  const customizationNames = getCustomizationNames();
  const customizationPrice = getCustomizationPrice();
  const cartItem = createCartItemFromModal(
    customizationNames,
    customizationPrice
  );

  cart.push(cartItem);
  updateCartCount();
  closeItemModal();
  highlightCartAfterAdd();
}

function getCustomizationNames() {
  return modalCustomizations.map((index) => {
    const custom = modalItem.customizations[index];
    return custom.type === "remove" ? `Ohne ${custom.name}` : custom.name;
  });
}

function getCustomizationPrice() {
  return modalCustomizations.reduce(
    (sum, index) => sum + modalItem.customizations[index].price,
    0
  );
}

function createCartItemFromModal(customizationNames, customizationPrice) {
  return {
    id: `${modalItem.id}-${Date.now()}`,
    restaurantId: getRestaurantId(),
    name: modalItem.name,
    price: modalItem.price + customizationPrice,
    quantity: modalQuantity,
    customizations: customizationNames,
    image: modalItem.image,
  };
}

function highlightCartAfterAdd() {
  setTimeout(() => {
    const cartSticky = document.getElementById("cartSticky");
    if (cartSticky) {
      cartSticky.scrollIntoView({ behavior: "smooth", block: "nearest" });
      cartSticky.classList.add("expanded");
    }
  }, 300);
}

function processCheckout() {
  if (this.disabled || cart.length === 0) return;

  const total = getCartSubtotal();
  showCheckoutSuccess(total);
  clearCart();
}

function showCheckoutSuccess(total) {
  const totalText = `${total.toFixed(2).replace(".", ",")} €`;
  const deliveryTime = currentRestaurant?.deliveryTime || "25-40 min";

  document.getElementById("checkoutSuccessTotal").textContent = totalText;
  document.getElementById("checkoutSuccessDelivery").textContent = deliveryTime;
  document.getElementById("checkoutSuccessOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function clearCart() {
  cart = [];
  updateCartCount();
  closeMobileCart();
}

function closeCheckoutSuccess() {
  document.getElementById("checkoutSuccessOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function goBack() {
  window.location.href = "index.html";
}

// Mobile Cart Functions
function updateMobileCartDisplay() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getCartSubtotal();

  updateMobileCartButton(totalItems, totalPrice);
  updateMobileCartContent();
}

function updateMobileCartButton(totalItems, totalPrice) {
  const button = document.getElementById("mobileCartButton");
  const count = document.getElementById("mobileCartCount");
  const total = document.getElementById("mobileCartTotal");

  if (!button) return;

  count.textContent = totalItems;
  total.textContent = `${totalPrice.toFixed(2).replace(".", ",")} €`;
  button.style.display = totalItems > 0 ? "flex" : "none";
}

function updateMobileCartContent() {
  const itemsContainer = document.getElementById("mobileCartItems");
  const itemCount = document.getElementById("mobileCartItemCount");
  const footerTotal = document.getElementById("mobileCartFooterTotal");
  const checkoutBtn = document.getElementById("mobileCartCheckout");

  if (!itemsContainer) return;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getCartSubtotal();

  itemCount.textContent = totalItems;
  footerTotal.textContent = `${totalPrice.toFixed(2).replace(".", ",")} €`;

  if (cart.length === 0) {
    itemsContainer.innerHTML = createEmptyCartStateTemplate();
    checkoutBtn.disabled = true;
    checkoutBtn.textContent = "Warenkorb leer";
  } else {
    itemsContainer.innerHTML = cart.map(createCartItemTemplate).join("");
    checkoutBtn.disabled = false;
    checkoutBtn.textContent = "Bestellen";
  }
}

function openMobileCart() {
  document.getElementById("mobileCartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileCart() {
  document.getElementById("mobileCartOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
  initRestaurantPage();

  setTimeout(() => {
    window.stop();
  }, 100);

  document
    .getElementById("itemModalOverlay")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeItemModal();
      }
    });

  // Mobile cart overlay click handler
  document
    .getElementById("mobileCartOverlay")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeMobileCart();
      }
    });

  // Checkout success overlay click handler
  document
    .getElementById("checkoutSuccessOverlay")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeCheckoutSuccess();
      }
    });

  const cartStickyCheckout = document.getElementById("cartStickyCheckout");
  if (cartStickyCheckout) {
    cartStickyCheckout.addEventListener("click", processCheckout);
  }
});

window.addEventListener("scroll", function () {
  const categoryButtons = document.querySelectorAll(".menu-category-btn");
  const sections = document.querySelectorAll(".menu-section");

  let currentSection = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      currentSection = section.id.replace("section-", "");
    }
  });

  if (currentSection) {
    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.category === currentSection) {
        btn.classList.add("active");
      }
    });
  }
});
