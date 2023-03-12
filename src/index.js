"use strict";
let actualJokeId = "";
function getJoke() {
    fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: { Accept: "application/json" },
    })
        .then((res) => res.json())
        .then((data) => {
        if (data) {
            console.log(data);
            actualJokeId = data.id;
            const joke = data.joke;
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
class Joke_report {
    constructor(id, score, date) {
        this.id = id;
        this.score = score;
        this.date = date;
    }
}
function createJokeObject(jokeScore) {
    const actualDate = new Date();
    const actualDateStr = actualDate.toISOString();
    const jokeObject = new Joke_report(actualJokeId, jokeScore, actualDateStr);
    changeScore(jokeObject);
}
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
