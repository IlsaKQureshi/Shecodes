function generatePoem(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instr");
  let defaultText = document.querySelector("#poem");
  defaultText.innerHTML = "A poem is being generated";
  let key = "bc8d89bca04963f6034ob7f2f43ta0c9";
  let prompt = `User Instructions: Generate a french poem about ${userInstructions.value}`;
  let context =
    "Your  a poem expert and love to write poems that are 4 lines long only by following the user instructions.You must generate a poem in basic HTML and each line should be seperated by <br />. Also mention SheCodes AI in <strong> at the end of the poem on the next line ";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(url).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
