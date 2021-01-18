const display = document.getElementById('display');
let result = '';

function add(char, id) {
  if (isNaN(char) == true && char != '.') {
    // Set the clicked effect on calculate buttons
    if (document.querySelector('.clicked') == null) {
      document.getElementById(id).classList.add('clicked');
    } else {
      document.querySelector('.clicked').classList.remove('clicked');
      document.getElementById(id).classList.add('clicked');
    }
  } else {
    // Remove clicked effect when press numbers
    if (document.querySelector('.clicked') != null) {
      document.querySelector('.clicked').classList.remove('clicked');
    }
    // Prevent multiple zero when the display value is empty
    if (display.innerText == '' && char == '0') {
      display.innerText = '';
    }
    // Show dot with zero when the display value is empty
    else if (display.innerText == '' && char == '.') {
      display.innerText = '0.';
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
}

function sign() {
  if (display.innerText !== '') {
    if (display.innerText.includes('-') == true) {
      display.innerText = `${Math.abs(parseInt(display.innerText, 10))}`;
    } else {
      display.innerText = `-${display.innerText}`;
    }
  }
}

function percent() {
  display.innerText = `${parseInt(display.innerText, 10)}` / 100;
}

function equal() {
  display.innerText = result;
  console.log(result);
}
