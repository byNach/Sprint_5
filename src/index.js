"use strict";
function getJoke() {
    fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: { Accept: "application/json" }, //este header está en la documentación de la API
    })
        .then((res) => res.json())
        .then((data) => {
        if (data) {
            console.log(data);
            const joke = data.joke;
            console.log(joke);
            const jokeInHtml = document.getElementById("joke");
            if (jokeInHtml) {
                jokeInHtml.innerHTML = joke;
            }
        }
    });
}
