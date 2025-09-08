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

function openRestaurantDetailsPage(restaurantId) {
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  if (restaurant) {
    window.location.href = `restaurant.html?id=${restaurantId}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  changeToSavedTheme();

  renderRestaurants();
});
