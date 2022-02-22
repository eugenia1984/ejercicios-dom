const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
//Fetch devuelve una promesa 
// con el 1er then obtengo una respuesta que la paso a JSON
// con el 2do then obtengo una respuesta de la informacion y la voy a ir poniendo en ciudades con el spread operator (...)
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

// Para que lo que tipee en le recuadro vaya buscando una coincidencia en la lista de las ciudades o el estado
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // aca verifico si tengo un match con alguna ciudad del array
    // flag : g - global, para que me busque todas las que encuentre
    // flag: i - para que no sea case sensitive
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    // Para que me resalte las letras que coinciden de la lista de ciudades
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
     // Para que me resalte las letras que coinciden de la lista de estados
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">poblacion: ${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');  // con .join('') paso de un array con muchos items a uno con una sola String
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
// Si no escucho el evento keyup debería hacer click fuera del recuadro donde escribo
searchInput.addEventListener('keyup', displayMatches);