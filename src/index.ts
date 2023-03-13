// GET joke
let actualJokeId: string = "";
function getJoke(): void {
  fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then((res: Response) => res.json())
    .then((data: { id: string; joke: string }) => {
      if (data) {
        console.log(data);
        actualJokeId = data.id;
        console.log(actualJokeId);        
        const joke: string = data.joke;
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

//Function SHOW icons and text on html
function showScoreIcons(): void {
  if (scoreIcon1) {
    (scoreIcon1 as HTMLElement).style.display = "inline";
  }
  if (scoreIcon2) {
    (scoreIcon2 as HTMLElement).style.display = "inline";
  }
  if (scoreIcon3) {
    (scoreIcon3 as HTMLElement).style.display = "inline";
  }
  if (scoreText1) {
    (scoreText1 as HTMLElement).style.display = "inline";
  }
  if (scoreText2) {
    (scoreText2 as HTMLElement).style.display = "inline";
  }
  if (scoreText3) {
    (scoreText3 as HTMLElement).style.display = "inline";
  }
}

//PUSH scores and joke on array
const reportAcudits: any = [];

function push_love(): void {
  createJokeObject(3);
}
function push_meh(): void {
  createJokeObject(2);
}
function push_notFound(): void {
  createJokeObject(1);
}

// Class Joke
class Joke_report {
  id: string;
  score: number;
  date: string;
  constructor(id: string, score: number, date: string) {
    this.id = id;
    this.score = score;
    this.date = date;
  }
}

// Function to create a Joke Object with joke ID, SCORE, DATE
function createJokeObject(jokeScore: number) {
  const actualDate = new Date();
  const actualDateStr: string = actualDate.toISOString();
  const jokeObject: object = new Joke_report(
    actualJokeId,
    jokeScore,
    actualDateStr
  );
  changeScore(jokeObject);
}

// Function to permit change score
function changeScore(jokeObject: any) {
  if (reportAcudits.length > 0) {
    if (reportAcudits.at(-1).id === jokeObject.id) {
      reportAcudits.at(-1).score = jokeObject.score;
    } else {
      reportAcudits.push(jokeObject);
    }
  } else {
    reportAcudits.push(jokeObject);
  }
  console.log(reportAcudits);
}
