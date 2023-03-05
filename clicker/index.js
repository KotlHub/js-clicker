let TIMEOUT = 5000;
let LEVEL = 1; //уровень
let clicks = 0; //количество кликов за раунд
let totalClicks = localStorage.getItem('ttl'); //общее количество кликов
const GAMEOVER = "Game Over";

const shop = document.querySelector('#shop');
const level = document.querySelector('#level');
const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
const total = document.querySelector('#total');

const mainDiv = document.querySelector('#main');

const mainElements = [];
mainElements.push(level, display, button, counter, total);

button.onclick = start;
shop.onclick = showShop;

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
  localStorage.setItem('ttl', totalClicks);
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

function showShop() {
  if(shop.textContent === "Shop")
  {
  // for(let i = 0; i < mainElements.length; i++)
  // {
  //   mainElements[i].style.display = "none";
  // }
  shop.textContent = "Back";
  mainDiv.style.display = "none";
  }

  else if(shop.textContent === "Back")
  {
  // for(let i = 0; i < mainElements.length; i++)
  // {
  //   mainElements[i].style.display = "block";
  // }
  mainDiv.style.display = "block";
  shop.textContent = "Shop";
  }
}