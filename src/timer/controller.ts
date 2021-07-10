import { Timer } from "./model";

export const initController = (timer: Timer) => {
  (document.querySelector('#btn-play') as Element).addEventListener(
    'click', 
    () => {
      if (timer.isRunning()) {
        timer.stop();
      } else {
        timer.run();
      }
    }
  );
  
  (document.querySelector('#btn-reset') as Element).addEventListener(
    'click', 
    () => { timer.reset() }
  );
  
  (document.querySelector('#btn-plus') as Element).addEventListener(
    'click', () => { timer.increment() }
  );
  
  (document.querySelector('#btn-minus') as Element).addEventListener(
    'click', () => { timer.decrement() }
  );
};
