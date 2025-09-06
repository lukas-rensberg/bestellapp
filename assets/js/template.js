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
    <div class="restaurant-details">
      <div class="delivery-info"><i class="fas fa-clock"></i> <span>${restaurant.deliveryTime}</span></div>
      <div class="delivery-fee">${deliveryText}</div>
    </div>
  `;
}
