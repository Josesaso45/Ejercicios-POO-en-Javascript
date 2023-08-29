/*Define una clase figura con metodo CalcularArea(). Luego, crea sub clases CIRCULO Y RECTANGULO que hereden de figura y sobre escriban el metodo calcularArea() para calcular el area especifica de cada figura. Crea objetos de ambas subclases y muestra sus areas. */

class Figura {
    calcularArea(){
        return 0;
    }
}
class Circulo extends Figura{
    constructor(radio){
        super();
        this.radio = radio;
    }
    calcularArea(){
        return Math.PI*this.radio*this.radio;
    }
}

class Rectangulo extends Figura{
    constructor(base,altura){
            super();
            this.base = base;
            this.altura = altura;
    }
    calcularArea(){
        return this.base * this.altura;
    }
}

const circulo = new Circulo(5);
const rectangulo = new Rectangulo(5,45);

console.log("El área del circulo es:" , circulo.calcularArea());
console.log("El área del rectangulo es:" , rectangulo.calcularArea());

//En JS la concatenacion es con ",". En JAVA la concatenacion es "+"
//Muy importante a la hora unir string int y mas tipos de datos o metodos.





    