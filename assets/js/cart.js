let cart = [];

/**
 * Updates cart item count display across all elements
 * @returns {void}
 */
function updateCartCount() {
  const totalItems = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);

  updateCartText(totalItems);
  updateCartDisplay();
  updateMobileCartDisplay();
}

/**
 * Updates cart count text elements
 * @param {number} totalItems - Total number of items in cart
 * @returns {void}
 */
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

/**
 * Shows empty cart state in UI elements
 * @param {HTMLElement} cartItems - Cart items container
 * @param {HTMLElement} cartTotal - Cart total element
 * @param {HTMLElement} cartCheckout - Checkout button element
 * @returns {void}
 */
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

/**
 * Updates cart items display
 * @param {HTMLElement} cartItems - Cart items container element
 * @returns {void}
 */
function updateCartItems(cartItems) {
  if (cartItems) {
    if (!customizations || customizations.length === 0) return "";

    const customItems = customizations
      .map((custom) => {
        const prefix = custom.startsWith("Ohne") ? custom : "Mit " + custom;
        return `<span class="cart-item-customization">• ${prefix}</span>`;
      })
      .join("");
    const customizationsList = createCustomizationsListTemplate(customItems);
    const priceText = `${item.price.toFixed(2).replace(".", ",")} € × ${
      item.quantity
    }`;
    cartItems.innerHTML = cart
      .map((item) =>
        createCartItemTemplate(item, customizationsList, priceText)
      )
      .join("");
  }
}

/**
 * Calculates total cart subtotal
 * @returns {number} Cart subtotal amount
 */
function getCartSubtotal() {
  return cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
}

/**
 * Updates cart total display element
 * @param {HTMLElement} cartTotal - Cart total display element
 * @returns {void}
 */
function updateCartTotal(cartTotal) {
  const subtotal = getCartSubtotal();
  if (cartTotal) {
    cartTotal.textContent = `${subtotal.toFixed(2).replace(".", ",")} €`;
  }
}

/**
 * Updates checkout button state and text
 * @param {HTMLElement} cartCheckout - Checkout button element
 * @returns {void}
 */
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

/**
 * Updates the sticky cart display with current cart data
 * @returns {void}
 */
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

/**
 * Changes quantity of item in cart
 * @param {string} itemId - Unique item identifier
 * @param {number} change - Quantity change (+1 or -1)
 * @returns {void}
 */
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

/**
 * Clears all items from cart
 * @returns {void}
 */
function clearCart() {
  cart = [];
  updateCartCount();
  closeMobileCart();
}

/**
 * Closes checkout success overlay
 * @returns {void}
 */
function closeCheckoutSuccess() {
  document.getElementById("checkoutSuccessOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * Updates mobile cart display with current data
 * @returns {void}
 */
function updateMobileCartDisplay() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getCartSubtotal();

  updateMobileCartButton(totalItems, totalPrice);
  updateMobileCartContent();
}

/**
 * Updates mobile cart button with item count and total
 * @param {number} totalItems - Total number of items
 * @param {number} totalPrice - Total cart price
 * @returns {void}
 */
function updateMobileCartButton(totalItems, totalPrice) {
  const button = document.getElementById("mobileCartButton");
  const count = document.getElementById("mobileCartCount");
  const total = document.getElementById("mobileCartTotal");

  if (!button) return;

  count.textContent = totalItems;
  total.textContent = `${totalPrice.toFixed(2).replace(".", ",")} €`;
}

/**
 * Updates mobile cart content and footer
 * @returns {void}
 */
function updateMobileCartContent() {
  const itemsContainer = document.getElementById("mobileCartItems");
  const itemCount = document.getElementById("mobileCartItemCount");
  const footerTotal = document.getElementById("mobileCartFooterTotal");
  const checkoutBtn = document.getElementById("mobileCartCheckout");

  if (!itemsContainer) return;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getCartSubtotal();

  itemCount.textContent = totalItems;
  footerTotal.textContent = `${totalPrice.toFixed(2).replace(".", ",")} €`;

  if (cart.length === 0) {
    itemsContainer.innerHTML = createEmptyCartStateTemplate();
    checkoutBtn.disabled = true;
    checkoutBtn.textContent = "Warenkorb leer";
  } else {
    if (!item.customizations || item.customizations.length === 0) return "";

    const customItems = item.customizations
      .map((custom) => {
        const prefix = custom.startsWith("Ohne") ? custom : "Mit " + custom;
        return `<span class="cart-item-customization">• ${prefix}</span>`;
      })
      .join("");
    const customizationsList = createCustomizationsListTemplate(customItems);
    const priceText = `${item.price.toFixed(2).replace(".", ",")} € × ${
      item.quantity
    }`;
    itemsContainer.innerHTML = cart
      .map((item) =>
        createCartItemTemplate(item, customizationsList, priceText)
      )
      .join("");
    checkoutBtn.disabled = false;
    checkoutBtn.textContent = "Bestellen";
  }
}

/**
 * Opens mobile cart overlay
 * @returns {void}
 */
function openMobileCart() {
  document.getElementById("mobileCartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

/**
 * Closes mobile cart overlay
 * @returns {void}
 */
function closeMobileCart() {
  document.getElementById("mobileCartOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * Checks if item matches existing cart item
 * @param {Object} newItem - New item to check
 * @param {Object} cartItem - Existing cart item
 * @returns {boolean} True if items match
 */
function checkMatchingItems(newItem, cartItem) {
  if (newItem.name !== cartItem.name) return false;
  if (newItem.price !== cartItem.price) return false;
  if (newItem.customizations.length !== cartItem.customizations.length)
    return false;

  const sortedNew = [...newItem.customizations].sort();
  const sortedCart = [...cartItem.customizations].sort();

  return sortedNew.every((custom, index) => custom === sortedCart[index]);
}
