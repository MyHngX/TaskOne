const date = new Date();

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayIndex = date.getDay();

document.getElementById("weekDay").innerHTML = daysOfTheWeek[dayIndex];

function updateUTC() {
  const utcTime = date.toISOString();
  document.getElementById("utcTime").innerHTML = utcTime;
}

setInterval(updateUTC, 1000);
