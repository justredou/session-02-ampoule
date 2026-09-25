'use strict';

const clock = document.getElementById('clock');
let hours = 9;
let minutes = 55;

function updateClock() {
  if (minutes >= 60) {
    minutes = 0;
    updateHours();
  };

  clock.textContent = `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`;
  ++minutes;
  console.log("hours && minutes", hours, minutes);
}

function updateHours() {
  hours >= 23 ? hours = 0 : ++hours;
}

setInterval(updateClock, 1000);
updateClock();