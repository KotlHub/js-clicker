let TIMEOUT = 5000;
let LEVEL = 1; //уровень
let clicks = 0; //количество кликов за раунд
let totalClicks = localStorage.getItem('ttl'); //общее количество кликов
let isShop = false;
const GAMEOVER = "Game Over";

// main buttons
const shop = document.querySelector('#shop');
const level = document.querySelector('#level');
const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
const total = document.querySelector('#total');

const mainDiv = document.querySelector('#main');

// shop buttons

const shopDiv = document.querySelector('#shopDiv');
shopDiv.style.display = "none";


// const mainElements = [];
// mainElements.push(level, display, button, counter, total);

button.onclick = start;
shop.onclick = showShop;

function formatTime(ms) {
  return Number.parseFloat(ms / 1000).toFixed(2);
}

function start() {
  if (isShop)
  {
    return;
  }
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
  if(!isShop)
  {
  shop.textContent = "Back";
  mainDiv.style.display = "none";
  shopDiv.style.display = "flex";
  isShop = !isShop;
  }

  else if(isShop)
  {
  shop.textContent = "Shop";
  mainDiv.style.display = "flex";
  shopDiv.style.display = "none";
  isShop = !isShop;
  }
}