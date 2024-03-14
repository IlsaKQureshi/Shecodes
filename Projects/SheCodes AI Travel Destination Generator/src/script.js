function generateDestination(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-instr");
  let key = "bc8d89bca04963f6034ob7f2f43ta0c9";
  let prompt = `generate an ideal travel destination taking these instructions into account: ${userInput.value}`;
  let context =
    "You're an expert traveler with extensive experience exploring every corner of the globe, from budget-friendly places to wildlife adventures, from solo traveling to family friendly destinations, from extreme sports to serene nature retreats, and from luxurious holiday destinations to the best simple sightseeing tours. Generate only one destination within a basic HTML structure in <strong> element. Additionally, include a brief explanation, approximately 3- 10 lines in length, following the <br /> tag after the destination element.";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  let destinationElement = document.querySelector("#show-destination");
  destinationElement.classList.remove("hidden");
  destinationElement.innerHTML = `<div class="generating">⏳ Generating the perfect destination according to your needs</div>`;

  axios.get(url).then(displayDestination);
}

function displayDestination(response) {
  new Typewriter("#show-destination", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

let destinationFormElement = document.querySelector("#destination-form");
destinationFormElement.addEventListener("submit", generateDestination);
