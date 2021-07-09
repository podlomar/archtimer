document.querySelector('#btn-play').addEventListener('click', () => {
  if (isRunning()) {
    stop();
  } else {
    run(updateView);
  }

  updateView();
});

document.querySelector('#btn-reset').addEventListener('click', () => {
  reset();
  updateView();
});

document.querySelector('#btn-plus').addEventListener('click', () => {
  increment();
  updateView();
});

document.querySelector('#btn-minus').addEventListener('click', () => {
  decrement();
  updateView();
});
