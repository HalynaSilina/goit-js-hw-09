const pageBackground = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const DELAY = 1000;
let intervalId = null;

startBtn.addEventListener('click', handleChangeColorBtnStartClick);
stopBtn.addEventListener('click', handleChangeColorBtnStopClick);

function handleChangeColorBtnStartClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(() => {
    pageBackground.style.backgroundColor = getRandomHexColor();
  }, DELAY);
}

function handleChangeColorBtnStopClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
