class Calculadora {

    static suma (numero1,numero2){
        return numero1 + numero2;
    }
    static resta(numero1,numero2){
        return numero1 - numero2;
    }
    static multiplicar(numero1,numero2){
        return numero1 * numero2;
    }
    static dividir(numero1,numero2){
        return numero1 / numero2;
    }
}

console.log("Suma:",Calculadora.sumar(5, 3));
console.log("Resta:",Calculadora.restar(10, 4));
console.log("Multiplicación:",Calculadora.multiplicar(6, 7));
console.log("División:",Calculadora.dividir(20, 5));
