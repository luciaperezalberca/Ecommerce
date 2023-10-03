let productos = [
    {
        "id": "1",
        "titulo": "Low Dunk Azul",
        "imagen": "../img/nike-lowdunk-azul.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 50000
    },
    {
        "id": "2",
        "titulo": "Jordan Celeste",
        "imagen": "../img/nike-jordan-celeste.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 126500
    },
    {
        "id": "3",
        "titulo": "Dunk Low Bordo",
        "imagen": "../img/nike-dunklow-bordo.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 45000
    },
    {
        "id": "4",
        "titulo": "Jordan Roja",
        "imagen": "../img/nike-jordan-roja.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 149000
    },
    {
        "id": "5",
        "titulo": "Air Negro",
        "imagen": "../img/nike-air-negro.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 73000
    },
    {
        "id": "6",
        "titulo": "Jordan Max Gris",
        "imagen": "../img/nike-jordanmax-gris.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 51600
    },
    {
        "id": "7",
        "titulo": "Air Force Gris",
        "imagen": "../img/nike-airforce-gris.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 79500
    },
    {
        "id": "8",
        "titulo": "Jordan Low Verde",
        "imagen": "../img/nike-jordanlow-verde.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 50000
    },
    {
        "id": "9",
        "titulo": "Low Retro Acqua",
        "imagen": "../img/nike-lowretro-acqua.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 59000
    },
    {
        "id": "10",
        "titulo": "Force Camel",
        "imagen": "../img/nike-force-camel.png",
        "categoria": {
            "nombre": "Hombre",
            "id": "hombre"
        },
        "precio": 66500
    },
    {
        "id": "11",
        "titulo": "Air Force Blanca",
        "imagen": "../img/nike-airforce-blanca.png",
        "categoria": {
            "nombre": "Mujer",
            "id": "mujer"
        },
        "precio": 45000
    },
    {
        "id": "12",
        "titulo": "Jordan Rosa",
        "imagen": "../img/nike-jordan-rosa.png",
        "categoria": {
            "nombre": "Mujer",
            "id": "mujer"
        },
        "precio": 54900
    },
    {
        "id": "13",
        "titulo": "Jodan Max Rosa",
        "imagen": "../img/nike-jordanmax-rosa.png",
        "categoria": {
            "nombre": "Mujer",
            "id": "mujer"
        },
        "precio": 70300
    },
    {
        "id": "14",
        "titulo": "Jordan One Rosa",
        "imagen": "../img/nike-jordanone-rosa.png",
        "categoria": {
            "nombre": "Mujer",
            "id": "mujer"
        },
        "precio": 41600
    },
    {
        "id": "15",
        "titulo": "Run Naranja",
        "imagen": "../img/nike-run-naranja.png",
        "categoria": {
            "nombre": "Mujer",
            "id": "mujer"
        },
        "precio": 76500
    },
    {
        "id": "16",
        "titulo": "Low Dunk Naranja",
        "imagen": "../img/nike-lowdunk-naranja.png",
        "categoria": {
            "nombre": "Mujer",
            "id": "mujer"
        },
        "precio": 58000
    },
    {
        "id": "17",
        "titulo": "Air Run Blanco",
        "imagen": "../img/nike-airrun-blanco.png",
        "categoria": {
            "nombre": "Mujer",
            "id": "mujer"
        },
        "precio": 140900
    },
    {
        "id": "18",
        "titulo": "Jordan Violeta",
        "imagen": "../img/nike-jordan-violeta.png",
        "categoria": {
            "nombre": "Mujer",
            "id": "mujer"
        },
        "precio": 70300
    },
    {
            "id": "19",
            "titulo": "Air Max Azul",
            "imagen": "../img/nike-airmax-azul.png",
            "categoria": {
                "nombre": "Mujer",
                "id": "mujer"
            },
            "precio": 110600
    },
    {
            "id": "20",
            "titulo": "Skate Marron",
            "imagen": "../img/nike-skate-marron.png",
            "categoria": {
                "nombre": "Mujer",
                "id": "mujer"
            },
            "precio": 126500
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `
        contenedorProductos.append(div)
    })

    actualizarBotonesAgregar()
}

cargarProductos(productos)

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito()
} else {
    productosEnCarrito = []
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }

    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
}