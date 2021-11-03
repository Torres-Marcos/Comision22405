let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

let dato = promt("ingresa categoria")

listaFiltrada = listaObjetos.filter(e => e.categoria === dato)

if (listaFiltrada.length != 0) {
    listaFiltrada.forEach(element => {

        let index = listaFiltrada.indexOf(element)

        imprimirDatos.innerHTML +=
        `<div class="py-3">
    <div class="card col-4" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.nombre}  </h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
        <p class="card-text">${element.precio}.</p>
        <button type="button" class="btn btn-danger" onClick="comprar(${index}>Comprar</button>
      </div>
    </div>`
    })
    
} else {
    console.log("No tenes ningun producto con esa categoria")
}

const comprar = (index) => {

    let carrito;
    if(localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }

    carrito.push(listaObjetos[index])
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

