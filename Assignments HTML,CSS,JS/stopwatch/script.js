let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let timeDisplay = document.getElementById('timeDisplay');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let millisecondsDisplay = document.getElementById('milliseconds');

let isRunning = false;
let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startStopwatch() {
  isRunning = true;
  startStopBtn.textContent = 'Stop';

  interval = setInterval(function () {
    milliseconds++;

    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    updateDisplay();
  }, 10);
}

function stopStopwatch() {
  isRunning = false;
  startStopBtn.textContent = 'Start';
  clearInterval(interval);
}

function resetStopwatch() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function updateDisplay() {
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
  millisecondsDisplay.textContent = formatTime(milliseconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

startStopBtn.addEventListener('click', function () {
  if (isRunning) {
    stopStopwatch();
  } else {
    startStopwatch();
  }
});

resetBtn.addEventListener('click', function () {
  resetStopwatch();
});