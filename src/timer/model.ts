export type UpdateFunc = (timer: Timer) => void;

export class Timer {
  private _seconds: number;
  private _minutes: number;
  
  private updateFunc: UpdateFunc;
  private intervalHandle: number | undefined = undefined;
  
  constructor(
    minutes: number, 
    seconds: number, 
    updateFunc: UpdateFunc,
  ) {
    this._minutes = minutes;
    this._seconds = seconds;
    this.updateFunc = updateFunc;
  }

  get seconds(): number {
    return this._seconds;
  }

  get minutes(): number {
    return this._minutes;
  }

  increment(): void {
    if (this._seconds === 59) {
      this._seconds = 0;
  
      if (this._minutes === 59) {
        this._minutes = 0;
      } else {
        this._minutes += 1;
      }
    } else {
      this._seconds += 1;
    }

    this.updateFunc(this);
  };
  
  decrement(): void {
    if (this._seconds === 0) {
      this._seconds = 59;
  
      if (this._minutes === 0) {
        this._minutes = 59;
      } else {
        this._minutes -= 1;
      }
    } else {
      this._seconds -= 1;
    }

    this.updateFunc(this);
  };
  
  reset(): void {
    this._seconds = this._minutes = 0;
    this.updateFunc(this);
  };
  
  isZero(): boolean {
    return this._seconds === 0 && this._minutes === 0;
  }
  
  isRunning(): boolean {
    return this.intervalHandle !== undefined;
  }
  
  stop(): void {
    window.clearInterval(this.intervalHandle);
    this.intervalHandle = undefined;
    this.updateFunc(this);
  }
  
  run(): void {
    if (this.isZero()) {
      return;
    }
  
    this.intervalHandle = window.setInterval(() => {
      this.decrement();
      if (this.isZero()) {
        this.stop();
      }
    }, 1000);

    this.updateFunc(this);
  };
};
