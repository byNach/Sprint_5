"use strict";
//DAD or CHUCK
function dadOrChuck() {
    const randNum = Math.floor(Math.random() * 10) + 1;
    console.log(randNum);
    if (randNum <= 5) {
        getFirstJoke();
    }
    else {
        getSecondJoke();
    }
}
// GET first joke from API
let actualJokeId = "";
function getFirstJoke() {
    fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: { Accept: "application/json" },
    })
        .then((res) => res.json())
        .then((data) => {
        if (data) {
            console.log(data);
            actualJokeId = data.id;
            console.log(actualJokeId);
            const joke = data.joke;
            const jokeInHtml = document.getElementById("joke");
            if (jokeInHtml) {
                jokeInHtml.innerHTML = joke;
            }
        }
    });
    showScoreIcons();
}
// GET second joke from API
let actualSecondJokeId = "";
function getSecondJoke() {
    const url = `https://api.chucknorris.io/jokes/random`;
    const headers = {
        "Content-Type": "application/json",
    };
    fetch(url, {
        method: "GET",
        headers: headers,
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then((data) => {
        if (data) {
            console.log(data);
            actualJokeId = data.id;
            console.log(actualJokeId);
            const joke = data.value;
            const jokeInHtml = document.getElementById("joke");
            if (jokeInHtml) {
                jokeInHtml.innerHTML = joke;
            }
        }
    });
    showScoreIcons();
}
// GET html elements
const scoreIcon1 = document.getElementById("score_1");
const scoreIcon2 = document.getElementById("score_2");
const scoreIcon3 = document.getElementById("score_3");
const scoreText1 = document.getElementById("scoreText_1");
const scoreText2 = document.getElementById("scoreText_2");
const scoreText3 = document.getElementById("scoreText_3");
//Function SHOW icons and text on html
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
//PUSH scores and joke on array
const reportAcudits = [];
function push_love() {
    createJokeObject(3);
}
function push_meh() {
    createJokeObject(2);
}
function push_notFound() {
    createJokeObject(1);
}
// Class Joke
class Joke_report {
    constructor(id, score, date) {
        this.id = id;
        this.score = score;
        this.date = date;
    }
}
// Function to create a Joke Object with joke ID, SCORE, DATE
function createJokeObject(jokeScore) {
    const actualDate = new Date();
    const actualDateStr = actualDate.toISOString();
    const jokeObject = new Joke_report(actualJokeId, jokeScore, actualDateStr);
    changeScore(jokeObject);
}
// Function to permit change score
function changeScore(jokeObject) {
    if (reportAcudits.length > 0) {
        if (reportAcudits.at(-1).id === jokeObject.id) {
            reportAcudits.at(-1).score = jokeObject.score;
        }
        else {
            reportAcudits.push(jokeObject);
        }
    }
    else {
        reportAcudits.push(jokeObject);
    }
    console.log(reportAcudits);
}
