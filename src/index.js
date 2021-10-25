const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

let IntervalId = null;

refs.startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
    refs.startBtn.setAttribute('disabled', true);
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');
})

