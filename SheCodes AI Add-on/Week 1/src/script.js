function alertAns(response) {
  alert(response.data.answer);
}

let api = "bc8d89bca04963f6034ob7f2f43ta0c9";
let prompt = "Who the first female president was using the SheCodes AI API";
let context = "provide a clear and precise answer";
let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api}`;

axios.get(url).then(alertAns);
