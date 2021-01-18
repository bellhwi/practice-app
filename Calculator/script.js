const display = document.getElementById('display');
const calc = document.getElementById('calc');
let result = '';

function add(char, checkIfCalc) {
  if (isNaN(char) == true) {
    result.innerText = result.innerText + char;
  }
  if (isNaN(char) == true && checkIfCalc == 'calc') {
    calc.classList.add('clicked');
  } else {
    display.innerText = display.innerText + char;
    result.innerText = result.innerText + char;
  }
}

function ac() {
  display.innerText = null;
  result.innerText = null;
}

function equal() {
  display.innerText = result.innerText;
}
