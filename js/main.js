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
    this.display.innerHTML = '';
    this.keypad = document.createElement('section');
    this.keypad.classList.add('keypad');
    this.element.appendChild(this.display);
    this.element.appendChild(this.keypad);

    for (let i = 0; i < 10; i++) {
      const key = document.createElement('button');
      key.innerHTML = i;
      key.addEventListener('click', this.numKeyPressed);
      this.keypad.appendChild(key);
    }
  }
  numKeyPressed(event) {
    console.log(event.target.innerHTML, this.display);
    this.display.innerHTML += event.target.innerHTML;
  }
}

const calcElement = document.querySelector('#calculator');
const calc = new Calculator(calcElement);
