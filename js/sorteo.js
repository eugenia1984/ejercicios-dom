const d = document;

export default function draw(btn,selector){  
  //Dentro creo la funcion expresada getWinner que tiene la lógica de programación
  const getWinner = (selector) => {
    //Creo una constante players
    const $players = d.querySelectorAll(selector),
    //Uso el objeto Math.random() para obtener un número aleatorio y lo redondeo con Math.floor()
      random = Math.floor(Math.random()*$players.length),
      //El ganador lo obtengo con la posición que me da la variable random
      winner = $players[random];
      return `El ganador es : ${winner.textContent}`;

  };
  //Y agrego el .addEventListener() para la delegación de eventos
  d.addEventListener("click", (e) =>{
    //Si es igual a btn, entonces activo el click
    if(e.target.matches(btn)){
      //Guardo en una variable la ejecucion de la funcion getWinner()
      let result = getWinner(selector);
      //Con un simple alerta muestro por pnatalla al ganador
      alert(result);
      //Tambien lo manodo por consola
      console.log(result);
    }
  });
}

/*
//Si quiero un sorteo para hacer en una red social
const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random()*$players.length),
    winner = $players[random];

    return `El ganador es : ${winner.textContent}`;
};

//Por ejemplo YuTube está armado con la libreria Polimer y por eso hay una etiqueta ytd-comment-thread-renderer que no es etiqueta de HTML, pero si paso solo me va a dar toda una lista, yo solo quiero el nombre del usuario que hizo un comentario, que está dentro de la etiqueta span class="style-scope ytd-comment-renderer" que está dentro de un <a> con id="author-text"
getWinnerComment("ytd-comment-thread-renderer #author-text span");

//Lo mismo se puede hacer inspeccionando el codigo en FaceBook o en Instagram, entro al post, veo los comentarios y busco que etiqueta en particular tiene el nombre de la etiqueta.
//Tamibén sirve para un blog de WordPress, siempre hay que buscar el selector indicado.
*/