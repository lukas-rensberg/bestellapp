/**
 * @fileoverview Template functions for generating HTML components
 * @author Bestellapp
 * @version 1.0.0
 */

/**
 * Creates HTML template for restaurant card
 * @param {Object} restaurant - Restaurant data object
 * @returns {string} HTML string for restaurant card
 */
function createRestaurantCardTemplate(restaurant) {
  return `
    <div class="restaurant-card" onclick="openRestaurantDetailsPage(${
      restaurant.id
    })">
      <img src="${restaurant.image}" alt="${
    restaurant.name
  }" class="restaurant-image" />
      <div class="restaurant-info">
        ${createRestaurantHeaderTemplate(restaurant)}
        <p class="restaurant-cuisine">${restaurant.cuisine}</p>
        ${createRestaurantDetailsTemplate(restaurant)}
      </div>
    </div>
  `;
}

/**
 * Creates HTML template for menu category button
 * @param {string} category - Category name
 * @returns {string} HTML string for category button
 */
function createMenuCategoryButtonTemplate(category) {
  return `<button class="menu-category-btn" data-category="${category}" onclick="scrollToCategory('${category}')">
    ${category}
  </button>`;
}

/**
 * Creates HTML template for restaurant header with name and rating
 * @param {Object} restaurant - Restaurant data object
 * @returns {string} HTML string for restaurant header
 */
function createRestaurantHeaderTemplate(restaurant) {
  return `
    <div class="restaurant-header">
      <h3 class="restaurant-name">${restaurant.name}</h3>
      <div class="restaurant-rating"><i class="fas fa-star"></i> ${restaurant.rating}</div>
    </div>
  `;
}

/**
 * Creates HTML template for restaurant delivery details
 * @param {Object} restaurant - Restaurant data object
 * @returns {string} HTML string for restaurant details
 */
function createRestaurantDetailsTemplate(restaurant) {
  const deliveryText =
    restaurant.deliveryFee === 0
      ? "Kostenlose Lieferung"
      : `${restaurant.deliveryFee.toFixed(2).replace(".", ",")} € Lieferung`;

  return `
    <div class="restaurant-details-container">
      <div class="delivery-info"><i class="fas fa-clock"></i> <span>${restaurant.deliveryTime}</span></div>
      <div class="delivery-fee">${deliveryText}</div>
    </div>
  `;
}

/**
 * Creates HTML template for customizations list
 * @param {Array<string>} customizations - Array of customization names
 * @returns {string} HTML string for customizations list
 */
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

/**
 * Creates HTML template for cart item
 * @param {Object} item - Cart item object
 * @returns {string} HTML string for cart item
 */
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
      ${createCartControlsTemplate(item.id, item.quantity)}
    </div>
  `;
}

/**
 * Creates HTML template for empty cart state
 * @returns {string} HTML string for empty cart state
 */
function createEmptyCartStateTemplate() {
  return `
      <div class="cart-empty-state">
        <i class="fas fa-shopping-cart cart-empty-icon"></i>
        <p class="cart-empty-title">Ihr Warenkorb ist leer</p>
        <p class="cart-empty-subtitle">Fügen Sie Artikel aus dem Menü hinzu</p>
      </div>`;
}

/**
 * Creates HTML template for cart item controls
 * @param {string} itemId - Unique item identifier
 * @param {number} quantity - Item quantity
 * @returns {string} HTML string for cart controls
 */
function createCartControlsTemplate(itemId, quantity) {
  return `
    <div class="cart-item-controls">
      <button class="cart-quantity-btn decrease" onclick="changeCartQuantity('${itemId}', -1)">-</button>
      <span class="cart-quantity-display">${quantity}</span>
      <button class="cart-quantity-btn increase" onclick="changeCartQuantity('${itemId}', 1)">+</button>
    </div>
  `;
}

/**
 * Creates HTML template for menu item
 * @param {Object} item - Menu item object
 * @param {string} category - Item category
 * @returns {string} HTML string for menu item
 */
function createMenuItemTemplate(item, category) {
  const priceText = `${item.price.toFixed(2).replace(".", ",")} €`;
  const fallbackImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNGOEZGOUZBIi8+PHBhdGggZD0iTTUwIDQwSDcwVjYwSDUwVjQwWiIgZmlsbD0iI0U5RUNFRiIvPjwvc3ZnPg==";

  return `
    <div class="menu-item" onclick="openItemModal(${item.id}, '${category}')">
      <div class="menu-item-info">
        <h3 class="menu-item-name">${item.name}</h3>
        <p class="menu-item-description">${item.description}</p>
        <div class="menu-item-price">${priceText}</div>
      </div>
      <img src="${item.image}" alt="${item.name}" class="menu-item-image" 
           onerror="this.src='${fallbackImage}'" />
    </div>`;
}
