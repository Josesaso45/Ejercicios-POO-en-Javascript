class mascota {
    constructor(nombre, edad, color){
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
    }
    sonidoMascota(){
        return "Sonido de Mascota";
    }
}
class gato extends mascota{
    sonidoMascota(){
        return "miau";
    }
}
class perro extends mascota{
     sonidoMascota(){
        return "Guau";
    }
}

function onomatopeya (mascota){
    console.log(gatuno.nombre +" hace " + gatuno.sonidoMascota());
    console.log(perruno.nombre +" hace " + perruno.sonidoMascota());
}

const perruno = new perro("Pele");
const gatuno = new gato("Maradona");

onomatopeya(perruno);
onomatopeya(gatuno);
