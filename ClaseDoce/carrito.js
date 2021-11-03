let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null){
    alert ("Carrito Vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

listaObjetos.forEach(element => {
    
        imprimirDatos.innerHTML +=
    `<div class="py-3 col-3">
    <div class="card row justify-content-start" style="width: 18rem;">
    <div class="col-4">
    <img src="..." class="card-img-top" alt="...">
    "${element.imagen}"
      <div class="card-body">
        <h5 class="card-title">${element.nombre}  </h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
        <p class="card-text">${element.precio}.</p>
        </div> 
      </div>
    </div>`
});

const finalizarCompra = () => {
    let monto = 0

    listaObjetos.forEach(e => {
        monto += e.precio
    })

    console.log("Tu compra fue aprobada, por un total de:" + monto);
    localStorage.removeItem("carrito");
}     

btn.addEventListener("click", () => {
    finalizarCompra()
})