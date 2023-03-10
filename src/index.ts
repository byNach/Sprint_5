//DAD or CHUCK
function dadOrChuck(): void {
  const randNum: number = Math.floor(Math.random() * 10) + 1;
  if (randNum <= 5) {
    getFirstJoke();
  } else {
    getSecondJoke();
  }
}
// GET first joke from API

let actualJokeId: string = "";

function getFirstJoke(): void {
  fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then((res: Response) => res.json())
    .then((data: { id: string; joke: string }) => {
      if (data) {
        console.log(data.joke);
        actualJokeId = data.id;
        const joke: string = data.joke;
        const jokeInHtml: HTMLElement | null = document.getElementById("joke");
        if (jokeInHtml) {
          jokeInHtml.innerHTML = joke;
        }
      }
    });
  showScoreIcons();
}

// GET second joke from API
let actualSecondJokeId: string = "";

function getSecondJoke() {
  const url = `https://api.chucknorris.io/jokes/random`;
  const headers = {
    "Content-Type": "application/json",
  };

  fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: { id: string; value: string }) => {
      if (data) {
        actualJokeId = data.id;
        console.log(data.value);
        const joke: string = data.value;
        const jokeInHtml: HTMLElement | null = document.getElementById("joke");
        if (jokeInHtml) {
          jokeInHtml.innerHTML = joke;
        }
      }
    });
  showScoreIcons();
}

// GET html elements
const scoreIcon1: HTMLElement | null = document.getElementById("score_1");
const scoreIcon2: HTMLElement | null = document.getElementById("score_2");
const scoreIcon3: HTMLElement | null = document.getElementById("score_3");
const scoreText1: HTMLElement | null = document.getElementById("scoreText_1");
const scoreText2: HTMLElement | null = document.getElementById("scoreText_2");
const scoreText3: HTMLElement | null = document.getElementById("scoreText_3");

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
function changeScore(jokeObject: any): void {
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

// GET weather from API
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=41.38&lon=2.15&appid=fbeae517988f06759018ec31a9f312e4&units=metric",
  {
    method: "GET",
    headers: { Accept: "application/json" },
  }
)
  .then((res: Response) => res.json())
  .then((data: any) => {
    if (data) {
      const tempInHtml: HTMLElement | null = document.getElementById("temp");
      const weatherInHtml: HTMLElement | null =
        document.getElementById("weather");
      if (tempInHtml) {
        tempInHtml.innerHTML = `Temp: ` + data.main.temp + `??C`;
      }
      if (weatherInHtml) {
        weatherInHtml.innerHTML = `Weather: ` + data.weather[0].description;
      }
    }
  });
