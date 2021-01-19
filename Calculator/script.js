const display = document.getElementById('display');

let result = [];

function add(char, id) {
  // Not a number
  if (isNaN(char) == true && char != '.') {
    // Set the clicked effect on calculate buttons
    if (document.querySelector('.clicked') == null) {
      document.getElementById(id).classList.add('clicked');
    } else {
      document.querySelector('.clicked').classList.remove('clicked');
      document.getElementById(id).classList.add('clicked');
      result = '';
    }

    // Press calculate when display is empty
    if (char == '*' || '+' || '-' || '/') {
      if (display.innerText == '') {
        result = '0' + char;
      } else {
        result = result + char;
      }
    }
  }
  // Number
  else {
    // Remove clicked effect when press numbers
    if (document.querySelector('.clicked') != null) {
      display.innerText = '';
      document.querySelector('.clicked').classList.remove('clicked');
    }

    // Prevent multiple zero when the display value is empty
    if (display.innerText == '' && char == '0') {
      display.innerText = '';
    }
    // Show dot with zero when the display value is empty
    else if (display.innerText == '' && char == '.') {
      if (display.innerText.includes('.') == true) {
        return;
      } else {
        display.innerText = '0.';
        result = '0.';
      }
    }
    // Prevent multiple dot when there is a dot already.
    else if (display.innerText != '' && char == '.') {
      if (display.innerText.includes('.') == true) {
        return;
      } else {
        display.innerText = display.innerText + '.';
      }
    }
    // Display the value
    else {
      display.innerText = display.innerText + char;
      result = result + char;
    }
  }
}

function ac() {
  display.innerText = '';
  result = '';
  if (document.querySelector('.clicked') != null) {
    document.querySelector('.clicked').classList.remove('clicked');
  }
}

function sign() {
  if (display.innerText != '') {
    display.innerText = result = -1 * parseInt(display.innerText, 10);
  }
}

function percent() {
  if (display.innerText != '') {
    display.innerText = `${parseInt(display.innerText, 10)}` / 100;
  }
}

function equal() {
  if (display.innerText !== '') {
    // Calculate the result string and return to number
    let calcResult = new Function('return ' + result)();

    // Check if the number is integer or not.
    if (Number.isInteger(calcResult) == true) {
      display.innerText = result = calcResult;
    } else {
      display.innerText = result = calcResult.toFixed(2);
    }
  }
  // Prevent show 'undefined' when press equal while it's empty, zero or dot.
  else {
    display.innerText = '';
  }
}
