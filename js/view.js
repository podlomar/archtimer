const formatDigits = (num) => String(num).padStart(2, 0);

const updateView = () => {
  const minutesElm = document.querySelector('#minutes');
  const secondsElm = document.querySelector('#seconds');
  const playBtn = document.querySelector('#btn-play');
  const resetBtn = document.querySelector('#btn-reset');
  const minusBtn = document.querySelector('#btn-minus');
  const plusBtn = document.querySelector('#btn-plus');

  minutesElm.textContent = formatDigits(minutes);
  secondsElm.textContent = formatDigits(seconds);

  if (isRunning()) {
    playBtn.classList.remove('btn--play');
    playBtn.classList.add('btn--pause');
  } else {
    playBtn.classList.remove('btn--pause');
    playBtn.classList.add('btn--play');
  }
  
  playBtn.disabled = isZero();
  resetBtn.disabled = isRunning() || isZero();
  plusBtn.disabled = minusBtn.disabled = isRunning();
};