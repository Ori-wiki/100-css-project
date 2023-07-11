let currentDate = new Date();

let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
  currentDate
);
let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(
  currentDate
);
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currentDate);
let weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(
  currentDate
);
let hours = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
let minutes =
  (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
let seconds = currentDate.getSeconds();

const date = document.querySelector('.date');
const time = document.querySelector('.time');
const setWatchdata = () => {
  date.textContent = `${weekday} ${day} ${month} ${year}`;
  time.textContent = `${hours}:${minutes}`;
};
setWatchdata();
setInterval(() => {
  setWatchdata();
}, 5000);
