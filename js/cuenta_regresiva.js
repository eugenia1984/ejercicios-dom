const d = document;

export default function countdown(id,limitDate,finalMessage) {
  const $countdown = d.getElementById(id), //me creo la variable para obtener el ID del DOM
    countdownDate = new Date(limitDate).getTime(); //uso getTime para pasarlo a milisegundos

  //Trabajo con un setInterval para que la cuenta regresiva se esté actualizando
  let countdownTempo = setInterval(()=>{
    //creo la variable new para detectar la fecha actual
    let now = new Date().getTime() ,
    //Necesito un tiempo limite para poder hacer los calculos entre la fecha actual y la del countdown
      limitTime = countdownDate - now,
      days = Math.floor(limitTime/(1000 * 60 * 60 * 24)), //uso el residuo de los dias para pasarlo a horas y lo redondeo con un Math.floor()
      hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2), 
      //Agrego el "0" para cuando tenga horas de un solo digito tenga el 0 adelante enotnces ala concatenación del string 0 y el resultado de Math.floor() le aplico .slice(-2) para que me aparezca el 0 entre las horas del 0 al 9
      //Lo divido por el factor para obtener los minutos y lo redondeo con un Math.floor()
      minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60 ))).slice(-2),
      //reutilizo la cuenta anterior pero le saco el *20 y el *60
      seconds = ("0" + Math.floor(limitTime % (1000 * 60 ) / (1000 ))).slice(-2);

      //El mensaje que va a ir en el countdown
      $countdown.innerHTML = `<h4> Faltan : ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos </h4> <h4> Para fin de año </h4> `;
      
      //console.log(countdownDate, now, limitTime);

      if (limitTime < 0) {  
        //Para cuando la cuenta regresiva llegue justo a la fecha límite limpio el countTempo
        clearInterval(countdownTempo);
        //Y muestro un mensaje
        $countdown.innerHTML = `<h3> ${finalMessage} </h3> `;
      }
  }, 1000); //se actualiza cada segundo
}