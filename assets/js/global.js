/**
 * @fileoverview Global functionality for theme management and startpage functionality
 * @author Lukas Rensberg
 * @version 1.0.0
 */

/** @type {Object} FontAwesome configuration */
window.FontAwesomeConfig = {
  autoReplaceSvg: true,
  autoAddCss: true,
};

/**
 * Toggles between light and dark theme
 * @returns {void}
 */
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

/**
 * Applies previously saved theme from localStorage
 * @returns {void}
 */
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

/**
 * Updates restaurant count display text
 * @param {number} count - Number of restaurants to display
 * @returns {void}
 */
function updateRestaurantCount(count) {
  const restaurantCount = document.querySelector(".restaurant-count");
  const text = `${count} Restaurant${count !== 1 ? "s" : ""} verfügbar`;
  restaurantCount.textContent = text;
}

/**
 * Renders restaurant cards on the main page
 * @param {Array<Object>} restaurantsToShow - Array of restaurants to display
 * @returns {void}
 */
function renderRestaurants(restaurantsToShow = restaurants) {
  if (
    window.location.pathname !== "/bestellapp/" &&
    window.location.pathname !== "/bestellapp/index.html"
  )
    return;
  const restaurantGrid = document.getElementById("restaurantGrid");

  updateRestaurantCount(restaurantsToShow.length);
  restaurantGrid.innerHTML = restaurantsToShow
    .map((restaurant) => createRestaurantCardTemplate(restaurant))
    .join("");
}

/**
 * Filters restaurants by category and updates display
 * @param {string} category - Category to filter by ('all' for no filter)
 * @returns {void}
 */
function filterRestaurants(category) {
  currentFilter = category;

  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.querySelector(`[data-filter="${category}"]`).classList.add("active");

  const filteredRestaurants =
    category === "all"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  renderRestaurants(filteredRestaurants);
}

/**
 * Navigates to restaurant details page
 * @param {number} restaurantId - ID of restaurant to view
 * @returns {void}
 */
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
