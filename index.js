const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');
const startStopBtn = document.querySelector('#btn-start-stop');
const resetBtn = document.querySelector('#btn-reset');
const minusBtn = document.querySelector('#btn-minus');
const plusBtn = document.querySelector('#btn-plus');

let intervalId = null;

const formatDigits = (num) => String(num).padStart(2, '0');

const increment = () => {
  let minutes = Number(minutesElm.textContent);
  let seconds = Number(secondsElm.textContent);
  
  if (seconds === 59) {
    seconds = 0;

    if (minutes === 59) {
      minutes = 0;
    } else {
      minutes += 1;
    }
  } else {
    seconds += 1;
  }

  minutesElm.textContent = formatDigits(minutes);
  secondsElm.textContent = formatDigits(seconds);
  resetBtn.disabled = isZero();
  startStopBtn.disabled = isZero();
};

const decrement = () => {
  let minutes = Number(minutesElm.textContent);
  let seconds = Number(secondsElm.textContent);
  
  if (seconds === 0) {
    seconds = 59;

    if (minutes === 0) {
      minutes = 59;
    } else {
      minutes -= 1;
    }
  } else {
    seconds -= 1;
  }

  minutesElm.textContent = formatDigits(minutes);
  secondsElm.textContent = formatDigits(seconds);

  resetBtn.disabled = intervalId !== null || isZero();
  startStopBtn.disabled = isZero();
  
  if (isZero()) {
    startStopBtn.classList.remove('icon-stop');
    startStopBtn.classList.add('icon-start');
    minusBtn.disabled = false;
    plusBtn.disabled = false;
  }
};

const reset = () => {
  secondsElm.textContent = minutesElm.textContent = '00';
  resetBtn.disabled = true;
  startStopBtn.disabled = true;
};

const isZero = () => (
  secondsElm.textContent === '00' 
  && minutesElm.textContent === '00'
);

const startOrStop = () => {
  if (intervalId === null) {
    startStopBtn.classList.remove('icon-start');
    startStopBtn.classList.add('icon-stop');

    intervalId = setInterval(() => {
      if (isZero()) {
        clearInterval(intervalId);
        intervalId = null;
      } else {
        decrement();
      }
    }, 1000);

    resetBtn.disabled = true;
    plusBtn.disabled = true;
    minusBtn.disabled = true;
  } else {
    clearInterval(intervalId);
    intervalId = null;
    startStopBtn.classList.remove('icon-stop');
    startStopBtn.classList.add('icon-start');

    resetBtn.disabled = isZero();
    plusBtn.disabled = false;
    minusBtn.disabled = false;
  }
};

plusBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);
startStopBtn.addEventListener('click', startOrStop);
