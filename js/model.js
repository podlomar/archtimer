let minutes = 1;
let seconds = 0;
let intervalId = null;

const increment = () => {
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
};

const decrement = () => {
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
};

const reset = () => {
  seconds = minutes = 0;
};

const isZero = () => seconds === 0 && minutes === 0;

const isRunning = () => intervalId !== null;

const stop = () => {
  clearInterval(intervalId);
  intervalId = null;
}

const run = (updateFunc) => {
  if (isZero()) {
    return;
  }

  intervalId = setInterval(() => {
    decrement();
    if (isZero()) {
      stop();
    }

    updateFunc();
  }, 1000);
};