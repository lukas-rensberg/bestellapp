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
function createRestaurantCardTemplate(restaurant, deliveryText) {
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
        ${createRestaurantDetailsTemplate(restaurant, deliveryText)}
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
function createRestaurantDetailsTemplate(restaurant, deliveryText) {
  return `
    <div class="restaurant-details-container">
      <div class="delivery-info"><i class="fas fa-clock"></i> <span>${restaurant.deliveryTime}</span></div>
      <div class="delivery-fee">${deliveryText}</div>
    </div>
  `;
}

/**
 * Creates HTML template for customizations list
 * @param {Array<string>} customItems - Array of customization names
 * @returns {string} HTML string for customizations list
 */
function createCustomizationsListTemplate(customItems) {
  return `<div class="cart-item-customizations">${customItems}</div>`;
}

/**
 * Creates HTML template for cart item
 * @param {Object} item - Cart item object
 * @returns {string} HTML string for cart item
 */
function createCartItemTemplate(item, customizationsList, priceText) {
  return `
    <div class="cart-item-row">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        ${customizationsList}
        <div class="cart-item-price-line">${priceText}</div>
      </div>
      <div class="cart-item-actions">
        <button class="cart-delete-btn" onclick="removeAllItemsOfType('${item.id}')" title="Alle ${item.name} entfernen">
          <i class="fas fa-trash"></i>
        </button>
        ${createCartControlsTemplate(item.id, item.quantity)}
      </div>
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
function createMenuItemTemplate(item, category, priceText, fallbackImage) {
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

function createCustomizationOptionTemplate(custom, index, prefix, priceText) {
  return `
    <div class="customization-option">
      <label>
        <input type="checkbox" onchange="toggleCustomization(${index})">
        ${prefix}${custom.name}
      </label>
      <span class="customization-price">${priceText}</span>
    </div>`;
}

function createMenuSectionTemplate(category, itemsHTML) {
  return `
    <div class="menu-section" id="section-${category}">
      <h2 class="menu-section-title">${category}</h2>
      <div class="menu-items">${itemsHTML}</div>
    </div>`;
}