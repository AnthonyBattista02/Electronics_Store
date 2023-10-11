document.addEventListener('DOMContentLoaded', async function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalContainer = document.getElementById('subtotal');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;

    for (let productId of cart) {
        // Fetch product details from the backend
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        const product = await response.json();

        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <img src=${product.imageURL}> 
            <button onclick="removeFromCart('${product.id}')">Remove</button>
        `;
        cartItemsContainer.appendChild(productDiv);
        subtotal += parseFloat(product.price);
    }

    subtotalContainer.innerHTML = `Subtotal: $${subtotal.toFixed(2)}`;
});
