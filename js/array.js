const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Para utilizar Array.prototype.filter(), filtro la lista de inventores que nacieron en 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599));
console.table(fifteen);

// Para utilizar Array.prototype.map(), voy a crear un arreglo con los nombres y apellidos de los inventores
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Para utilizar Array.prototype.sort() voy a ordener a los invertores, con el dato de su nacimiento, desde el más viejo al más joven
const orderedByAge = inventors.sort((firstInventor, secondInventor) =>(firstInventor.year > secondInventor.year) ? 1 : -1);
console.table(orderedByAge);

// Para utilizar Array.prototype.reduce() voy a calcular cuantos años en total vivieron todos los inventores juntos.
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0); // en el primer loop total no está definido, por eso con el 0 lo inicializo en 0
console.log(totalYears);

// Ordeno a los inventores por los años vividos
const oldest = inventors.sort(function(a,b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  // utilizo de nuevo un ternario
  return lastInventor > nextInventor ? -1 : 1;

});
console.table(oldest);

// Para crear una lista de boulevares de Paris que contengan 'de' en algún lugar de su nombre
// Utilizo: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Si hago: const  links = category.querySelector('a');
// Como .querySelector me devuelve una lista de nodos, no un array, voy a convertir la constante links en un array de nombres y luego filtrarla con los que incluyan 'de'
// Una opción es con rest: const  links = [...category.querySelector('a')];

//Aca esta el codigo que va en la otra web:

/*
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));
console.log(de);
*/

//  Ahora voy a trabajar con el array de personas, para ordenar a las personasa lfabeticamente por el apellido, con .sort().
const alpha = people.sort((lastOne, nextOne) => {
  //Como me devuelve un array los voy a pasar a variables, para poder separar con .split()
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.table(alpha);

// Para utilizar .reduce(), sumo las instancias del array guardado en la constante data
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
