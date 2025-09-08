/**
 * @fileoverview Restaurant page functionality including menu display, cart management, and ordering
 * @author Lukas Rensberg
 * @version 1.0.0
 */

let currentRestaurant = null;
let modalItem = null;
let modalQuantity = 1;
let modalCustomizations = [];

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

  generateMenuCategories(menu);
  renderMenuSections(menu);
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
  const priceText = `${item.price.toFixed(2).replace(".", ",")} €`;
  const fallbackImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNGOEZGOUZBIi8+PHBhdGggZD0iTTUwIDQwSDcwVjYwSDUwVjQwWiIgZmlsbD0iI0U5RUNFRiIvPjwvc3ZnPg==";

  const itemsHTML = (items || [])
    .map((item) =>
      createMenuItemTemplate(item, category, priceText, fallbackImage)
    )
    .join("");

  return createMenuSectionTemplate(category, itemsHTML);
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
 * Navigates back to main page
 * @returns {void}
 */
function goBack() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  initRestaurantPage();

  setTimeout(() => window.stop(), 100);
});

window.addEventListener("scroll", function () {
  const categoryButtons = document.querySelectorAll(".menu-category-btn");
  const sections = document.querySelectorAll(".menu-section");

  let currentSection = "";

  sections.forEach((section) => {
    currentSection = section.id.replace("section-", "");
  });

  if (currentSection) {
    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.category === currentSection) btn.classList.add("active");
    });
  }
});
