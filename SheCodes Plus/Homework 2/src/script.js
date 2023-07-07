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

  full_new_date = `${day} ${num_date} ${month} ${year} ${hour}:${min} ` 

  return full_new_date
}

document.getElementById("full-date").innerHTML = new_date();

function sub_val(event){
  event.preventDefault()
  let input = document.querySelector("#city-input");
  document.getElementById("the-city").innerHTML = input.value
}

let form = document.querySelector("form");
form.addEventListener("submit", sub_val);

// didnt have time to implement the bonus feature but you will definitely see it in my final project!



