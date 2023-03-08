"use strict";
function getJoke() {
    fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: { "Accept": "application/json" } //este header está en la documentación de la API
    })
        .then(res => res.json())
        .then(data => console.log(data));
}
