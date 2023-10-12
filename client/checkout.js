document.addEventListener('DOMContentLoaded', async function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalContainer = document.getElementById('subtotal');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
  
    for (let productId of cart) {
        console.log("Fetching product with ID:", productId);
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        const product = response.data;
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
        <img id="productImage" src="${product.imageURL}" alt="${product.name}">
        <h2 id="productName">${product.name}</h2>
        <p id="productDescription">${product.description}</p>
        <p id="productPrice">Price: $${product.price.toFixed(2)}</p>
        <button class="removeFromCart" onclick="removeFromCart('${product._id}')">Remove</button>
    `;
        cartItemsContainer.appendChild(productDiv);
        subtotal += parseFloat(product.price);
    }
    subtotalContainer.innerHTML = `Subtotal: $${subtotal.toFixed(2)}`;
});

function removeFromCart(productId) {
    // Get the current cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Remove the product ID from the cart array
    cart = cart.filter(id => id !== productId);
    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Refresh the page to reflect the changes (you can also manually update the DOM if you prefer not to refresh)
    location.reload();
}