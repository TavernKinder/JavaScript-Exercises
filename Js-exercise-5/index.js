const pokeBtn = document.getElementById("pokeBtn");
const pokeName = document.getElementById("pokeName");
const pokeImg = document.getElementById("pokeImg");

let pokeData = [];
let pokeCurrent = 0;


pokeBtn.addEventListener("click", async () => {  
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    pokedata = await res.json();
    console.log(pokedata.results);
    console.log(pokedata.results.length - 1);
    pokeCurrent = Math.floor(Math.random() * (pokedata.results.length - 1));
    console.log(pokeCurrent);
    console.log(pokedata.results[pokeCurrent]);

});
