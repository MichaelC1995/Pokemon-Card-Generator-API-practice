const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};
const URL = `https://pokeapi.co/api/v2/pokemon/`
const card = document.getElementById(`card`);
const button = document.getElementById(`button`);

async function main(){
    let id = Math.floor(Math.random() * 700) + 1;
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let response = await data.json();
    const pokemonCard = document.querySelector(`.card`);
    console.log(response);   
    const themeColor = typeColor[response.types[0].type.name];
    console.log(themeColor);
    
    pokemonCard.innerHTML = `
    <p class="hp">
    <span>
    HP${response.stats[0].base_stat}
    </span>
    </p>
    <img src="${response.sprites.other.dream_world.front_default}" alt="">
    <h2 class="poke-name">${response.name}</h2>
    <div class="types">
    </div>
    <div class="stats">
    <div class="Attack stat">
    <h3>${response.stats[1].base_stat}</h3>
    <p>Attack</p>
    </div>
    <div class="Defence stat">
    <h3>${response.stats[2].base_stat}</h3>
    <p>Defence</p>
    </div>
    <div class="Speed stat">
    <h3>${response.stats[5].base_stat}</h3>
    <p>Speed</p>
    </div>
    </div>`
    appendTypes(response.types);
    styleCard(themeColor);
}
main()

let appendTypes = (types) => {
    types.forEach(types => {
        let span = document.createElement(`span`);
        span.textContent = types.type.name;
        document.querySelector('.types').appendChild(span);
        console.log(span);  
    })
}

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
    });
  };