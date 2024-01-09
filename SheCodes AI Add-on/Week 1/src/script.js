//function alertAns(response) {
//  alert(response.data.answer);
//}

//let api = "bc8d89bca04963f6034ob7f2f43ta0c9";
//let prompt = "Who the first female president was using the SheCodes AI API";
//let context = "provide a clear and precise answer";
//let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api}`;

//axios.get(url).then(alertAns);

//Second Challenge function handleClick(response) {}

//let disabledButton = document.querySelector("#disable-button");
//disabledButton.addEventListener("click", handleClick);

//function handleClick() {
//  disabledButton.setAttribute("disabled", "disabled");
//}

//let greenButton = document.querySelector("#green-button");

//greenButton.addEventListener("click", greenBgClick);

//function greenBgClick() {
//  greenButton.style.backgroundColor = "green";
//}

//let changeButton = document.querySelector("#change-colour");

//changeButton.addEventListener("click", colourChange);

//function colourChange() {
//  changeButton.classList.add("danger");
//}

// Third Challenge TypewriterJs

let name = "Ilsa Khurshid Qureshi";

let heading = document.querySelector("h1");
heading.innerHTML = name;

new Typewriter("h2", {
  strings: [name],
  autoStart: true,
  delay: 100,
  cursor: "",
});
