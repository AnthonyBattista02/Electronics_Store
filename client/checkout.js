document.addEventListener('DOMContentLoaded', async function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalContainer = document.getElementById('subtotal');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;

    for (let productId of cart) {
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        const product = response.data;

        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
        <img src="${product.imageURL}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
        <button onclick="removeFromCart('${product._id}')">Remove</button>
    `;
        cartItemsContainer.appendChild(productDiv);
        subtotal += parseFloat(product.price);
    }

    subtotalContainer.innerHTML = `Subtotal: $${subtotal.toFixed(2)}`;
});
