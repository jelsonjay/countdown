"use stract";
const newYear = new Date("Jan 1, 2023 00:00:00").getTime();

function newYearEve() {
  let now = new Date().getTime();
  space = newYear - now;

  let sec = 1000;
  let min = sec * 60;
  let hour = min * 60;
  let day = hour * 24;

  let d = Math.floor(space / day);
  let h = Math.floor((space % day) / hour);
  let m = Math.floor((space % hour) / min);
  let s = Math.floor((space % min) / sec);

  document.querySelector("#day").innerHTML = d;
  document.querySelector("#hour").innerHTML = h;
  document.querySelector("#min").innerHTML = m;
  document.querySelector("#sec").innerHTML = s;
}

setInterval(function () {
  newYearEve();
}, 1000);
