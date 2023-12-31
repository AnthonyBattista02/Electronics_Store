const allCategories = document.querySelector('#allCat')
const category1 = document.querySelector('#cat1')
const category2 = document.querySelector('#cat2')
const category3 = document.querySelector('#cat3')
const category4 = document.querySelector('#cat4')
const category5 = document.querySelector('#cat5')
const category6 = document.querySelector('#cat6')
const enter = document.querySelector(`#enter`)
let allProducts
let cat1Data
let cat2Data
let cat3Data
let cat4Data
let cart = []

async function getProducts() {
    const response = await axios.get(`http://localhost:3001/products`)
    return response.data
}
async function getCat1() {
    const response = await axios.get(`http://localhost:3001/products/category/Mobile%20Devices`)
    return response.data
}
async function getCat2() {
    const response = await axios.get(`http://localhost:3001/products/category/Accessories`)
    return response.data
}
async function getCat3() {
    const response = await axios.get(`http://localhost:3001/products/category/Audio`)
    return response.data
}
async function getCat4() {
    const response = await axios.get(`http://localhost:3001/products/category/Gaming`)
    return response.data
}
async function getCat5() {
    const response = await axios.get(`http://localhost:3001/products/category/Photography`)
    return response.data
}
async function getCat6() {
    const response = await axios.get(`http://localhost:3001/products/category/Wearables`)
    return response.data
}


async function yes() {
    allProducts = await getProducts()
    console.log(allProducts)
    displayAll(allProducts)
}
yes()


let lastLength = 0;
isDisplayed = false

const displayAll = (currentProducts) => {
    if (isDisplayed == true) {
        for (i = 0; i < lastLength; i++) {
            let product = document.querySelector('.product')
            if (product) {
                product.remove()
            } else {
                console.log("DNE")
            }
        } 
    }
    for (i = 0; i < currentProducts.length; i++) {
        const container = document.getElementById('product-container')
        const product = document.createElement('div')
        console.log(`createelement`)
        product.className = 'product'
        product.id = `product${i+1}`
        product.innerHTML = 
            `<img id="productImage" src=${currentProducts[i].imageURL}> 
            <h3 id="productName">${currentProducts[i].name}</h3>
            <p id="productDescription">${currentProducts[i].description}</p>
            <h4 id="productPrice">$${currentProducts[i].price}</h4>
            <button class="addToCart" data-product-id="${currentProducts[i]._id}" >Add To Cart</button>`
        container.appendChild(product)
    isDisplayed = true
    lastLength = currentProducts.length
    }
    
}

category1.onclick = async() => {
    cat1Data = await getCat1()
    console.log(cat1Data)
    displayAll(cat1Data)
}
category2.onclick = async() => {
    cat2Data = await getCat2()
    console.log(cat2Data)
    displayAll(cat2Data)
}
category3.onclick = async() => {
    cat3Data = await getCat3()
    console.log(cat3Data)
    displayAll(cat3Data)
}
category4.onclick = async() => {
    cat4Data = await getCat4()
    console.log(cat4Data)
    displayAll(cat4Data)
}
category5.onclick = async() => {
    cat5Data = await getCat5()
    console.log(cat5Data)
    displayAll(cat5Data)
}
category6.onclick = async() => {
    cat6Data = await getCat6()
    console.log(cat6Data)
    displayAll(cat6Data)
}
allCategories.onclick = async() => {
    allProducts = await getProducts()
    console.log(allProducts)
    displayAll(allProducts)
}

enter.onclick = async() => {
    let textInput = document.querySelector("#inputText").value.trim().toLowerCase();
    console.log(textInput);
    allProducts = await getProducts();
    const matchedProducts = allProducts.filter(product => product.name.toLowerCase().includes(textInput));
    if (matchedProducts.length > 0) {
        displayAll(matchedProducts);
    } else {
        // Handle the case where no products match the search
        console.log("No products matched the search.");
    }
}

// enter.onclick = async() => {
//     let textInput = document.querySelector("#inputText").value
//     console.log(textInput)
//     allProducts = await getProducts()
    
//     for (i = 0; i < allProducts.length; i++) {
//         console.log(allProducts[i])
//         if (textInput == allProducts[i].name) {
//             displayAll(allProducts[i])
//         }
//     }
// }
    
document.body.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('addToCart')) {
        const productId = event.target.getAttribute('data-product-id')
        cart.push(productId)
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart:', cart)
        localStorage.setItem('cart', JSON.stringify(cart));
        redDot = document.getElementById(`redDot`)
        redDot.style.visibility = 'visible'
    }
})
