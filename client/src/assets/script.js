var pokeCard = document.querySelector('[data-poke-card]');
var pokeName = document.querySelector('[data-poke-name]');
var pokeImg = document.querySelector('[data-poke-img]');
var pokeImgContainer = document.querySelector('[data-poke-img-container]');
var pokeId = document.querySelector('[data-poke-id]');
var pokeTypes = document.querySelector('[data-poke-types]');
var pokeStats = document.querySelector('[data-poke-stats]');

var typeColors = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: 'DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F'
};

var searchPokemon = async event => {
  await event.preventDefault();
  const { value } = await event.target.pokemon;
  await fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
    .catch(err => renderNotFound())
}

var renderPokemonData = data => {
  const sprite = data.sprites.front_default;
  const { stats, types } = data;

  pokeName.textContent = data.name;
  pokeImg.setAttribute('src', sprite);
  pokeId.textContent = `Nº ${data.id}`;
  setCardColor(types);
  renderPokemonTypes(types);
  renderPokemonStats(stats);
}

var setCardColor = types => {
  const colorOne = typeColors[types[0].type.name];
  const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
  pokeImg.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
  pokeImg.style.backgroundSize = ' 5px 5px';
}

var renderPokemonTypes = types => {
  pokeTypes.innerHTML = '';
  types.forEach(type => {
    const typeTextElement = document.createElement("div");
    typeTextElement.style.color = typeColors[type.type.name];
    typeTextElement.textContent = type.type.name;
    pokeTypes.appendChild(typeTextElement);
  });
}

var renderPokemonStats = stats => {
  pokeStats.innerHTML = '';
  stats.forEach(stat => {
    const statElement = document.createElement("div");
    const statElementName = document.createElement("div");
    const statElementAmount = document.createElement("div");
    statElementName.textContent = stat.stat.name;
    statElementAmount.textContent = stat.base_stat;
    statElement.appendChild(statElementName);
    statElement.appendChild(statElementAmount);
    pokeStats.appendChild(statElement);
  });
}

var renderNotFound = () => {
  pokeName.textContent = 'No encontrado';
  pokeImg.setAttribute('src', '../../../assets/poke-shadow.png');
  pokeImg.style.background = '#fff';
  pokeTypes.innerHTML = '';
  pokeStats.innerHTML = '';
  pokeId.textContent = '';
}
