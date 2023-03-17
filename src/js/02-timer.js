import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timerStartBtn = document.querySelector('button[data-start]');
const daysLeft = document.querySelector('.value[data-days]');
const hoursLeft = document.querySelector('.value[data-hours]');
const minutesLeft = document.querySelector('.value[data-minutes]');
const secondsLeft = document.querySelector('.value[data-seconds]');
const DELAY = 1000;

timerStartBtn.disabled = true;

// Об'єкт налаштувань для бібліотеки
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dataAudit(selectedDates);
  },
  onValueUpdate(selectedDates) {
    dataAudit(selectedDates);
    clearInterval(timer.intervalId);
  },
};

// Ініціалізація бібліотеки
const fp = flatpickr('#datetime-picker', options);

// Створення таймеру
class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.onTick = onTick;
  }
  start() {
    const futureDate = fp.selectedDates[0];
    this.intervalId = setInterval(() => {
      const currentTime = new Date();
      const time = futureDate - currentTime;
      const timerValue = convertMs(time);
      this.onTick(timerValue);
    }, DELAY);
  }
}

const timer = new Timer({
  onTick: timerUpdate,
});

timerStartBtn.addEventListener('click', timer.start.bind(timer));

function dataAudit(data) {
  const currentDate = new Date();
  if (data[0] - currentDate <= 0) {
    timerStartBtn.disabled = true;
    return Notify.failure('Please choose a date in the future', {
      showOnlyTheLastOne: true,
    });
  }
  timerStartBtn.disabled = false;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function timerUpdate(timerValue) {
  daysLeft.textContent = addLeadingZero(timerValue.days);
  hoursLeft.textContent = addLeadingZero(timerValue.hours);
  minutesLeft.textContent = addLeadingZero(timerValue.minutes);
  secondsLeft.textContent = addLeadingZero(timerValue.seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
