// do stuff
console.log('yo');

class Calculator {
  constructor(element) {
    this.numKeys = [];
    this.opKeys = [];
  }
}

const calcElement = document.querySelector('#calculator');
const calc = new Calculator(calcElement);
