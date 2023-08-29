class Persona{
    constructor(nombre,edad,correo){
        this.setNombre(nombre);
        this.setEdad(edad);
        this.setCorreo(correo);
    }


    setNombre(nombre){
        if (typeof nombre === "string" && nombre.length >= 0){
            //Como se tiene que estructurar un set and get
            this.nombre = nombre;
        }else{
            console.error("Nombre inválido.")
        }
    }

    setEdad(edad){
        if (typeof edad === "number" && edad >= 0){
            this.edad = edad;
        }else{
            console.error("Edad inválido.")
        }
    }

    setCorreo(correo){
        if (typeof correo === "string" && correo.includes("@") >= 0){
            this.correo = correo;
        }else{
            console.error("Correo inválido.")
        }
    }

    getNombre(){
        return this.nombre;
    }
    getEdad(){
        return this.edad;
    }
    getCorreo(){
        return this.correo;
    }
}

const persona = new Persona("Jose",22,"josemontero2415@gmail.com");

console.log("Nombre: ", persona.getNombre());
console.log("Edad: ", persona.getEdad());
console.log("Correo: ", persona.getCorreo());