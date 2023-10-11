const category1 = document.querySelector('#cat1')
const category2 = document.querySelector('#cat2')
const category3 = document.querySelector('#cat3')
const category4 = document.querySelector('#cat4')
const enter = document.querySelector(`#enter`)

async function getProducts() {
    const response = await axios.get(`http://localhost:3001/products`)
    
    console.log(response.data)
    return response.data
}

const allProducts = getProducts()
console.log(allProducts)
const cat1Products = [{name: "ex4"}, {name: "ex4"}]
const cat2Products = [{name: "ex4"}, {name: "ex4"}]
const cat3Products = [{name: "ex4"}, {name: "ex4"}]
const cat4Products = [{name: "ex4"}, {name: "ex4"}, {name: "ex4"}]
let cart = []
let lastLength = 0;
isDisplayed = false
const displayAll = (currentProducts) => {
    if (isDisplayed == true) {
        for (i = 0; i < lastLength; i++) {
            let product = document.querySelector('.product')
            product.parentNode.removeChild(product)
        } 
    }
    for (i = 1; i <= currentProducts.length; i++) {
        const container = document.getElementById('product-container')
        const product = document.createElement('div')
        product.className = 'product'
        product.id = `product${i}`
        product.innerHTML = 
            `<img src=${currentProducts[i-1].imageURL}> 
            <h3>${currentProducts[i-1].name}</h3>
            <p>${currentProducts[i-1].description}</p>
            <h4>$${currentProducts[i-1].price}</h4>
            <button id="addToCart">Add To Cart</button>`
        container.appendChild(product)
    isDisplayed = true
    lastLength = currentProducts.length
    }
    
}

category1.onclick = () => {
    displayAll(cat1Products)
}
category2.onclick = () => {
    displayAll(cat2Products)
}
category3.onclick = () => {
    displayAll(cat3Products)
}
category4.onclick = () => {
    displayAll(cat4Products)
}

enter.onclick = () => {
    let textInput = document.querySelector("#inputText").value
    console.log(textInput)
}
    
displayAll(allProducts)

document.body.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'addToCart') {
        cart.push(event.target.parentNode.id);
        console.log(cart);
    }
});
