let productsInCart = localStorage.getItem("products-in-cart")
productsInCart = JSON.parse(productsInCart)

const containerCartEmpty = document.querySelector("#cart-empty")
const containerCartProducts = document.querySelector("#cart-products")
const containerCartActions = document.querySelector("#cart-actions")
const containerCartBought = document.querySelector("#cart-bought")
let buttonsEliminar = document.querySelectorAll(".cart-product-eliminar")
const containerTotal = document.querySelector("#total")
const buttonBuy = document.querySelector("#cart-actions-buy")


function uploadProductsCart() {
    if (productsInCart && productsInCart.length > 0) {

        containerCartEmpty.classList.add("disabled")
        containerCartProducts.classList.remove("disabled")
        containerCartActions.classList.remove("disabled")
        containerCartBought.classList.add("disabled")
    
        containerCartProducts.innerHTML = ""
    
        productsInCart.forEach(product => {
    
            const div = document.createElement("div")
            div.classList.add("cart-product")
            div.innerHTML = `
                <img class="cart-product-image" src="${product.image}" alt="${product.title}">
                <div class="cart-product-title">
                    <small>Título</small>
                    <h3>${product.title}</h3>
                </div>
                <div class="cart-product-volume">
                    <small>Cantidad</small>
                    <p>${product.volume}</p>
                </div>
                <div class="cart-product-price">
                    <small>Precio Unitario</small>
                    <p>$${product.price}</p>
                </div>
                <div class="cart-product-subtotal">
                    <small>Subtotal</small>
                    <p>$${product.price * product.volume}</p>
                </div>
                <button class="cart-product-eliminar" id="${product.id}"><i class="bi bi-trash3"></i></button>
            `
            containerCartProducts.append(div)
        })
    
    updateButtonsEliminar()
    updateTotal()
	
    } else {
        containerCartEmpty.classList.remove("disabled")
        containerCartProducts.classList.add("disabled")
        containerCartActions.classList.add("disabled")
        containerCartBought.classList.add("disabled")
    }

}

uploadProductsCart()

function updateButtonsEliminar() {
    buttonsEliminar = document.querySelectorAll(".cart-product-eliminar")

    buttonsEliminar.forEach(button => {
        button.addEventListener("click", eliminarFromCart)
    })
}

function eliminarFromCart(e) {

    Toastify({
        text: "PRODUCTO ELIMINADO",
        duration: 2000,
        close: true,
        position: "right",
        gravity: "top",
        stopOnFocus: true,
        style: {
          background: "#f25563",
          borderRadius: "2rem",
          fontSize: "0.75rem"
        }
    }).showToast()

    const idButton = e.currentTarget.id
    const index = productsInCart.findIndex(product => product.id === idButton)
    
    productsInCart.splice(index, 1)
    uploadProductsCart()

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart))
}

function updateTotal() {
    const totalCalculate = productsInCart.reduce((acc, product) => acc + (product.price * product.volume), 0)
    total.innerText = `$${totalCalculate}`
}

buttonBuy.addEventListener("click", buyCart)

function buyCart() {

    Swal.fire({
        title: '¡Compra exitosa!',
        html: 'Nos pondremos en contacto a la brevedad',
        icon: 'success',
        confirmButtonColor: '#4593b7a2'
    })

    productsInCart.length = 0
    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart))
    
    containerCartEmpty.classList.add("disabled")
    containerCartProducts.classList.add("disabled")
    containerCartActions.classList.add("disabled")
    containerCartBought.classList.remove("disabled")
}