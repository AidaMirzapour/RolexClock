let hourArrow = document.querySelector(".hour");
let minArrow = document.querySelector(".min");
let secArrow = document.querySelector(".sec");

function updateTime() {
  debugger;
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  let hourDeg = (hour / 12) * 360;
  hourArrow.style.transform = `rotate(${hourDeg}deg)`;
  let minDeg = (min / 60) * 360;
  minArrow.style.transform = `rotate(${minDeg}deg)`;
  let secDeg = (sec / 60) * 360;
  secArrow.style.transform = `rotate(${secDeg}deg)`;

  setTimeout(updateTime, 1000);
}
updateTime();
