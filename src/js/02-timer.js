import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    createTimeInterval(selectedDates[0]);
  },
};
let intervalId = null;
let userDate = null;

const refs = {
  timePicker: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysTimerSpan: document.querySelector('[data-days]'),
  hoursTimerSpan: document.querySelector('[data-hours]'),
  minutesTimerSpan: document.querySelector('[data-minutes]'),
  secondsTimerSpan: document.querySelector('[data-seconds]'),
}

flatpickr(refs.timePicker, options);
refs.startBtn.setAttribute("disabled", 'disabled');

function createTimeInterval(date) {
  if (date - Date.now() < 0) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  userDate = date;
  refs.startBtn.removeAttribute("disabled", 'disabled');
}

const timer = {
  start() {
    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const delta = userDate - currentTime;
      updateTimerInterface(convertMs(delta));
      if (delta < 1000 && delta > 0) {
        clearInterval(intervalId);
        return;
      }
      
    }, 1000);
  }
}
refs.startBtn.addEventListener('click', () => {timer.start()});
  
function updateTimerInterface({ days, hours, minutes, seconds }) {
  refs.daysTimerSpan.textContent = days;
  refs.hoursTimerSpan.textContent = hours;
  refs.minutesTimerSpan.textContent = minutes;
  refs.secondsTimerSpan.textContent = seconds;
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}