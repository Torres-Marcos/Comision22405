class Producto {

    constructor(nombre, categoria, precio, stock, imagen) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
       // this.imagen = "";
    }

}

let listaProductos;
//listaProductos = []

if (localStorage.getItem("lista") == null) {
    listaProductos = []
} else {
    listaProductos = JSON.parse(localStorage.getItem("lista"))
}


const crearProducto = (nombre, categoria, precio, stock /*, imagen*/) => {
    const producto = new Producto(nombre, categoria, precio, stock)
    return producto
}

let botonCargarProduct = document.getElementById("botonCargarProducto")



const confirmacionCargaProducto = () => {

    const nombre = document.getElementById("ingProducto").value;
    const categoria = document.getElementById("ingCategoria").value;
    const precio = document.getElementById("ingPrecio").value;
    const stock = document.getElementById("ingStock").value;
    //const imagen = document.getElementById("ingImagen").value;

    listaProductos.push(crearProducto(nombre, categoria, precio, stock /*imagen*/))

    localStorage.setItem("lista", JSON.stringify(listaProductos))

}

botonCargarProduct.onclick = () =>{    
    confirmacionCargaProducto()
}    