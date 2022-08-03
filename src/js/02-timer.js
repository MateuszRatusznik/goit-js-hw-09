// Opisany w Dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import Stylów
import 'flatpickr/dist/flatpickr.min.css';
// Opcja dla Chętnych
import Notiflix, { Notify } from 'notiflix';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

btnStart.disabled = true;

let selectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0].getTime() < options.defaultDate.getTime()) {
            Notify.failure("Please choose a date in the future");
            } else {
                btnStart.disabled = false;
                return selectedDate = selectedDates[0];
            };
    }
}




flatpickr("#datetime-picker", options);

function convertMs(ms) {
// Number of Milliseconds per unit of time
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Remaining Days
const days = Math.floor(ms / day);
// Remaining Hours
const hours = Math.floor((ms % day) / hour);
// Remaining Minutes
const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining Seconds
const seconds = Math.floor((((ms % day) % hour) % minute) / second);

return { days, hours, minutes, seconds };
}

let dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

function addLeadingZero(value) {
    if(value < 10) {
        return value.toString().padStart(2, "0");
    } else {
        return value;
    }
};

const getDifference = () => {
    const todayDate = new Date().getTime()
    const difference = selectedDate.getTime() - todayDate;
    let newDay = convertMs(difference).days;
    dataDays.textContent = addLeadingZero(newDay);
    let newHour = convertMs(difference).hours;
    dataHours.textContent = addLeadingZero(newHour);
    let newMinute = convertMs(difference).minutes;
    dataMinutes.textContent = addLeadingZero(newMinute);
    let newSecond = convertMs(difference).seconds;
    dataSeconds.textContent = addLeadingZero(newSecond);

        if(difference <= 0) { return 0;}
};

btnStart.addEventListener("click", () => {
    setInterval(() => {
      getDifference();
    }, 1000);
  });









