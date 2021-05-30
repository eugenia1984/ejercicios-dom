const d = document;
let x = 0;  //creo esta variable para poder controlar cuanto me voy a estar moviemndo en el eje x en la función move()
let y = 0; //creo esta variable para poder controlar cuanto me voy a mover en el eje y en la función move()

export function moveBall(e,ball,stage){
  //Paso como parametor el evento (e), la pelota(ball) y el escenario(stage)
  //Guardo en variables para el Document Object Model tanto la pelota como el escenario
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    //creo estas dos variables para que detecte los bordes y la pelota no se me vaya del rectángulo
    limitsBall = $ball.getBoundingClientRect(), 
    limitsStage = $stage.getBoundingClientRect();
  console.log(e.keyCode);
  console.log(e.key);
  console.log(limitsBall,limitsStage);
  //Creo una funcion move que va a recibir como parametro la direccion
    
  switch (e.keyCode){
    case 37:
      //move("left");
      if(limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }  
      //asi evito que se me vaya por fuera del rectangulo en el eje x, con mi condicional del if me frena el aumento de mi variable en x
      break;
      case 38:
        //move("up"); ademas de mover la pelota hacia arriba por defecto me va a hacer scroll hacia arriba por eso uso e.preventDefault(); pero esto solo pasa cuando la pelota está en mi rectángulo, luego vuelve la barra
        if(limitsBall.top > limitsStage.top) {
          e.preventDefault();
          y--;
         } 
         //con la condición del if prevengo que  mi pelota se me vaya tan arriba que se salga del rectangulo con e.preventDEfault(),  pero esto solo pasa cuando la pelota está en mi rectángulo, luego vuelve la barra
        break;
        case 39:
          //move("right");
          //on mi condicional del if me frena el aumento de mi variable en x y no permite que la pelota se vaya fuera de mi rectangulo  pero esto solo pasa cuando la pelota está en mi rectángulo, luego vuelve la barra
          if(limitsBall.right < limitsStage.right) {
            e.preventDefault();
            x++;
          }
          break;
          case 40:
            //move("down"); ademas de mover la pelota hacia abajo me va a hacer el scroll hacia abajo que trae por defecto por eso uso e.preventDefault(); pero esto solo pasa cuando la pelota está en mi rectángulo, luego vuelve la barra
            if(limitsBall.bottom < limitsStage.bottom) {
              e.preventDefault();
              y++;
            }
            break;  
            default:
              break;
  } 
  //Uso la propiedad de la transformación de la traslacion de CSS
  $ball.style.transform = `translate(${x*10}px,${y*10}px)`;       
}


//Funcion para atajos
export function shortcuts(e) {
  /*console.log(e.type);
  console.log(e.code);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);
  console.log(e);*/

  //Tenemos tres ventanas interactivas: alert, prompt, confirm
  //creo un atajo de teclado con A+ALT
  if(e.key === "a" && e.altKey) {
    alert("Lanzaste una alerta con el teclado");
  }
  //Creo el atajo del teclado con C+ALT
  if(e.key === "c" && e.altKey) {
    confirm("Lanzaste una confirmación con el teclado");
  }
  //Creo el atajo del teclado con P+ALT
  if(e.key === "p" && e.altKey) {
    prompt("Lanzaste un aviso con el teclado");
  }
} 
//cada tecla tiene su propio code y keyCode