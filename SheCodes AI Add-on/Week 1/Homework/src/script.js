function handleClick() {
  let loading = document.querySelector("h3");
  loading.innerHTML = "A foody joke is being cooked for you... please wait";

  let key = "bc8d89bca04963f6034ob7f2f43ta0c9";
  let prompt = "Generate a short joke on food";
  let context = "";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(url).then(alertAns);
}

function alertAns(response) {
  new Typewriter("h3", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 70,
    cursor: "",
  });
}
let btn = document.querySelector("button");
btn.style.fontSize = "30px";

btn.addEventListener("click", handleClick);
