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

function createMenuCategoryButtonTemplate(category) {
  return `<button class="menu-category-btn" data-category="${category}" onclick="scrollToCategory('${category}')">
    ${category}
  </button>`;
}

function createRestaurantHeaderTemplate(restaurant) {
  return `
    <div class="restaurant-header">
      <h3 class="restaurant-name">${restaurant.name}</h3>
      <div class="restaurant-rating"><i class="fas fa-star"></i> ${restaurant.rating}</div>
    </div>
  `;
}

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
      ${createCartControlsTemplate(item.id, item.quantity)}
    </div>
  `;
}

function createEmptyCartStateTemplate() {
  return `
      <div class="cart-empty-state">
        <i class="fas fa-shopping-cart cart-empty-icon"></i>
        <p class="cart-empty-title">Ihr Warenkorb ist leer</p>
        <p class="cart-empty-subtitle">Fügen Sie Artikel aus dem Menü hinzu</p>
      </div>`;
}

function createCartControlsTemplate(itemId, quantity) {
  return `
    <div class="cart-item-controls">
      <button class="cart-quantity-btn decrease" onclick="changeCartQuantity('${itemId}', -1)">-</button>
      <span class="cart-quantity-display">${quantity}</span>
      <button class="cart-quantity-btn increase" onclick="changeCartQuantity('${itemId}', 1)">+</button>
    </div>
  `;
}

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
