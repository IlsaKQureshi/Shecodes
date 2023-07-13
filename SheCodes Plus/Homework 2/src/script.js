let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

//let city = prompt("Enter a city");

//if( city in weather){
//    alert(`It is currently ${Math.round(weather[city].temp)}°C in ${city} with a humidity of ${weather[city].humidity}%`)
//}
//else{
//    alert(`Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`)
//}

function new_date(){
  let now = new Date();

  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day = days[now.getDay()];

  num_date = now.getDate();

  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  month = months[now.getMonth()];

  year = now.getFullYear();

  hour =  now.getHours();

  min = now.getMinutes();

  min = min + "";

  if (min.length == 1)
    {
    min = "0" + min;
    }

  full_new_date = `${day} ${num_date} ${month} ${year} ${hour}:${min} ` 

  return full_new_date
}

document.getElementById("full-date").innerHTML = new_date();



// change city name & temp acc to search engine

let form = document.querySelector("form");
form.addEventListener("submit", GetCityName);

function GetCityName(event){
  event.preventDefault()
  let input = document.querySelector("#city-input");
  let cityname = input.value
  document.getElementById("the-city").innerHTML = input.value

  AxiosRequest(cityname)
}

function AxiosRequest(cityname){


  let apikey = "88d15ed9f618b4c3fad2d4f40f91aa94";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;

  return axios.get(url).then(GetCityTemp);

}

function GetCityTemp(response){

  temp = response.data.main.temp;
  console.log(temp);

  let templabel = document.querySelector(".temp");
  templabel.innerHTML = `${Math.round(temp)}°C`;

}


//Bonus: Current button

let CurrentLoc =document.querySelector("#current")
CurrentLoc.addEventListener("click", GeoReq);

function GeoReq(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(GetCoord);
}

function GetCoord(position){

  let long = position.coords.longitude;
  let lat = position.coords.latitude;
  let apikey ="88d15ed9f618b4c3fad2d4f40f91aa94"
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`;

  return axios.get(url).then(GetWeather);
}

function GetWeather(response){

  let temp = response.data.main.temp;

  let templabel = document.querySelector(".temp");
  templabel.innerHTML = `${Math.round(temp)}°C`;

  let name = response.data.name;

  document.getElementById("the-city").innerHTML = name;
}



