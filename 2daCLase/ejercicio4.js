class Animal {
    constructor(nombre){
        this.nombre= nombre;
    }

    hacerSonido(){
        return "SonidoAnimal";
    }
}

class Cocodrilo extends Animal{
    hacerSonido(){
        return "Mamabicho";
    }
}
class Caiman extends Animal{
    hacerSonido(){
        return "Mamaverga";
    }
}

function onomatopeya (Animal){
    console.log(cocodrilo.nombre +" hace " + cocodrilo.hacerSonido());
}
const cocodrilo = new Cocodrilo();
const caiman = new Caiman();

onomatopeya(cocodrilo);
onomatopeya(caiman);

