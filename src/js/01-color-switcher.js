const pageBackground = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const DELAY = 1000;
let intervalId = null;

startBtn.addEventListener('click', handleChangeColorBtnStartClick);
stopBtn.addEventListener('click', handleChangeColorBtnStopClick);

function handleChangeColorBtnStartClick() {
    startBtn.classList.add('js-btn-disabled');
    stopBtn.classList.remove('js-btn-disabled');  
  intervalId = setInterval(() => {
    pageBackground.style.backgroundColor = getRandomHexColor();
  }, DELAY);
}

function handleChangeColorBtnStopClick() {
    startBtn.classList.remove('js-btn-disabled');
    stopBtn.classList.add('js-btn-disabled');
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
