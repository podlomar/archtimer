const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');
const playBtn = document.querySelector('#btn-play');
const resetBtn = document.querySelector('#btn-reset');
const minusBtn = document.querySelector('#btn-minus');
const plusBtn = document.querySelector('#btn-plus');

let intervalId = null;

const formatDigits = (num) => String(num).padStart(2, 0);

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
  playBtn.disabled = isZero();
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
  playBtn.disabled = isZero();
  
  if (isZero()) {
    playBtn.classList.remove('btn--pause');
    playBtn.classList.add('btn--play');
    minusBtn.disabled = false;
    plusBtn.disabled = false;
  }
};

const reset = () => {
  secondsElm.textContent = minutesElm.textContent = '00';
  resetBtn.disabled = true;
  playBtn.disabled = true;
};

const isZero = () => (
  secondsElm.textContent === '00' 
  && minutesElm.textContent === '00'
);

const startOrStop = () => {
  if (intervalId === null) {
    playBtn.classList.remove('btn--play');
    playBtn.classList.add('btn--pause');

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
    playBtn.classList.remove('btn--pause');
    playBtn.classList.add('btn--play');

    resetBtn.disabled = isZero();
    plusBtn.disabled = false;
    minusBtn.disabled = false;
  }
};

plusBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);
playBtn.addEventListener('click', startOrStop);
