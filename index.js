const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  intervalId = setInterval(changeBodyСolor, 1000);

  refs.startBtn.setAttribute('disabled', true);
}

function onStopBtnClick() {
  clearInterval(intervalId);
  intervalId = null;

  refs.startBtn.removeAttribute('disabled');
}

function changeBodyСolor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
