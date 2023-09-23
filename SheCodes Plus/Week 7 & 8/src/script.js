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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function display_forecast(response) {
  let forecast = response.data.daily;
  let forecast_element = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
              <div class="col-2">
                <div class="weather-forecast-date">${formatDay(
                  forecastDay.dt
                )}</div>
                <img
                  src= "https://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png";
                  alt=""
                  width="36"
                />
                <div class="weather-forecast-temp">
                  <span class="weather-temp-max">${Math.round(
                    forecastDay.temp.max
                  )}°</span
                  ><span class="weather-temp-min"> ${Math.round(
                    forecastDay.temp.min
                  )}°</span>
                </div>
              </div>
            `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;

  forecast_element.innerHTML = forecastHTML;
  console.log(forecastHTML);
}
function getForecast(coordinates) {
  let apiKey = `88d15ed9f618b4c3fad2d4f40f91aa94`;
  let api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

  axios.get(api_url).then(display_forecast);
}

function show_temp(response) {
  let temp_element = document.querySelector("#temperature");
  let city_element = document.querySelector("#city");
  let weather_condition_element = document.querySelector("#weather_condition");
  let humidity_element = document.querySelector("#humidity");
  let wind_element = document.querySelector("#wind");
  let date_element = document.querySelector("#date");
  let weather_icon_element = document.querySelector("#weather_icon");

  celsius_temp = Math.round(response.data.main.temp);

  temp_element.innerHTML = celsius_temp;
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

  getForecast(response.data.coord);
}

function search(city) {
  let apiKey = `88d15ed9f618b4c3fad2d4f40f91aa94`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(show_temp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city_input_element = document.querySelector("#city-input");
  search(city_input_element.value);
  console.log(city_input_element.value);
}

function showF(event) {
  event.preventDefault();
  celsius_link.classList.remove("active");
  fahrenheit_link.classList.add("active");
  let fahren_temp = Math.round((celsius_temp * 9) / 5 + 32);
  let temp_element2 = document.querySelector("#temperature");
  temp_element2.innerHTML = fahren_temp;
}

function showC(event) {
  event.preventDefault();
  fahrenheit_link.classList.remove("active");
  celsius_link.classList.add("active");
  let temp_element2 = document.querySelector("#temperature");
  temp_element2.innerHTML = celsius_temp;
}
let celsius_temp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let celsius_link = document.querySelector("#celsius-link");
celsius_link.addEventListener("click", showC);
