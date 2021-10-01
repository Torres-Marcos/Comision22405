class Articulo{
    constructor(codigo, nombre, descripcion, precio, imagen, stock) {
     this.codigo = codigo;
     this.nombre = nombre;
     this.descripcion = descripcion;
     this.precio = precio;
     this.imagen = imagen;
     this.stock = stock;
 }

}  

const art1 = new Articulo ("01", "pinza", "pinza de 8 pulgadas" , 100, "imagen", 6 );
const art2 = new Articulo ("02", "tenaza", "tenaza de 11 pulgadas" , 90, "imagen", 5 );
const art3 = new Articulo ("03", "maza", "maza de 1kg" , 200, "imagen", 10 );


function comprar() {

let cant1 = document.getElementById("cant1").value;
let cant2 = document.getElementById("cant2").value;
let cant3 = document.getElementById("cant3").value;

let resultado1 = art1.precio * cant1;
let resultado2 = art2.precio * cant2;
let resultado3 = art3.precio * cant3;

if (resultado1 > 0){

 alert("Lleva el articulo: " + art1.nombre +" "+ cant1 + " Unidades - Total: " + resultado1);

}

if (resultado2 > 0){

 alert("Lleva el articulo: " + art2.nombre +" "+ cant2 + " Unidades - Total: " + resultado2);

}

if (resultado3 > 0){

 alert("Lleva el articulo: " + art3.nombre +" "+ cant3 + " Unidades - Total: " + resultado3);

}   

}