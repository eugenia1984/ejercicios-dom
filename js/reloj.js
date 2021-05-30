const d = document;
//funcion para activar el reloj digital
export function digitalClock(clock,btnPlay,btnStop){
  let clockTempo; //en esta variable voy a almacenar el setInterval
  d.addEventListener("click", (e) => {  //delego el evento al click del boton
    if(e.target.matches(btnPlay)){  //si el evento coincide con el parametro de btnPaly
      clockTempo = setInterval(()=> {  //guardo el setInterval en la variable clockTempo, que al presionar el boton de play 
        let clockHour = new Date().toLocaleTimeString();  //uso .tolocateLocaleTimeString() para mostrar el horario en horas, minutos y segundos en el horario local
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      //Deshabilito el boton una vez que está activo para que no vuelva a hacer click, queda asi hasta que lo detenga
      e.target.disabled = true; //deshabilito el boton mientras esté el reloj activo
    }

    if(e.target.matches(btnStop)) { //si el evento coincide con le parametro de btnStop
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null; //hago que dasaparezca el reloj
      d.querySelector(BtnPlay).disabled = false;  //pongo en falso la propiedad desable del boton de Play para que se pueda volver a hacer click
    }
  });
}
//funcion para activar la alarma
export function alarm(sound,btnPlay,btnStop){ //los parametros son el sonido, el boton que lo activa y el boton que lo detiene
  let alarmTempo;
  //necesito crear una etiqueta de html de tipo audio para que se escuche el sonido, la creo y guardo en la variable $alarm, no necesito que esta etiqueta se vea, pero si que esté para poder escuchar la alarma
  const $alarm = d.createElement("audio");
  //debo acceder a la propiedad source
  $alarm.src= sound;

  d.addEventListener("click", e=> { //hacemos la delegación de eventos al evento click
    if(e.target.matches(btnPlay)){ //si lo que trae la variable coincide con el boton de play
      alarmTempo = setTimeout(()=>{
        $alarm.play(); //para darle play la sonido
      },2000);  // a los dos segundos se va a escuchar el sonido de la alarma
      //Para que solo se reproduzca una sola vez vamos a deshabilitar el boton de iniciar alarma mientras le haya hecho click una vez anteriormente y hasta que la detenga
      e.target.disabled = true;
    }

    if(e.target.matches(btnStop)){ //si lo que trae la variable coincide con el boton de stop
      clearTimeout(alarmTempo);
      $alarm.pause();  //paused() para pausar el sonido 
      $alarm.currentTime = 0; //para que funcione como el boton de stop que ademas de detener vuelve al inicio.
      d.querySelector(btnPlay).disabled = false; //activamos el boton de activar alarma
    }

  })

}