import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import {moveBall,shortcuts} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButtom from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e)=> {  //todo se ejecuta cuando se termina de cargar todo el Document Object Model de mi HTML
  hamburguerMenu(".panel-btn",".panel",".menu a");
  //Funciones de la seccion 1 el lejor y la alarma
  digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm('assets/alarma.mp3','#activar-alarma','#desactivar-alarma');
  //Funcion para la seccion3 Cuenta Regresiva
  countdown(
    'countdown',
    'Dec 31, 2021 23:59:59',
    'Feliz año nuevo!'
  );
  //Funcion para el boton de la flecha para el scrolll
  scrollTopButtom(".scroll-top-btn");
  //Las funciones para la seccion 4 Responsive con JavaScript
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6NTM8gVauY0" target="_blank">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6NTM8gVauY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/zvVNRAoKCyp74eXX9" target="_blank"> Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210545.31984262457!2d-58.65872678359373!3d-34.45797009999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb02801733071%3A0xb399f4f5f4f9315e!2sVilla%20Ocampo!5e0!3m2!1ses-419!2sar!4v1622336144570!5m2!1ses-419!2sar" width="500" height="400" style="border:0; border-radius: 7px; margin-top:15px;" allowfullscreen="" loading="lazy"></iframe>`
    );
    //La funcion para la seccion 5 de Responsive Tester
    responsiveTester("responsive-tester");
    //La función de la seccion 6 de Deteccion de Dispositivos - User Tester
    userDeviceInfo("user-device");
    //La funcion de la seccion 8 para detectar la webcam
    webCam("webcam");
    //La funcion de la seccion 9 de geolocalizacion
    getGeolocation("geolocation");
    //La funcion de la seccion 10 del Filtro de busqueda
    searchFilters(".card-filter",".card");
    //La funcion de la seccion 11 del Sorteo
    draw("#winner-btn",".player");
    //La funcion de la seccion 12 de los sliders
    slider();
});

d.addEventListener("keydown", (e)=>{
  //Funcion de la seccion 2 Eventos del teclado
  shortcuts(e);
  moveBall(e,".ball",".stage");
});
//Tengo que invocar a la funcion darkTheme() por fuera de mi .addEventListener porque en el tengo el DOMContentLoaded y en mi funcion dakrTheme tambien tengo DOMContentLoaded
darkTheme(".dark-theme-btn","dark-mode");
//Invoco a la funcion de la seccion 7
networkStatus();
