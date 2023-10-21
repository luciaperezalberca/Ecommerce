let products = []

fetch("js/products.json")
    .then(response => response.json())
    .then(data => {
        products = data
        uploadProducts(products)
    })

const containerProducts = document.querySelector("#container-products")
const buttonsCategories = document.querySelectorAll(".button-category")
const titlePrincipal = document.querySelector("#title-principal")
let buttonsAdd = document.querySelectorAll(".product-add")
const littleNumber = document.querySelector("#littleNumber")


function uploadProducts(productsChosen) {

    containerProducts.innerHTML = ""

    productsChosen.forEach(product => {

        const div = document.createElement("div")
        div.classList.add("product")
        div.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.title}">
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price}</p>
                <button class="product-add" id="${product.id}">Agregar</button>
            </div>
        `
        containerProducts.append(div)
    })

    updateButtonsAdd()
}

uploadProducts(products)

buttonsCategories.forEach(button => {
    button.addEventListener("click", (e) => {

        buttonsCategories.forEach(button => button.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {
            const productCategory = products.find(product => product.category.id === e.currentTarget.id)
            titlePrincipal.innerText = productCategory.category.nombre

            const productsButton = products.filter(product => product.category.id === e.currentTarget.id)
            uploadProducts(productsButton)
        } else {
            titlePrincipal.innerText = "Todos los productos"
            uploadProducts(products)
        }
    })
})

function updateButtonsAdd() {
    buttonsAdd = document.querySelectorAll(".product-add")

    buttonsAdd.forEach(button => {
        button.addEventListener("click", addToCart)
    })
}

let productsInCart = JSON.parse(localStorage.getItem("products-in-cart")) || []
if (productsInCart.length > 0) updateLittleNumber()

function addToCart(e) {

    Toastify({
        text: "PRODUCTO AGREGADO",
        duration: 2000,
        close: true,
        position: "right",
        gravity: "top",
        stopOnFocus: true,
        style: {
          background: "#4593b7a2",
          borderRadius: "2rem",
          fontSize: "0.75rem"
        }
    }).showToast()

    const idButton = e.currentTarget.id
    const productIncorporated = products.find(product => product.id === idButton)

    if (productsInCart.some(product => product.id === idButton)) {
        const index = productsInCart.findIndex(product => product.id === idButton)
        productsInCart[index].volume++
    } else {
        productIncorporated.volume = 1
        productsInCart.push(productIncorporated)
    }

    updateLittleNumber()

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart))
}

function updateLittleNumber() {
    let newLittleNumber = productsInCart.reduce((acc, product) => acc + product.volume, 0)
    littleNumber.innerText = newLittleNumber
}