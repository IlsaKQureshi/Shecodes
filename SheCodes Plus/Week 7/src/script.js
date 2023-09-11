function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let min = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (min < 10) {
    min = `0${min}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${min} `;
}

function show_temp(response) {
  console.log(response.data);

  let temp_element = document.querySelector("#temperature");
  let city_element = document.querySelector("#city");
  let weather_condition_element = document.querySelector("#weather_condition");
  let humidity_element = document.querySelector("#humidity");
  let wind_element = document.querySelector("#wind");
  let date_element = document.querySelector("#date");
  let weather_icon_element = document.querySelector("#weather_icon");

  temp_element.innerHTML = Math.round(response.data.main.temp);
  city_element.innerHTML = response.data.name;
  weather_condition_element.innerHTML = response.data.weather[0].description;
  humidity_element.innerHTML = response.data.main.humidity;
  wind_element.innerHTML = Math.round(response.data.wind.speed);
  date_element.innerHTML = formatDate(response.data.dt * 1000);
  weather_icon_element.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weather_icon_element.setAttribute(
    "alt",
    response.data.weather[0].description
  );
}

let apiKey = `88d15ed9f618b4c3fad2d4f40f91aa94`;
let city = "Karachi";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

console.log(url);
axios.get(url).then(show_temp);
