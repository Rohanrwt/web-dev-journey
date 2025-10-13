const quoteEl = document.getElementById("quoteEl");
const btnEl = document.getElementById("btnEl");
const jokesUrl =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

async function getData() {
  try {
    const response = await fetch(jokesUrl);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const result = await response.json();
    quoteEl.textContent = result.joke;
  } catch (error) {
    console.error(error.message);
  }
}
