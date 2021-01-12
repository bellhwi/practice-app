const box = document.getElementById('box');
const copyText = document.getElementById('printRadius');

function setRadius() {
  let ltRadius = document.getElementById('left-top-radius');
  let rtRadius = document.getElementById('right-top-radius');
  let lbRadius = document.getElementById('left-bottom-radius');
  let rbRadius = document.getElementById('right-bottom-radius');

  ltRadius.addEventListener('keyup', () => {
    box.style.borderTopLeftRadius = `${ltRadius.value}px`;

    //ltRadius값이 빈칸이면 지우고, 아니면 보여준다.
    if(ltRadius.value == "") {
      document.getElementById('printLtRadius').innerText = "";
    } else {
      document.getElementById('printLtRadius').innerText = 
      `border-top-left-radius: ${ltRadius.value}px;`;
    }
  });

  rtRadius.addEventListener('keyup', () => {
    box.style.borderTopRightRadius = `${rtRadius.value}px`;

    if(rtRadius.value == "") {
      document.getElementById('printRtRadius').innerText = "";
    } else {
      document.getElementById('printRtRadius').innerText = 
      `border-top-right-radius: ${rtRadius.value}px;`;
    }
  });

  lbRadius.addEventListener('keyup', () => {
    box.style.borderBottomLeftRadius = `${lbRadius.value}px`;

    if(lbRadius.value == "") {
      document.getElementById('printLbRadius').innerText = "";
    } else {
      document.getElementById('printLbRadius').innerText = 
      `border-bottom-left-radius: ${lbRadius.value}px;`;
    }
  });
  rbRadius.addEventListener('keyup', () => {
    box.style.borderBottomRightRadius = `${rbRadius.value}px`;

    if(rbRadius.value == "") {
      document.getElementById('printRbRadius').innerText = "";
    } else {
      document.getElementById('printRbRadius').innerText = 
      `border-bottom-right-radius: ${rbRadius.value}px;`;
    }
  });
}

//https://stackoverflow.com/questions/36639681/how-to-copy-text-from-a-div-to-clipboard
function CopyToClipboard(containerid) {
  if (window.getSelection) {
      if (window.getSelection().empty) { // Chrome
          window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) { // Firefox
          window.getSelection().removeAllRanges();
      }
  } else if (document.selection) { // IE?
      document.selection.empty();
  }

  if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
      document.selection.empty();
  } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().empty();
  }

  showNotification();
}

// 복사 완료 알림
function showNotification() {
  const notification = document.getElementById('notification-container');
	notification.classList.add('show');

	setTimeout(() => {
		notification.classList.remove('show');
	}, 2000);
}

setRadius();