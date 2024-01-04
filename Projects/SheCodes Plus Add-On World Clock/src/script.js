function localTime() {
  let locationTime = document.querySelector("#loc_time");
  let locationCity = document.querySelector("#loc_city");
  let locationDate = document.querySelector("#loc_date");
  let locationTZ = moment.tz.guess();
  let cityTime = moment().tz(locationTZ);

  locationCity = locationTZ.replace("_", " ").split("/")[1];

  let locationElement = document.getElementById("location");

  locationElement.innerHTML = `<div class="location" id="location">
        <div class="time" id="loc_time">${cityTime.format(
          "h:mm:ss"
        )}<small> ${cityTime.format("A")}</small></div>
        <div class="city" id="loc_city">${locationCity}</div>
        <div class="date" id="loc_date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>`;

  let hr = document.getElementById("hour");
  let mn = document.getElementById("min");
  let sc = document.getElementById("sec");

  let hh = cityTime.hour();
  let mm = cityTime.minute();
  let ss = cityTime.second();

  let hourRotation = 30 * hh + mm / 2;
  let minutesRotation = 6 * mm;
  let secondsRotation = 6 * ss;

  hr.style.transform = `rotate(${hourRotation}deg)`;
  mn.style.transform = `rotate(${minutesRotation}deg)`;
  sc.style.transform = `rotate(${secondsRotation}deg)`;
}
setInterval(localTime, 1000);

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
