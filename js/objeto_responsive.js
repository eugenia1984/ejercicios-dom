const d = document,
  w = window;
//Creo la funcion para generar el contenido multmedia y recibe de parametros el id, una MediaQuerie (mq) , el contenido del movil (mobilContent) y el contenido en version desktop (desktopContent)
export default function responsiveMedia(id,mq,mobileContent,desktopContent) {
  //Creo la variable breakpoint que va a guardar la media querie
  let breakpoint = w.matchMedia(mq);
  //Creo la funcion expresada responsive() que recibe el evento (e) de la Media Querie
  const responsive = (e) => {
    if(e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}  