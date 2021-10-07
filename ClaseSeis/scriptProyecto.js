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

 
    const elegir = prompt("Escriba el nombre del articulo que desea comprar "+ JSON.stringify(arrayProductos) );
    const buscador = arrayProductos.filter(objeto => objeto.nombre === elegir.toUpperCase())
    console.log("va a comprar el siguiente producto: ");
    console.log(buscador);

    const cantidad = prompt("Ingrese la cantidad que desea comprar ")

    arrayProductos.forEach(objeto => {
    console.log(objeto.precio  * cantidad);
    
    })

    //console.log(buscador[objeto.this.precio] * cantidad);
    //console.log(buscador[objeto.precio] * cantidad);
    //console.log(buscador(objeto.precio)  * cantidad);
    //console.log(buscador.precio  * cantidad);

  

