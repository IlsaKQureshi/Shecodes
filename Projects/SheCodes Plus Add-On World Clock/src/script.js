function ChangeHomepageTime() {
  let BrusselsElement = document.querySelector("#Brussels");
  let CairoElement = document.querySelector("#Cairo");
  let IstanbulElement = document.querySelector("#Istanbul");

  if (BrusselsElement) {
    let BrusselsDateElement = BrusselsElement.querySelector("#Brussels .date");
    let BrusselsTimeElement = BrusselsElement.querySelector("#Brussels .time");

    let BrusselsTime = moment().tz("Europe/Brussels");

    BrusselsDateElement.innerHTML = BrusselsTime.format("MMMM Do YYYY");
    BrusselsTimeElement.innerHTML = BrusselsTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  if (CairoElement) {
    let CairoDateElement = CairoElement.querySelector("#Cairo .date");
    let CairoTimeElement = CairoElement.querySelector("#Cairo .time");

    let CairoTime = moment().tz("Africa/Cairo");

    CairoDateElement.innerHTML = CairoTime.format("MMMM Do YYYY");
    CairoTimeElement.innerHTML = CairoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  if (IstanbulElement) {
    let IstanbulDateElement = IstanbulElement.querySelector("#Istanbul .date");
    let IstanbulTimeElement = IstanbulElement.querySelector("#Istanbul .time");

    let IstanbulTime = moment().tz("Europe/Istanbul");

    IstanbulDateElement.innerHTML = IstanbulTime.format("MMMM Do YYYY");
    IstanbulTimeElement.innerHTML = IstanbulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

setInterval(ChangeHomepageTime, 1000);

function localTime(event) {
  let locationCity = document.querySelector("#loc_city");
  let locationTZ = moment.tz.guess();
  let cityTime = moment().tz(locationTZ);
  locationCity = locationTZ.replace("_", " ").split("/")[1];

  let locationElement = document.getElementById("location");

  if (locationElement) {
    locationElement.innerHTML = `<div class="location" id="location">
        <div class="time" id="loc_time">${cityTime.format(
          "h:mm:ss"
        )}<small> ${cityTime.format("A")}</small></div>
        <div class="city" id="loc_city">${locationCity}</div>
        <div class="date" id="loc_date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>`;
    Clock(cityTime);
  }

  if (event) {
    UpdateCity(event);
  }
}

setInterval(localTime, 1000);
function Clock(time) {
  let hr = document.getElementById("hour");
  let mn = document.getElementById("min");
  let sc = document.getElementById("sec");

  let hh = time.hour();
  let mm = time.minute();
  let ss = time.second();

  let hourRotation = 30 * hh + mm / 2;
  let minutesRotation = 6 * mm;
  let secondsRotation = 6 * ss;

  hr.style.transform = `rotate(${hourRotation}deg)`;
  mn.style.transform = `rotate(${minutesRotation}deg)`;
  sc.style.transform = `rotate(${secondsRotation}deg)`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", localTime);
citiesSelectElement.addEventListener("change", UpdateCity);

function UpdateCity(event) {
  let cityTZ = event.target.value;
  let updatedCityTime = moment().tz(cityTZ);
  let cityName = cityTZ.replace("_", " ").split("/")[1];

  let updatedCity = document.querySelector("#location");

  if (cityTZ) {
    updatedCity.innerHTML = `<div class="time" id="loc_time">${updatedCityTime.format(
      "h:mm:ss"
    )}<small>${updatedCityTime.format("A")}</small>
  </div>
        <div class="city" id="loc_city">${cityName}</div>
        <div class="date" id="loc_date">${updatedCityTime.format(
          "MMMM Do YYYY"
        )}</div>
      </div>`;

    Clock(updatedCityTime);
  }
}
