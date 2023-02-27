let TIMEOUT = 5000;
let LEVEL = 1;
let clicks = 0;
let totalClicks = 0;
const GAMEOVER = "Game Over";

const level = document.querySelector('#level');
const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
const total = document.querySelector('#total');

button.onclick = start;

// function start() {
//   const startTime = Date.now();

//   display.textContent = formatTime(TIMEOUT);
//   button.onclick = () => counter.textContent = clicks++;

//   const interval = setInterval(() => {
//     const delta = Date.now() - startTime;
//     display.textContent = formatTime(TIMEOUT) - delta;
//   }, 100);

//   setTimeout(() => {
//     button.onclick = null;
//     display.textContent = 'Game Over';

//     clearInterval(interval);
//     clearTimeout(timeout);
//   }, TIMEOUT);
// }

function formatTime(ms) {
  return Number.parseFloat(ms / 1000).toFixed(2);
}

function start() {
  const startTime = Date.now();

  level.textContent = "Level " + LEVEL;

  display.textContent = formatTime(TIMEOUT);
  button.onclick = () => {
  counter.textContent = clicks++;
  total.textContent = "TOTAL " + totalClicks++;
  }

  const interval = setInterval(() => {
    const delta = Date.now() - startTime;
    display.textContent = formatTime(TIMEOUT - delta);
  }, 100);

  const timeout = setTimeout(() => {
    button.onclick = start;
    display.textContent = GAMEOVER;

    clearInterval(interval);
    clearTimeout(timeout);
  }, TIMEOUT);

  clicks = 0;
  LEVEL++;
}