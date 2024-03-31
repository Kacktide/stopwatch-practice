let soundEffect = new Audio("../src/sounds/beep-07a.wav");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

const minOutput = document.getElementById("min-output");
const secOutput = document.getElementById("sec-output");
const msOutput = document.getElementById("ms-output");

soundEffect.volume = 0.1;
soundEffect.mozPreservesPitch = false;

min = 0;
sec = 0;
ms = 0;

Id = null;

startBtn.addEventListener("click", () => {
  soundEffect.playbackRate = 1;
  soundEffect.play();
  Id = setInterval(startTimer, 10);
});

pauseBtn.addEventListener("click", () => {
  soundEffect.playbackRate = 1.5;
  soundEffect.play();
  pauseTimer();
});
resetBtn.addEventListener("click", () => {
  soundEffect.playbackRate = 0.75;
  soundEffect.play();
  resetTimer();
});

function resetTimer() {
  startBtn.classList.remove("disabled");
  pauseBtn.classList.add("disabled");
  clearInterval(Id);
  sec = ms = min = 0;
  msOutput.innerText = secOutput.innerText = minOutput.innerText = "00";
}
function pauseTimer() {
  startBtn.classList.remove("disabled");
  pauseBtn.classList.add("disabled");
  clearInterval(Id);
}

function startTimer() {
  startBtn.classList.add("disabled");
  pauseBtn.classList.remove("disabled");
  ms++;
  if (ms == 100) {
    ms = 0;
    sec++;
  }

  if (sec == 60) {
    sec = 0;
    min++;
  }

  msOutput.innerText = zeroPrefix(ms);
  secOutput.innerText = zeroPrefix(sec);
  minOutput.innerText = zeroPrefix(min);
}

function zeroPrefix(n) {
  if (n.toString().length < 2) {
    n = "0" + n.toString();
  }
  return n;
}
