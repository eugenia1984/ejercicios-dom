const dogs = [
  { name: 'Snickers', age: 2 }, 
  { name: 'hugo', age: 8 }
];
// Creo la funcion makeGReen para cambiar a color verde el texto de la etiqueta parrafo de mi html y también modificar su tamaño de funte a 50px
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// El console.log() regular
console.log('hello');

// Si quiero interpolar un String con una variable, si es un String utilizo %s
console.log('Hola soy un %s interpolado!', 'texto');
// Igualmente ahora es más comun utilizar template string y con las comillas frances (back ticks) interpolar string con variables (a las variables las llamo ${} y dentro de las llaves va su identificador)

// Para darles estilo con %c
console.log('%c Soy un texto grandioso', 'font-size:50px; background:red; text-shadow: 2px 2px 0 blue')

// El console.warn() que nos da un aviso
console.warn('OH NOOO');

// El console.error() para mostrar los errores
console.error('Shit!');

// El console.info() que muestra informacion
console.info('Los cocodrilos comen entre 3 a 4 personas por año');

// Testing
const p = document.querySelector('p');
// console.assert() solo se mostrara cuando algo está mal, cuando no cumple la condición
console.assert(p.classList.contains('ouch'), 'Eso está mal!');

// Para limpiar la consola
//console.clear();

// Para ver elementos del DOM console.log()
console.log(p);
// console.dir me va a dar todo el detalle de las propiedades y los metodos que tiene el elemento
console.dir(p);

// Utilizando mi constane dosg voy a utilizar .groupCollapsed, para agrupar
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`Es: ${dog.name}`);
  console.log(`${dog.name} tiene ${dog.age} años`);
  console.log(`${dog.name} son ${dog.age * 7} en años perrunos`);
  console.groupEnd(`${dog.name}`);
});

// console.count() para contar
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);