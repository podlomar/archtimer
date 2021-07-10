const formatDigits = (num) => String(num).padStart(2, 0);

const updateView = () => {
  const minutesElm = document.querySelector('#minutes');
  const secondsElm = document.querySelector('#seconds');
  const startStopBtn = document.querySelector('#btn-start-stop');
  const resetBtn = document.querySelector('#btn-reset');
  const minusBtn = document.querySelector('#btn-minus');
  const plusBtn = document.querySelector('#btn-plus');

  minutesElm.textContent = formatDigits(minutes);
  secondsElm.textContent = formatDigits(seconds);

  if (isRunning()) {
    startStopBtn.classList.remove('icon-start');
    startStopBtn.classList.add('icon-stop');
  } else {
    startStopBtn.classList.remove('icon-stop');
    startStopBtn.classList.add('icon-start');
  }
  
  startStopBtn.disabled = isZero();
  resetBtn.disabled = isRunning() || isZero();
  plusBtn.disabled = minusBtn.disabled = isRunning();
};