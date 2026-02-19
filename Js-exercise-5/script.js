const randPokeBtn = document.getElementById("randPokeBtn");
const prevPokeBtn = document.getElementById("prevPokeBtn");
const nextPokeBtn = document.getElementById("nextPokeBtn");
const pokeName = document.getElementById("pokeName");
const pokeImg = document.getElementById("pokeImg");

let pokeData = [];
let pokeCurrentNum = 0;
let pokeInfo = {};
let activateVersion = 1;


async function getIndvPoke(pokeNum) {
    const pokeRes = await fetch(pokeData.results[pokeCurrentNum].url);
    pokeInfo = await pokeRes.json();
    // Pokemon Name
    const fixedPokemonName = pokeInfo.name.charAt(0).toUpperCase() + pokeInfo.name.slice(1);
    pokeName.textContent = (pokeCurrentNum+1) + ". " + fixedPokemonName;
    // Pokemon Image
    pokeImg.src = pokeInfo.sprites.front_default;
    pokeImg.alt = pokeInfo.name + " image";
    
    console.log(pokeCurrentNum);
    console.log(pokeInfo);
    await getDescription(activateVersion);
}

async function getDescription(version) {
    const descRes = await fetch(pokeInfo.species.url);
    const descInfo = await descRes.json();
    console.log(version);
    console.log(descInfo);
    if (version === 1) {
        const redEntry = descInfo.flavor_text_entries.find(entry => entry.version.name === "red" && entry.language.name === "en");
        pokeDesc.textContent = redEntry ? redEntry.flavor_text : "No Description Available";
    } else if (version === 2) {
        const blueEntry = descInfo.flavor_text_entries.find(entry => entry.version.name === "blue" && entry.language.name === "en");
        pokeDesc.textContent = blueEntry ? blueEntry.flavor_text : "No Description Available";
    }
}

async function main() {
///////////////////////////////////////////////////////////FETCHING POKE DATA
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    pokeData = await res.json();
    await getIndvPoke(pokeCurrentNum);
///////////////////////////////////////////////////////////RANDOM POKE BUTTON
    randPokeBtn.addEventListener("click", async () => {  
    pokeCurrentNum = Math.floor(Math.random() * (pokeData.results.length - 1));
    await getIndvPoke(pokeCurrentNum);
});
///////////////////////////////////////////////////////////PREV POKE BUTTON
    prevPokeBtn.addEventListener("click", async () => {
        if (pokeCurrentNum > 0) {
            pokeCurrentNum--;
            await getIndvPoke(pokeCurrentNum);
        } else {
            pokeCurrentNum = pokeData.results.length - 1;
            await getIndvPoke(pokeCurrentNum);
        }
    });
///////////////////////////////////////////////////////////NEXT POKE BUTTON
    nextPokeBtn.addEventListener("click", async () => {
        if (pokeCurrentNum < pokeData.results.length - 1) {
            pokeCurrentNum++;
            await getIndvPoke(pokeCurrentNum);
        } else {
            pokeCurrentNum = 0;
            await getIndvPoke(pokeCurrentNum);
        }
    });

}
main();