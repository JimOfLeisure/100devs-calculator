// do stuff
console.log('yo');

class Calculator {
  constructor(element) {
    this.element = element;
    this.numKeys = [];
    this.opKeys = [];
    this.initRender();
  }

  initRender() {
    this.display = document.createElement('section');
    this.display.classList.add('display');
    this.keypad = document.createElement('section');
    this.keypad.classList.add('keypad');
    this.element.appendChild(this.display);
    this.element.appendChild(this.keypad);
  }
}

const calcElement = document.querySelector('#calculator');
const calc = new Calculator(calcElement);
