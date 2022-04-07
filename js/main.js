// do stuff
console.log('yo');

class Calculator {
  constructor(element) {
    this.accumulator = 0;
    this.opFunc = this.nullFunc;
    this.element = element;
    this.numKeys = [];
    this.opKeys = [];
    this.display = document.createElement('section');
    this.initRender();
  }

  initRender() {
    this.display.classList.add('display');
    this.display.innerHTML = '';
    this.keypad = document.createElement('section');
    this.keypad.classList.add('keypad');
    this.element.appendChild(this.display);
    this.element.appendChild(this.keypad);

    for (let i = 0; i < 10; i++) {
      this.keypad.appendChild(this.newButton(i, this.numKeyPressed.bind(this)));
    }
    this.keypad.appendChild(this.newButton('.', this.numKeyPressed.bind(this)));
    this.keypad.appendChild(this.newButton('=', this.equalsHandler.bind(this)));
  }

  numKeyPressed = function (event) {
    this.display.innerHTML += event.target.innerHTML;
  };

  newButton(label, handler) {
    const key = document.createElement('button');
    key.innerHTML = label;
    key.addEventListener('click', handler);
    return key;
  }
  equalsHandler(event) {
    const operand = Number(this.display.innerHTML);
    const result = this.opFunc(this.accumulator, operand);
    this.display.innerHTML = result;
  }
  nullFunc(op1, op2) {
    // just return the current display
    return op2;
  }
}

const calcElement = document.querySelector('#calculator');
const calc = new Calculator(calcElement);
