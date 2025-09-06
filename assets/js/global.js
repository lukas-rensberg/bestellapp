window.FontAwesomeConfig = {
  autoReplaceSvg: true,
  autoAddCss: true,
};

function toggleTheme() {
  const toggleTheme = document.getElementById("toggleTheme");

  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    toggleTheme.innerHTML = '<i class="fa-regular fa-moon"></i>';
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    toggleTheme.innerHTML = '<i class="fa-regular fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  }
}

function changeToSavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  const toggleTheme = document.getElementById("toggleTheme");

  if (!toggleTheme) return;
  if (savedTheme === "dark") {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    toggleTheme.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    toggleTheme.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
}

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

function updateRestaurantCount(count) {
  const restaurantCount = document.querySelector(".restaurant-count");
  const text = `${count} Restaurant${count !== 1 ? "s" : ""} verfügbar`;
  restaurantCount.textContent = text;
}

function renderRestaurants(restaurantsToShow = restaurants) {
  if (
    window.location.pathname !== "/index.html" &&
    window.location.pathname !== "/"
  )
    return;
  const restaurantGrid = document.getElementById("restaurantGrid");

  updateRestaurantCount(restaurantsToShow.length);
  restaurantGrid.innerHTML = restaurantsToShow
    .map((restaurant) => createRestaurantCardTemplate(restaurant))
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  changeToSavedTheme();

  renderRestaurants();
});
