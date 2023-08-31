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
        return "Hello";
    }
}
class Caiman extends Animal{
    hacerSonido(){
        return "Hola";
    }
}

/*function onomatopeya (Animal){
    console.log(cocodrilo.nombre +" dice " + cocodrilo.hacerSonido());
    console.log(caiman.nombre +" dice " + caiman.hacerSonido());
}
const cocodrilo = new Cocodrilo("Lucianeke");
const caiman = new Caiman("Santiagueño");

onomatopeya(cocodrilo);
onomatopeya(caiman);*/

const mascotasDeCasa = [new Cocodrilo(),new Caiman,new Cocodrilo(),new Caiman];

for(const animal of mascotasDeCasa){
    console.log(animal.hacerSonido());
}

