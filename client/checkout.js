document.addEventListener('DOMContentLoaded', async function() {
    await getProducts()
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalContainer = document.getElementById('subtotal');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
  
    for (let productId of cart) {
        console.log("Fetching product with ID:", productId);
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        const product = response.data;
        const productDiv = document.createElement('div');
        productDiv.setAttribute('data-product-id', product._id);
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

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the index of the product ID in the cart array
    const index = cart.indexOf(productId);

    // If the product ID is found, remove it from the cart array
    if (index > -1) {
        cart.splice(index, 1);
    }
    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Remove the product div from the cartItemsContainer
    const productDiv = document.querySelector(`div[data-product-id="${productId}"]`);
    if (productDiv) {
        productDiv.remove();
    }

    updateSubtotal();
}

//Global products setup
let products = [];
async function getProducts() {
    const response = await axios.get('http://localhost:3001/products');
    products = response.data;
    console.log(products);
    return products;
}


function updateSubtotal() {
    let subtotal = 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    for (let productId of cart) {
        // Assuming you have a global products array or similar
        const product = products.find(p => p._id === productId);
        if (product) {
            subtotal += parseFloat(product.price);
        }
    }
    const subtotalContainer = document.getElementById('subtotal');
    subtotalContainer.innerHTML = `Subtotal: $${subtotal.toFixed(2)}`;
}