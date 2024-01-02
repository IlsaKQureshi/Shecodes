function ChangeTime() {
  let LosAngelesElement = document.querySelector("#losangeles");

  if (LosAngelesElement) {
    let LosAngelesDateElement = LosAngelesElement.querySelector(".date");
    let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");

    let LosAngelesTime = moment().tz("America/Los_Angeles");

    LosAngelesDateElement.innerHTML = LosAngelesTime.format("MMMM Do YYYY");
    LosAngelesTimeElement.innerHTML = LosAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
setInterval(ChangeTime, 1000);

function UpdateCity(event) {
  let cityTZ = event.target.value;
  let cityTime = moment().tz(cityTZ);
  let cityName = cityTZ.replace("_", " ").split("/")[1];

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", UpdateCity);
