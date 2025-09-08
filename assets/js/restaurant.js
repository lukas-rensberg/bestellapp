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
    document.getElementById("menuSections").innerHTML =
      "<p>Menü wird geladen...</p>";
    return;
  }

  generateMenuCategories(menu);

  const sectionsContainer = document.getElementById("menuSections");
  sectionsContainer.innerHTML = menu.categories
    .map((category) => {
      const items = menu.items[category] || [];
      return `
      <div class="menu-section" id="section-${category}">
        <h2 class="menu-section-title">${category}</h2>
        <div class="menu-items">
          ${items
            .map(
              (item) => `
            <div class="menu-item" onclick="openItemModal(${
              item.id
            }, '${category}')">
              <div class="menu-item-info">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-price">${item.price
                  .toFixed(2)
                  .replace(".", ",")} €</div>
              </div>
              <img src="${item.image}" alt="${
                item.name
              }" class="menu-item-image" 
                   onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik01MCA0MEg3MFY2MEg1MFY0MFoiIGZpbGw9IiNFOUVDRUYiLz4KPHN2Zz4K'" />
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    })
    .join("");
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

function createCustomizationsListTemplate(customizations) {
  if (!customizations || customizations.length === 0) return "";

  const customItems = customizations
    .map((custom) => {
      const prefix = custom.startsWith("Ohne") ? custom : "Mit " + custom;
      return `<span class="cart-item-customization">• ${prefix}</span>`;
    })
    .join("");

  return `<div class="cart-item-customizations">${customItems}</div>`;
}

function createCartItemTemplate(item) {
  const customizationsList = createCustomizationsListTemplate(
    item.customizations
  );
  const priceText = `${item.price.toFixed(2).replace(".", ",")} € × ${
    item.quantity
  }`;

  return `
    <div class="cart-item-row">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        ${customizationsList}
        <div class="cart-item-price-line">${priceText}</div>
      </div>
      ${createCartControls(item.id, item.quantity)}
    </div>
  `;
}

function createCartControls(itemId, quantity) {
  return `
    <div class="cart-item-controls">
      <button class="cart-quantity-btn decrease" onclick="changeCartQuantity('${itemId}', -1)">-</button>
      <span class="cart-quantity-display">${quantity}</span>
      <button class="cart-quantity-btn increase" onclick="changeCartQuantity('${itemId}', 1)">+</button>
    </div>
  `;
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

function createEmptyCartStateTemplate() {
  return `
      <div class="cart-empty-state">
        <i class="fas fa-shopping-cart cart-empty-icon"></i>
        <p class="cart-empty-title">Ihr Warenkorb ist leer</p>
        <p class="cart-empty-subtitle">Fügen Sie Artikel aus dem Menü hinzu</p>
      </div>`;
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

  modalItem = item;
  modalQuantity = 1;
  modalCustomizations = [];

  document.getElementById("modalItemImage").src = item.image;
  document.getElementById("modalItemName").textContent = item.name;
  document.getElementById("modalItemDescription").textContent =
    item.description;
  document.getElementById("modalItemPrice").textContent = `${item.price
    .toFixed(2)
    .replace(".", ",")} €`;
  document.getElementById("modalQuantity").textContent = modalQuantity;

  const customizationsContainer = document.getElementById(
    "modalCustomizations"
  );
  if (item.customizations && item.customizations.length > 0) {
    customizationsContainer.innerHTML = item.customizations
      .map(
        (custom, index) => `
      <div class="customization-option">
        <label>
          <input type="checkbox" onchange="toggleCustomization(${index})">
          ${custom.type === "remove" ? "Ohne " : ""}${custom.name}
        </label>
        <span class="customization-price">${
          custom.price > 0 ? "+" : ""
        }${custom.price.toFixed(2).replace(".", ",")} € </span>
      </div>
    `
      )
      .join("");
  } else {
    customizationsContainer.innerHTML =
      '<p style="color: var(--text-secondary); font-style: italic;">Keine Anpassungen verfügbar</p>';
  }

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

  const customizationNames = modalCustomizations.map((index) => {
    const custom = modalItem.customizations[index];
    return custom.type === "remove" ? `Ohne ${custom.name}` : custom.name;
  });
  const customizationPrice = modalCustomizations.reduce(
    (sum, index) => sum + modalItem.customizations[index].price,
    0
  );

  const cartItem = {
    id: `${modalItem.id}-${Date.now()}`,
    restaurantId: getRestaurantId(),
    name: modalItem.name,
    price: modalItem.price + customizationPrice,
    quantity: modalQuantity,
    customizations: customizationNames,
    image: modalItem.image,
  };

  cart.push(cartItem);
  updateCartCount();

  closeItemModal();

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

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  alert(
    `Bestellung wird verarbeitet...\n\n
        Gesamtsumme: ${total.toFixed(2).replace(".", ",")} €\n\n
        Sie wird in ${deliveryTime} geliefert.\n\n
        Vielen Dank für Ihre Bestellung!`
  );

  cart = [];
  updateCartCount();
}

function goBack() {
  window.location.href = "index.html";
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

  const cartStickyCheckout = document.getElementById("cartStickyCheckout");
  if (cartStickyCheckout) {
    cartStickyCheckout.addEventListener("click", function () {
      if (this.disabled || cart.length === 0) return;

      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      alert(
        `Bestellung wird verarbeitet...\n\nGesamtsumme: €${total.toFixed(
          2
        )}\n\nVielen Dank für Ihre Bestellung!`
      );

      cart = [];
      updateCartCount();
    });
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
