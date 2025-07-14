
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalPriceSpan = document.getElementById('cart-total-price');
    const clearCartButton = document.getElementById('clear-cart-btn');

    // Initialize cart from localStorage or as an empty array
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Function to save cart to localStorage
    function saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Function to render cart items in the HTML
    function renderCart() {
        cartItemsList.innerHTML = ''; // Clear current cart display
        let total = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<li style="text-align: center; color: #555;">Your cart is empty.</li>';
            cartTotalPriceSpan.textContent = '0.00';
            return;
        }

        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.title}" style="width: 50px; height: auto; margin-right: 10px;">
                <span>${item.title} - $${item.price.toFixed(2)}</span>
                <span class="cart-item-controls">
                    Quantity: <input type="number" class="cart-item-quantity" data-index="${index}" value="${item.quantity}" min="1">
                    <button class="remove-from-cart" data-index="${index}">Remove</button>
                </span>
            `;
            cartItemsList.appendChild(listItem);
            total += item.price * item.quantity;
        });

        cartTotalPriceSpan.textContent = total.toFixed(2);
        saveCart(); // Save cart to localStorage after rendering
    }

    // Initial render of the cart when the page loads
    renderCart();

    // Event listener for "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const productCard = event.target.closest('.arrivals_card');
            const title = productCard.dataset.title;
            const price = parseFloat(productCard.dataset.price);
            const imageSrc = productCard.dataset.image; // Corrected: use productCard instead of undefined 'card'

            const existingItem = cart.find(item => item.title === title);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ title, price, imageSrc, quantity: 1 }); // Ensure imageSrc is stored
            }
            renderCart(); // Re-render the cart display
        });
    });

    // Event listener for quantity changes and remove buttons (using event delegation)
    cartItemsList.addEventListener('change', (event) => {
        if (event.target.classList.contains('cart-item-quantity')) {
            const index = parseInt(event.target.dataset.index);
            const newQuantity = parseInt(event.target.value);
            if (newQuantity > 0) {
                cart[index].quantity = newQuantity;
            } else {
                // If quantity is 0 or less, remove the item
                cart.splice(index, 1);
            }
            renderCart();
        }
    });

    cartItemsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = parseInt(event.target.dataset.index);
            cart.splice(index, 1); // Remove item from array
            renderCart();
        }
    });

    // Clear cart functionality
    clearCartButton.addEventListener('click', () => {
        cart = []; // Empty the cart array
        renderCart();
    });
});