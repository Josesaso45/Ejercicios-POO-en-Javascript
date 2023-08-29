/*Define una clase llamada libro que tengas atributos como titulo, autor, año. Cree dos objetos de esta clase y muestra sus atributos en la consolo(hacerlo correr)*/
class Libro {
    constructor(titulo,autor,año){
        this.titulo=titulo;
        this.autor=autor;
        this.año=año;
    }
}

const libro1 = new Libro("El señor de los anillos","j.R.R. Tolkien", 1954);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez",1967);

console.log(libro1);
console.log(libro2);
