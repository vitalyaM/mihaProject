'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelectorAll('.header a');
  const contents = document.querySelectorAll('main > div');

  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');
  const timer = document.querySelector('#timer');

  const money = document.querySelector('#money');
  const estimate = document.querySelector('#estimate');
  const peoplesCount = document.querySelector('#peoplesCount');
  const tip = document.querySelector('#tip .tip-count');
  const countTips = document.querySelector('#countTips');

  //* LINKS ==============================================================
  contents.forEach(el => {
    el.style.display = 'none';
    contents[0].style.display = 'block';
  });

  nav.forEach((el, i) => {
    el.preventDefault;

    el.addEventListener('click', (e) => {
      const href = el.getAttribute('href').substr(1);

      contents.forEach(elem => {
        elem.style.display = 'none';

        if (elem.getAttribute('id') === href) {
          elem.style.display = 'block';
        }
      });
    });
  });
  //* LINKS ==============================================================

  //* CLOCK =============================================================
  function addZero(num) {
    if (num < 10) {
      return `0${num}`
    } else {
      return num;
    }
  }

  function getTime() {
    const date = new Date();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    return {
      date,
      currentHours,
      currentMinutes,
      currentSeconds
    }
  }

  function setTime() {
    const t = getTime();

    hours.textContent = addZero(t.currentHours);
    minutes.textContent = addZero(t.currentMinutes);
    seconds.textContent = addZero(t.currentSeconds);
  }

  let intervalId;

  function clockStart() {
    intervalId = setInterval(setTime, 1000);
    setTime();
  }

  clockStart();

  setTimer.addEventListener('click', (e) => {
    const t = getTime();
    const timerValue = timer.value;

    switch (timerValue) {
      case '1 minutes':
        alarmСlock(60 * 1000)
        break;
      case '1 minutes':
        alarmСlock(60 * 1000)
        break;
      case '5 minutes':
        alarmСlock(60 * 5 * 1000)
        break;
      case '10 minutes':
        alarmСlock(60 * 10 * 1000)
        break;
      case '30 minutes':
        alarmСlock(60 * 30 * 1000)
        break;
      case '1 hour':
        alarmСlock(60 * 60 * 1000)
        break;

      default:
        break;
    }
  });

  function alarmСlock(num) {
    setTimeout(() => {
      alert('Звонит будильник, ты че глухой?');
    }, num);
  }
  //* CLOCK =============================================================

  //* CALC ==============================================================
  money.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "")
  });

  peoplesCount.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "")
  });

  countTips.addEventListener('click', (e) => {
    const moneyValue = +money.value;
    const estimateValue = +estimate.value;
    const peoplesCountValue = +peoplesCount.value;

    const tipCount = moneyValue * (estimateValue / 100) / peoplesCountValue;
    tip.textContent = Math.round(tipCount);
  });
  //* CALC ==============================================================
});
