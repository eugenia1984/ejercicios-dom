const d = document,
  n = navigator;  //Para tener el objeto navivator

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true, 
      //para que el dispositivo tome la mejor lectura posible
      timeout: 5000,
      //El tiempo que espera en tomar la lectura
      maximumAge:0
      //Para que no se guarde en cache la lectura
    };
  //En caso de tener exitosamente la posiocion guardo en la variable success la posicion
  const success =  (position) => {
    let coords = position.coords;
    $id.innerHTML = `
    <p> Tu posicion actual es: 
    <ul>
      <li> Latitud : <strong>${coords.latitude} </strong> </li>
      <li> Longitud : <strong> ${coords.longitude} </strong> </li>
      <li>Precisión : <strong> ${coords.accuracy} </strong> metros </li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener"> Ver en Google Maps </a>
    </p>
    `
    console.log(position);
  };
  //En caso de no tener la posicion lo guardo en la  variable error y lo muestro en mi HTML 
  const error = (err) =>{
    $id.innerHTML=`<p> <mark>Error ${err.code} : ${err.message} </mark></p>`
    console.log(`Error ${err.code} : ${err.message}`);
  };
    //.getCurrentPosition() para obtener la posicion actual, su primer parámetro es la función sucess que guarda la posición, el segundo argumento es la función que guarda el error y el tercer parámetro son las opciones del objeto options
    //.getCurrentPosition es similar a un addEventListener para ir todo el timepo accediendo a la posicion con el método watchPosition()
    n.geolocation.getCurrentPosition(success, error,options);
};