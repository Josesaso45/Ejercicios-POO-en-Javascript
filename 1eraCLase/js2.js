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
        return "GOAT";
    }
}
class perro extends mascota{
     sonidoMascota(){
        return "Siuuuu";
    }
}

function onomatopeya (mascota){
    console.log(gatuno.nombre +" es " + gatuno.sonidoMascota());
    console.log(perruno.nombre +" dice " + perruno.sonidoMascota());
}

const perruno = new perro("Cristiano Ronaldo");
const gatuno = new gato("Messi");

onomatopeya(perruno);
onomatopeya(gatuno);
