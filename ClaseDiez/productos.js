let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")

if (localStorage.getItem("lista") == null) {
    alert ("No tenes productos para mostrar")
    } else {
        listaObjetos = JSON.parse(localStorage.getItem("lista"))
    }

listaObjetos.forEach(element => {

    let index = listaObjetos.indexOf(element)

    imprimirDatos.innerHTML +=
    `
<div class="card col-4" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.nombre}  </h5>
    <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
    <p class="card-text">${element.precio}.</p>
    <button type="button" class="btn btn-danger" onClick="comprar(${index})">Comprar</button>
  </div>
`
 
}   )


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



