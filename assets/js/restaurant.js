/**
 * @fileoverview Restaurant page functionality including menu display, cart management, and ordering
 * @author Lukas Rensberg
 * @version 1.0.0
 */

let currentRestaurant = null;
let modalItem = null;
let modalQuantity = 1;
let modalCustomizations = [];
let cart = [];

/**
 * Gets restaurant ID from URL parameters
 * @returns {number} Restaurant ID, defaults to 1 if not found
 */
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

/**
 * Initializes the restaurant page with data and menu
 * @returns {void}
 */
function initRestaurantPage() {
  const restaurantId = getRestaurantId();
  currentRestaurant = restaurants.find((r) => r.id === restaurantId);
  if (!currentRestaurant) return (window.location.href = "index.html");

  updatePageToRestaurantInfo(currentRestaurant);
  loadMenu(restaurantId);
}

/**
 * Updates page elements with restaurant information
 * @param {Object} restaurant - Restaurant data object
 * @returns {void}
 */
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

/**
 * Sets restaurant name and cuisine in page elements
 * @param {string} name - Restaurant name
 * @param {string} cuisine - Restaurant cuisine type
 * @returns {void}
 */
function setRestaurantGeneralInfos(name, cuisine) {
  document.title = `${name} - Bestellapp`;
  document.getElementById("restaurantName").textContent = name;
  document.getElementById("restaurantCuisine").textContent = cuisine;
}

/**
 * Sets restaurant rating display
 * @param {number} rating - Restaurant rating (1-5)
 * @returns {void}
 */
function setRestaurantRating(rating) {
  document.getElementById("restaurantRating").textContent = rating;
}

/**
 * Sets all restaurant delivery information
 * @param {string} deliveryTime - Estimated delivery time
 * @param {number} deliveryFee - Delivery fee in euros
 * @param {number} minOrder - Minimum order amount
 * @returns {void}
 */
function setRestaurantDeliveryInfos(deliveryTime, deliveryFee, minOrder) {
  setRestaurantDeliveryTime(deliveryTime);
  setRestaurantDeliveryFee(deliveryFee);
  setRestaurantMinOrder(minOrder);
}

/**
 * Sets delivery time display
 * @param {string} deliveryTime - Estimated delivery time
 * @returns {void}
 */
function setRestaurantDeliveryTime(deliveryTime) {
  document.getElementById("restaurantDeliveryTime").textContent = deliveryTime;
}

/**
 * Sets delivery fee display with formatting
 * @param {number} deliveryFee - Delivery fee in euros
 * @returns {void}
 */
function setRestaurantDeliveryFee(deliveryFee) {
  document.getElementById("restaurantDeliveryFee").textContent =
    deliveryFee === 0
      ? "Kostenlos"
      : `${deliveryFee.toFixed(2).replace(".", ",")} €`;
}

/**
 * Sets minimum order amount display
 * @param {number} minOrder - Minimum order amount in euros
 * @returns {void}
 */
function setRestaurantMinOrder(minOrder) {
  document.getElementById("restaurantMinOrder").textContent = `${minOrder
    .toFixed(2)
    .replace(".", ",")} €`;
}

/**
 * Sets restaurant hero image
 * @param {string} image - Image URL
 * @returns {void}
 */
function setRestaurantHeroImage(image) {
  document.getElementById("restaurantHeroImage").src = image;
}

/**
 * Generates menu category navigation buttons
 * @param {Object} menu - Menu data with categories
 * @returns {void}
 */
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

/**
 * Loads and displays menu for specified restaurant
 * @param {number} restaurantId - Restaurant identifier
 * @returns {void}
 */
function loadMenu(restaurantId) {
  const menu = menuData[restaurantId];
  if (!menu) {
    showMenuLoadingState();
    return;
  }

  generateMenuCategories(menu);
  renderMenuSections(menu);
}

/**
 * Shows loading state when menu data is unavailable
 * @returns {void}
 */
function showMenuLoadingState() {
  document.getElementById("menuSections").innerHTML =
    "<p>Menü wird geladen...</p>";
}

/**
 * Renders all menu sections with items
 * @param {Object} menu - Menu data object
 * @returns {void}
 */
function renderMenuSections(menu) {
  const sectionsContainer = document.getElementById("menuSections");
  sectionsContainer.innerHTML = menu.categories
    .map((category) => createMenuSectionHTML(category, menu.items[category]))
    .join("");
}

/**
 * Creates HTML for a menu section
 * @param {string} category - Category name
 * @param {Array<Object>} items - Array of menu items
 * @returns {string} HTML string for menu section
 */
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

/**
 * Scrolls to specified menu category section
 * @param {string} category - Category name to scroll to
 * @returns {void}
 */
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

/**
 * Updates cart item count display across all elements
 * @returns {void}
 */
function updateCartCount() {
  const totalItems = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);

  updateCartText(totalItems);
  updateCartDisplay();
  updateMobileCartDisplay();
}

/**
 * Updates cart count text elements
 * @param {number} totalItems - Total number of items in cart
 * @returns {void}
 */
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

/**
 * Shows empty cart state in UI elements
 * @param {HTMLElement} cartItems - Cart items container
 * @param {HTMLElement} cartTotal - Cart total element
 * @param {HTMLElement} cartCheckout - Checkout button element
 * @returns {void}
 */
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

/**
 * Updates cart items display
 * @param {HTMLElement} cartItems - Cart items container element
 * @returns {void}
 */
function updateCartItems(cartItems) {
  if (cartItems) {
    cartItems.innerHTML = cart
      .map((item) => createCartItemTemplate(item))
      .join("");
  }
}

/**
 * Calculates total cart subtotal
 * @returns {number} Cart subtotal amount
 */
function getCartSubtotal() {
  return cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
}

/**
 * Updates cart total display element
 * @param {HTMLElement} cartTotal - Cart total display element
 * @returns {void}
 */
function updateCartTotal(cartTotal) {
  const subtotal = getCartSubtotal();
  if (cartTotal) {
    cartTotal.textContent = `${subtotal.toFixed(2).replace(".", ",")} €`;
  }
}

/**
 * Updates checkout button state and text
 * @param {HTMLElement} cartCheckout - Checkout button element
 * @returns {void}
 */
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

/**
 * Updates the sticky cart display with current cart data
 * @returns {void}
 */
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

/**
 * Changes quantity of item in cart
 * @param {string} itemId - Unique item identifier
 * @param {number} change - Quantity change (+1 or -1)
 * @returns {void}
 */
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

/**
 * Opens modal for item customization and ordering
 * @param {number} itemId - Item identifier
 * @param {string} category - Item category
 * @returns {void}
 */
function openItemModal(itemId, category) {
  const menu = menuData[getRestaurantId()];
  const item = menu.items[category].find((i) => i.id === itemId);
  if (!item) return;

  initializeModalState(item);
  populateModalContent(item);
  renderModalCustomizations(item);
  showModal();
}

/**
 * Initializes modal state variables
 * @param {Object} item - Menu item object
 * @returns {void}
 */
function initializeModalState(item) {
  modalItem = item;
  modalQuantity = 1;
  modalCustomizations = [];
}

/**
 * Populates modal with item information
 * @param {Object} item - Menu item object
 * @returns {void}
 */
function populateModalContent(item) {
  document.getElementById("modalItemImage").src = item.image;
  document.getElementById("modalItemName").textContent = item.name;
  document.getElementById("modalItemDescription").textContent =
    item.description;
  const priceText = `${item.price.toFixed(2).replace(".", ",")} €`;
  document.getElementById("modalItemPrice").textContent = priceText;
  document.getElementById("modalQuantity").textContent = modalQuantity;
}

/**
 * Renders customization options in modal
 * @param {Object} item - Menu item with customizations
 * @returns {void}
 */
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

/**
 * Creates HTML for single customization option
 * @param {Object} custom - Customization object
 * @param {number} index - Customization index
 * @returns {string} HTML string for customization option
 */
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

/**
 * Shows the item modal and updates price
 * @returns {void}
 */
function showModal() {
  updateModalPrice();
  document.getElementById("itemModalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

/**
 * Closes item modal and resets state
 * @returns {void}
 */
function closeItemModal() {
  document.getElementById("itemModalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  modalItem = null;
  modalQuantity = 1;
  modalCustomizations = [];
}

/**
 * Toggles customization selection
 * @param {number} index - Customization index
 * @returns {void}
 */
function toggleCustomization(index) {
  const customizationIndex = modalCustomizations.indexOf(index);
  if (customizationIndex > -1) {
    modalCustomizations.splice(customizationIndex, 1);
  } else {
    modalCustomizations.push(index);
  }
  updateModalPrice();
}

/**
 * Changes item quantity in modal
 * @param {number} change - Quantity change (+1 or -1)
 * @returns {void}
 */
function changeModalQuantity(change) {
  const newQuantity = modalQuantity + change;
  if (newQuantity >= 1 && newQuantity <= 10) {
    modalQuantity = newQuantity;
    document.getElementById("modalQuantity").textContent = modalQuantity;
    updateModalPrice();
  }
}

/**
 * Updates total price display in modal
 * @returns {void}
 */
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

/**
 * Adds configured item from modal to cart
 * @returns {void}
 */
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

/**
 * Gets formatted customization names
 * @returns {Array<string>} Array of customization names
 */
function getCustomizationNames() {
  return modalCustomizations.map((index) => {
    const custom = modalItem.customizations[index];
    return custom.type === "remove" ? `Ohne ${custom.name}` : custom.name;
  });
}

/**
 * Calculates total customization price
 * @returns {number} Total customization price
 */
function getCustomizationPrice() {
  return modalCustomizations.reduce(
    (sum, index) => sum + modalItem.customizations[index].price,
    0
  );
}

/**
 * Creates cart item object from modal data
 * @param {Array<string>} customizationNames - Selected customization names
 * @param {number} customizationPrice - Total customization price
 * @returns {Object} Cart item object
 */
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

/**
 * Highlights cart after adding item with animation
 * @returns {void}
 */
function highlightCartAfterAdd() {
  setTimeout(() => {
    const cartSticky = document.getElementById("cartSticky");
    if (cartSticky) {
      cartSticky.scrollIntoView({ behavior: "smooth", block: "nearest" });
      cartSticky.classList.add("expanded");
    }
  }, 300);
}

/**
 * Processes checkout and shows success message
 * @returns {void}
 */
function processCheckout() {
  if (this.disabled || cart.length === 0) return;

  const total = getCartSubtotal();
  showCheckoutSuccess(total);
  clearCart();
}

/**
 * Shows checkout success overlay with order details
 * @param {number} total - Order total amount
 * @returns {void}
 */
function showCheckoutSuccess(total) {
  const totalText = `${total.toFixed(2).replace(".", ",")} €`;
  const deliveryTime = currentRestaurant?.deliveryTime || "25-40 min";

  document.getElementById("checkoutSuccessTotal").textContent = totalText;
  document.getElementById("checkoutSuccessDelivery").textContent = deliveryTime;
  document.getElementById("checkoutSuccessOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

/**
 * Clears all items from cart
 * @returns {void}
 */
function clearCart() {
  cart = [];
  updateCartCount();
  closeMobileCart();
}

/**
 * Closes checkout success overlay
 * @returns {void}
 */
function closeCheckoutSuccess() {
  document.getElementById("checkoutSuccessOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * Navigates back to main page
 * @returns {void}
 */
function goBack() {
  window.location.href = "index.html";
}

/**
 * Updates mobile cart display with current data
 * @returns {void}
 */
function updateMobileCartDisplay() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getCartSubtotal();

  updateMobileCartButton(totalItems, totalPrice);
  updateMobileCartContent();
}

/**
 * Updates mobile cart button with item count and total
 * @param {number} totalItems - Total number of items
 * @param {number} totalPrice - Total cart price
 * @returns {void}
 */
function updateMobileCartButton(totalItems, totalPrice) {
  const button = document.getElementById("mobileCartButton");
  const count = document.getElementById("mobileCartCount");
  const total = document.getElementById("mobileCartTotal");

  if (!button) return;

  count.textContent = totalItems;
  total.textContent = `${totalPrice.toFixed(2).replace(".", ",")} €`;
  button.style.display = totalItems > 0 ? "flex" : "none";
}

/**
 * Updates mobile cart content and footer
 * @returns {void}
 */
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

/**
 * Opens mobile cart overlay
 * @returns {void}
 */
function openMobileCart() {
  document.getElementById("mobileCartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

/**
 * Closes mobile cart overlay
 * @returns {void}
 */
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

  document
    .getElementById("mobileCartOverlay")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeMobileCart();
      }
    });

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
