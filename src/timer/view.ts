import { Timer } from './model';

const formatDigits = (num: number): string => String(num).padStart(2, '0');

export const updateView = (timer: Timer): void => {
  const minutesElm = document.querySelector('#minutes') as Element;
  const secondsElm = document.querySelector('#seconds') as Element;
  const playBtn = document.querySelector('#btn-play') as HTMLButtonElement;
  const resetBtn = document.querySelector('#btn-reset') as HTMLButtonElement;
  const minusBtn = document.querySelector('#btn-minus') as HTMLButtonElement;
  const plusBtn = document.querySelector('#btn-plus') as HTMLButtonElement;

  minutesElm.textContent = formatDigits(timer.minutes);
  secondsElm.textContent = formatDigits(timer.seconds);

  if (timer.isRunning()) {
    playBtn.classList.remove('btn--play');
    playBtn.classList.add('btn--pause');
  } else {
    playBtn.classList.remove('btn--pause');
    playBtn.classList.add('btn--play');
  }
  
  playBtn.disabled = timer.isZero();
  resetBtn.disabled = timer.isRunning() || timer.isZero();
  plusBtn.disabled = minusBtn.disabled = timer.isRunning();
};
