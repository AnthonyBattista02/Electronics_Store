const category1 = document.querySelector('#cat1')
const category2 = document.querySelector('#cat2')
const category3 = document.querySelector('#cat3')
const category4 = document.querySelector('#cat4')
const enter = document.querySelector(`#enter`)
// async function fetchProducts() {
//     try {
//         const response = await fetch('http://localhost:3001/products');
//         const products = await response.json();
//         // Render products in the frontend
//     } catch (error) {
//         console.error('Failed to fetch products:', error);
//     }
// }
// console.log(fetchProducts)

async function getProducts () {
    const response = await axios.get('http://localhost:3001/products')

    console.log(response)
}

getProducts()

const allProducts = [{name: "ex1", img: ".https://www.foodnetwork.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg"}, 
{name: "ex2", img: ".https://www.foodnetwork.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg"}, 
{name: "ex3", img: ".https://www.foodnetwork.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg"}, 
{name: "ex4", img: ".https://www.foodnetwork.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg"}]
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
        const product = document.createElement('div')
        product.className = 'product'
        product.id = `product${i}`
        product.innerHTML = 
            `<img src=${currentProducts[i-1].img}> 
            <h3>TONY</h3>
            <button id="addToCart">Add To Cart</button>`
        document.body.appendChild(product)
    isDisplayed = true
    lastLength = currentProducts.length
    }
    return lastLength
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
    
let products = displayAll(allProducts)

document.body.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'addToCart') {
        cart.push(event.target.parentNode.id);
        console.log(cart);
    }
});


// const addToCart = document.querySelector(`.addToCart`)
// for (i = 0; i < products; i++)
//     addToCart.onclick = () => {
//         cart.push(addToCart.parentNode.id)
//         console.log(cart)
// }  
