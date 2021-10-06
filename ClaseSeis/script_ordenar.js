class Producto {
    constructor(id, nombre,descripcion, precio, stock) {
        this.id = id;
        this.nombre  = nombre.toUpperCase();
        this.descripcion  = descripcion.toUpperCase();
        this.precio  = parseFloat(precio);
        this.stock = parseInt(stock);
    }

}

const arrayProductos = [];

arrayProductos.push(new Producto("01", "Martillo", "de 20 pulgadas", "10" , "100"));
arrayProductos.push(new Producto("02", "Pinza", "de 7 pulgadas", "20" , "100"));
arrayProductos.push(new Producto("03", "Cuchara", "de 8 pulgadas", "300" , "100"));
arrayProductos.push(new Producto("04", "Martillo", "de 22 pulgadas", "900" , "100"));
arrayProductos.push(new Producto("05", "Pinza", "de 8 pulgadas", "50" , "100"));
arrayProductos.push(new Producto("06", "Cuchara", "de 7 pulgadas", "60" , "100"));

//Ordenar por nombre

ordenarNombre = arrayProductos.sort((a,b) => {
    if (a.nombre > b.nombre) {
        return 1
    }
    if (a.nombre < b.nombre){
        return -1
    }
})

console.log("ordena por Nombre ")
console.log(ordenarNombre);

//Ordenar por precio de menor a mayor

/*ordenarPrecio = arrayProductos.sort((c,d) => {
    if (c.precio > d.precio) {
        return 1
    }
    if (c.precio < d.precio){
        return -1
    }
    return 0

})

console.log("ordena por Precio ")
console.log(ordenarPrecio);*/