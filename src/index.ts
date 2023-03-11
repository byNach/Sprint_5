function getJoke() {
  fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: { Accept: "application/json" }, //este header está en la documentación de la API
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log(data);
        const joke: string = data.joke;
        console.log(joke);
        const jokeInHtml = document.getElementById("joke");
        if (jokeInHtml) {
          jokeInHtml.innerHTML = joke;
        }
      }
    });
  showScoreIcons();
}

const scoreIcon1 = document.getElementById("score_1");
const scoreIcon2 = document.getElementById("score_2");
const scoreIcon3 = document.getElementById("score_3");
const scoreText1 = document.getElementById("scoreText_1");
const scoreText2 = document.getElementById("scoreText_2");
const scoreText3 = document.getElementById("scoreText_3");
function showScoreIcons() {
  if (scoreIcon1) {
    scoreIcon1.style.display = "inline";
  }
  if (scoreIcon2) {
    scoreIcon2.style.display = "inline";
  }
  if (scoreIcon3) {
    scoreIcon3.style.display = "inline";
  }
  if (scoreText1) {
    scoreText1.style.display = "inline";
  }
  if (scoreText2) {
    scoreText2.style.display = "inline";
  }
  if (scoreText3) {
    scoreText3.style.display = "inline";
  }
}
