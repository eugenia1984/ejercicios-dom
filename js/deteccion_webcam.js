const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);
  //Hago la validacion para comprobar que la funcion que utiliza el objeto Media Devices y el método getUserMedia exista en el navegador en que estamos consultando
  if(n.mediaDevices.getUserMedia) {
    //es una promesa de la programacion asincrona, por lo que puedo ejecutar el método .then() y si hay un error lo puedo capturar en el método catch
    n.mediaDevices
    .getUserMedia({video:true,audio:true})
    .then(stream=>{
      console.log(stream);
      //la promesa me devuelve el STREM que llega como Objeto entonces en vez de acceder al atributo source del video, lo mando como objeto
      $video.srcObject= stream;
      //Debo ejecutar el metodo play de la etiqueta video
      $video.play();
    })
    .catch((err)=>{
      //Mensaje para cuando no se da permiso a la cámara web
      $video.insertAdjacentHTML(
        "beforebegin",
        `<p> <mark> Sucedió el siguiente error :  ${err} </mark> </p>`);
      console.log(`Sucedio el siguiente error ${err}`);
    }) 
  }

}