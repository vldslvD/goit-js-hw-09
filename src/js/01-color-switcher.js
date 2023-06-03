function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]')
}
let changeIntervalId = null;
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);


function onStartBtnClick() {
  changeIntervalId = setInterval(colorChange, 1000);
  refs.startBtn.setAttribute('disabled', 'disabled');
}

function onStopBtnClick(){
  clearInterval(changeIntervalId);
  refs.startBtn.removeAttribute('disabled', 'disabled');
}

function colorChange() {
  refs.body.style.backgroundColor = getRandomHexColor();
}