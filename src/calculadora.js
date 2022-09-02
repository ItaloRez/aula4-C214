const validate = require('validate.js');
const constraints = require('./validations/validate');

const Calculadora = {
  somar: (a, b) => {
    const validateSoma = validate(
      { a, b },
      { a: constraints.number, b: constraints.number }
    );

    if (validateSoma) {
      return 'Erro ao somar';
    }

    return a + b;
  },
  subtrair: (a, b) => {
    const validateSubtracao = validate(
      { a, b },
      { a: constraints.number, b: constraints.number }
    );

    if (validateSubtracao) {
      return 'Erro ao subtrair';
    }

    return a - b;
  },
  multiplicar: (a, b) => {
    const validateMultiplicacao = validate(
      { a, b },
      { a: constraints.number, b: constraints.number }
    );

    if (validateMultiplicacao) {
      return 'Erro ao multiplicar';
    }

    return a * b;
  },
  dividir: (a, b) => {
    const validateDivisao = validate(
      { a, b },
      { a: constraints.number, b: constraints.dividendo }
    );

    if (validateDivisao) {
      return 'Erro ao dividir';
    }

    return a / b;
  },
  potencia: (a, b) => {
    const validatePotencia = validate(
      { a, b },
      { a: constraints.number, b: constraints.number }
    );

    if (validatePotencia) {
      return 'Erro ao potenciar';
    }

    return Math.pow(a, b);
  },
};

module.exports = Calculadora;
