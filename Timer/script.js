const minutesAmount = document.getElementById("minutesAmount");
const secondsAmount = document.getElementById("secondsAmount");
const timeControls = document.getElementById("timeControl");
const timeReset = document.getElementById("timeReset");

let seconds = 0;
let minutes = 0;
let lastCount = parseInt(localStorage.getItem("seconds")) || 0;
let myTimer;

minutesAmount.innerText = String(minutes).padStart(2, "0");
secondsAmount.innerText = String(lastCount).padStart(2, "0");

timeControls.addEventListener("click", () => {
  timeControl(timeControls.innerText);
  if (timeControls.innerText === "Start") {
    timeControls.innerText = "Stop";
  } else {
    timeControls.innerText = "Start";
  }
});
timeReset.addEventListener("click", resetTime);

function timeControl(input) {
  const startTime = performance.now() / 1000;
  if (input === "Start") {
    myTimer = setInterval(() => {
      const currentTime = performance.now() / 1000;
      seconds = Math.round(lastCount + (currentTime - startTime));
      minutes = Math.floor(seconds / 60);
      minutesAmount.innerText = String(minutes).padStart(2, "0");
      secondsAmount.innerText = String(seconds - 60*minutes).padStart(2, "0");
      localStorage.setItem("seconds", seconds);
    }, 50);
  }
  if (input === "Stop") {
    lastCount = seconds;
    clearInterval(myTimer);
  }
}

function resetTime() {
  clearInterval(myTimer);
  localStorage.setItem("seconds", 0)
  lastCount = 0;
  timeControls.innerText = "Start";
  minutesAmount.innerText = "00";
  secondsAmount.innerText = "00";
}
