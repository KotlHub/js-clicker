let TIMEOUT = 5000;
let LEVEL = 1; //уровень
let clicks = 0; //количество кликов за раунд
let totalClicks = localStorage.getItem('ttl'); //общее количество кликов
let buttonSkin = localStorage.getItem('color');
let isShop = false;
const GAMEOVER = "Game Over";

// main buttons
const shop = document.querySelector('#shop');
const level = document.querySelector('#level');
const display = document.querySelector('#display');
const button = document.querySelector('#button');
const newButton = document.querySelector('#newButton');
const counter = document.querySelector('#counter');
const total = document.querySelector('#total');

const mainDiv = document.querySelector('#main');

button.style.color = buttonSkin;
newButton.style.color = buttonSkin;
newButton.style.display = "none";

// shop buttons

const shopDiv = document.querySelector('#shopDiv');
const rButton = document.querySelector('#red');
const gButton = document.querySelector('#green');
const bButton = document.querySelector('#blue');

rButton.onclick = buySkin(rButton.style.color)
gButton.onclick = buySkin(gButton.style.color)
bButton.onclick = buySkin(bButton.style.color)

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

  newButton.onclick = () => {
  counter.textContent = clicks++;
  total.textContent = "TOTAL " + totalClicks++;
  localStorage.setItem('ttl', totalClicks);
  }

  const interval = setInterval(() => {
    const delta = Date.now() - startTime;
    display.textContent = formatTime(TIMEOUT - delta);
  }, 100);

  const timeout = setTimeout(() => {
    newButton.onclick = start;
    button.onclick = start;
    display.textContent = GAMEOVER;

    clearInterval(interval);
    clearTimeout(timeout);
  }, TIMEOUT);
  if(LEVEL++ && LEVEL >= 5)
  {
    button.style.display = "none";
    newButton.style.display = "block";
    newButton.style.right = getRandomInt(80) + "%";
    newButton.style.top = getRandomInt(80) + "%";
  }

  clicks = 0;
  //LEVEL++;
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buySkin(color)
{
  localStorage.setItem('color', color);
  button.style.color = color;
  newButton.style.color = color;

}