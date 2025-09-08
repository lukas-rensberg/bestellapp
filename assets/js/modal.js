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

  return createCustomizationOptionTemplate(custom, index, prefix, priceText);
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
