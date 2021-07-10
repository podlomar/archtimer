import { Timer } from './model';

const formatDigits = (num: number): string => String(num).padStart(2, '0');

export const updateView = (timer: Timer): void => {
  const minutesElm = document.querySelector('#minutes') as Element;
  const secondsElm = document.querySelector('#seconds') as Element;
  const startStopBtn = document.querySelector('#btn-start-stop') as HTMLButtonElement;
  const resetBtn = document.querySelector('#btn-reset') as HTMLButtonElement;
  const minusBtn = document.querySelector('#btn-minus') as HTMLButtonElement;
  const plusBtn = document.querySelector('#btn-plus') as HTMLButtonElement;

  minutesElm.textContent = formatDigits(timer.minutes);
  secondsElm.textContent = formatDigits(timer.seconds);

  if (timer.isRunning()) {
    startStopBtn.classList.remove('icon-start');
    startStopBtn.classList.add('icon-stop');
  } else {
    startStopBtn.classList.remove('icon-stop');
    startStopBtn.classList.add('icon-start');
  }
  
  startStopBtn.disabled = timer.isZero();
  resetBtn.disabled = timer.isRunning() || timer.isZero();
  plusBtn.disabled = minusBtn.disabled = timer.isRunning();
};
