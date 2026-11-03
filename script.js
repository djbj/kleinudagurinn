console.log('Welcome to Kleinudagurinn.is');
// Script is commented out and INACTIVE in index.html
const endDate = new Date('2023-11-10T00:01:00');

const millisecondsPerSecond = 1000;
const millisecondsPerMinute = millisecondsPerSecond * 60;
const millisecondsPerHour = millisecondsPerMinute * 60;
const millisecondsPerDay = millisecondsPerHour * 24;
let timer;

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const timeRemaining = endDate - now;

  if (timeRemaining < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = 'Í dag er kleinudagurinn!';
    document.getElementById('countdownHeading').remove();
    return;
  }

  const days = Math.floor(timeRemaining / millisecondsPerDay);
  const hours = Math.floor(
    (timeRemaining % millisecondsPerDay) / millisecondsPerHour
  );
  const minutes = Math.floor(
    (timeRemaining % millisecondsPerHour) / millisecondsPerMinute
  );
  const seconds = Math.floor(
    (timeRemaining % millisecondsPerMinute) / millisecondsPerSecond
  );

  countdownElement.innerHTML = days + ' dagar ';
  countdownElement.innerHTML += hours + ' klst ';
  countdownElement.innerHTML += minutes + ' mín og ';
  countdownElement.innerHTML += seconds + ' sek';
}

timer = setInterval(updateCountdown, 0);

