const Calculadora = require('./calculadora');

const somar = Calculadora.somar;
const subtrair = Calculadora.subtrair;
const multiplicar = Calculadora.multiplicar;
const dividir = Calculadora.dividir;
const potencia = Calculadora.potencia;

console.log(somar(1, 2)); // 3
console.log(subtrair(1, 2)); // -1
console.log(multiplicar(1, 2)); // 2
console.log(dividir(1, 2)); // 0.5
console.log(potencia(1, 2)); // 1
