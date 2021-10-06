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
arrayProductos.push(new Producto("03", "Cuchara", "de 8 pulgadas", "30" , "100"));
arrayProductos.push(new Producto("04", "Martillo", "de 22 pulgadas", "40" , "100"));
arrayProductos.push(new Producto("05", "Pinza", "de 8 pulgadas", "50" , "100"));
arrayProductos.push(new Producto("06", "Cuchara", "de 7 pulgadas", "60" , "100"));

//Mostrar los productos
arrayProductos.forEach(objeto => {
    console.log(objeto.nombre + " $ " + objeto.precio);
    
})

//filtrar los productos por nombre
 const filtrar = prompt("ingrese el articulo que busca: martillo - pinza - cuchara VER EN CONSOLA DESPUES")
 const buscador = arrayProductos.filter(objeto => objeto.nombre === filtrar.toUpperCase())
 console.log(buscador);

