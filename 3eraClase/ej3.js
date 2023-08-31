class Vehiculo{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    detalles(){
        console.log('El Vehiculo es:  $ {this.marca} ${this.modelo}');
    }
}

class Auto extends Vehiculo{
    detalles(){
        console.log("Auto:");
        super();
    }
}

class Moto extends Vehiculo{
    detalles(){
        console.log("Moto:");
        super();
    }
}