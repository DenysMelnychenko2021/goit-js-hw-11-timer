import refs from "./refs.js";

const { days, hours, mins, secs, timerStyle } = refs;
days.style.color = "blue";
hours.style.color = "green";
mins.style.color = "gray";
secs.style.color = "red";
timerStyle.style.display = "flex";
timerStyle.style.fontSize = "40px";
timerStyle.style.justifyContent = "space-between";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.intervalId = null;
    this.deltaTime = 0;
  }
  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(this.deltaTime);
      console.log(time);
      days.textContent = time.days;
      hours.textContent = time.hours;
      mins.textContent = time.mins;
      secs.textContent = time.secs;
    }, 1000);
  }

  stop() {
    this.intervalId;
    console.log(this.intervalId);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 5, 2021"),
});

timer.start();
timer.stop();
