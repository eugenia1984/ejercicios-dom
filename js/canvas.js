// Agarro el canvas
const canvas = document.querySelector('#draw');
// Determino que el context va a ser 2D, también podria ser 3D
const ctx = canvas.getContext('2d');
// Le doy el tamaño a mi canvas, en vez de los 800px va a ser el ancho y alto de la pantalla que se vea
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// le doy un color
ctx.strokeStyle = '#BADA55';
// Dejo que sea redondo el borde
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// Le doy un ancho
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

// Creo una bandera (flag) para determinar si estoy dibujando, es decir si tengo presionado el mouse
let isDrawing = false;
// Establezco mis variables y las inicializo en 0 para tener las coordenadas de inicio y final de la linea con los ejes X e Y
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// Cada vez que mueva el mouse en el canvas voy a estar invocando mi funcion draw()
function draw(e) {
  if (!isDrawing) return; // asi para mi funcion cuando detecto que el mouse no esta siendo presionado
  // Para darle color a la linea con la que dibujo
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //Voy a comenzar mi path para la linea
  ctx.beginPath();
  // Punto desde donde comienzo
  ctx.moveTo(lastX, lastY);
  // Punto hacia donde voy
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // Actualizo las variables para que el punto donde termino sea el punto donde comienza la nueva, utilizo la desestructuración del array
  [lastX, lastY] = [e.offsetX, e.offsetY];
  //voy a ir incrementando mi variable hue, para poder cambiar el color con el que dibujo la linea, y como el valor de hue esta entre 0 y 360; hago que si llega a 360 se quede con valor 0.
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  // Tambien hago algo similar con el ancho de la linea, va a empezar con 100 y va a comenzar a achicarse hasta llegar a 1 y ahi comenzará a agrandarse hasta llegar a 100. Este cambio lo voy a manejar con la variable direction
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}

// Para que cuando se esté presionando el mouse mi variable isDrawing cambie a true y me de los valores de la posicion en los ejes X e Y y utilizando la desestructuración del array voy a ir actualizando los datos de donde termino en el eje X e Y
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
// Cuando el mouse se este moviendo pero no lo estoy presionando mi variable isDrawing es false, para avisar que en ese momento no dibujo
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
