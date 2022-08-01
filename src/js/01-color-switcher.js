const body = document.querySelector("body");
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

let interval;

btnStart.addEventListener("click", () => { interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    btnStart.disabled = true;
    btnStop.disabled = false;
}, 1000);
})
//const color = getRandomHexColor();

btnStop.addEventListener("click", () => {
  clearInterval(interval);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
