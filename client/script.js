const allProducts = [{name: "ex1", img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg"}, 
{name: "ex2", img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg"}, 
{name: "ex3", img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg"}, 
{name: "ex4", img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg"}]

function displayAll() {
for (i = 1; i <= allProducts.length; i++) {
    const product = document.createElement('div')
    product.className = 'product'
    product.id = `product${i}`
    product.innerHTML = 
        `<img src=${allProducts[i-1].img}> 
        <h3>TONY</h3>`
    document.body.appendChild(product)
    console.log('heue')
}
}

function displayCat() {
    
}

displayAll()