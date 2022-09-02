const constraints = {
  number: {
    presence: true,
    type: 'number',
  },
  dividendo: {
    presence: true,
    numericality: {
      greaterThan: 0,
    },
  },
};

module.exports = constraints;
