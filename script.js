function createTimer(duration, displayId, startBtnId, resetBtnId) {
  let timer, interval;
  let originalDuration = duration;
  const display = document.getElementById(displayId);
  const startBtn = document.getElementById(startBtnId);
  const resetBtn = document.getElementById(resetBtnId);

  // Load sound
  const sound = new Audio("../sounds/timer.mp3");

  function updateDisplay() {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);
    display.textContent =
      (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  function resetTimer() {
    clearInterval(interval);
    timer = originalDuration;
    updateDisplay();

     sound.pause();
    sound.currentTime = 0;
  }

  function startTimer() {
    clearInterval(interval);
    interval = setInterval(function () {
      if (--timer < 0) {
        clearInterval(interval);
        display.textContent = "Done!";
        sound.play();  // Play sound when time is up
      } else {
        updateDisplay();
      }
    }, 1000);
  }

  timer = duration;
  updateDisplay();
  startBtn.addEventListener("click", startTimer);
  resetBtn.addEventListener("click", resetTimer);
}
