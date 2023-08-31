class Producto {
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const producto = new Producto("Muñeca",50,"10 UND");

console.log(producto);