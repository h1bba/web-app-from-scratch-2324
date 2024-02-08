// Data fetchen
fetch("/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

// Data showcasen
// voor elke userS van data
  for (let users of data) {
    const usersNameEl = document.getElementById('naam');
    const userAgeEl = document.getElementById('age');
    const userStadEl = document.getElementById('stad');

    usersNameEl.innerText = users.name;
    userAgeEl.innerText = users.age;
    userStadEl.innerText = users.stad;

  }
  })
  .catch((error) => console.error("Error loading JSON file", error));

  // Data fetchen
fetch("/data/skills.json")
.then((response) => response.json())
.then((data) => {
  console.log(data);

// Data showcasen
  // voor elke tool van de fetch data (loop)
for (let tool of data) {
    // pak de container met de class .skillcontainer
    const skillscontainer = document.querySelector(".skillscontainer")
    // maak een article aan
    const skillbox = document.createElement('article');
    // voeg de class skillbox toe
    skillbox.classList.add('skillbox')

    // maak voor de skill naam een p aan
    const skillName = document.createElement("p");
    // vul de p met de textcontent uit de JSON
    skillName.textContent = tool.skill;
    // console.log(tool.skill);

    // element creëeren voor image
    const skillImg = document.createElement("img");
    // class toevoegen aan image
    skillImg.classList.add("skillimg");
    // img source & alt text zetten
    skillImg.src = tool.img;
    skillImg.alt = tool.skill;

    // zet skillImg en skillName in skillbox
    skillbox.appendChild(skillImg);
    skillbox.appendChild(skillName);
    // zet skillbox in skillscontainer
    skillscontainer.appendChild(skillbox);
}
})
.catch((error) => console.error("Error loading JSON file", error));

// TUTORIAL voor de logica: https://www.youtube.com/watch?v=f4D50VnO_Gw&t=609s

const searchButton = document.getElementById("searchbutton");
const pokemonInput = document.getElementById("pokemoninput");
const pokemonCont = document.getElementById("pokemoncont");

searchButton.addEventListener( "click" , ()=>{
    const pokemonName = pokemonInput.value.toLowerCase(); 
    
    if (pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            displayPokemonData(data);
        })
        .catch(error=> {
            console.error('fetch error', error);
            pokemonCont.innerHTML = 'error fetching pokemon'
        });
    
    } else {
        pokemonCont.innerHTML = 'Zoek een pokemon op'
    }
});

searchButton.addEventListener('click', performSearch);

pokemonInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    // lowercase om case sensitivity tegen te gaan
    const pokemonName = pokemonInput.value.toLowerCase();
    
    if (pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            displayPokemonData(data);
        })
        .catch(error=> {
            console.error('fetch error', error);
            pokemonCont.innerHTML = 'error fetching pokemon'
        });
    } else {
        pokemonCont.innerHTML = 'Zoek een pokemon op'
    }
}

function  displayPokemonData(pokemonData){
    const capitalizedPokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

    pokemonCont.innerHTML = `
    <h2>${pokemonData.name}</h2>
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
    <p>Height: ${pokemonData.height}</p>
    <p>Weight: ${pokemonData.weight}</p>
    <p>Types: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
`;
}

