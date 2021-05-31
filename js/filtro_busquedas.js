const d= document;

export default function searchFilters(input,selector) {
  d.addEventListener("keyup",(e) => {
    if(e.target.matches(input)){
      //Busco las coincidencias en el parametro selector, que en mi función es la clase "".card", VEO EL TEXTO QUE PONGO EN MI CARD FILTER Y LO COMPARA CON LO DE LAS IMAGENES
      //Si hacen click en la x del buscador, limpio el valor para que se vuelvan a mostrar todas las tarjetas
      if(e.key==="Escape") {
        e.target.value=""
      }

      d.querySelectorAll(selector).forEach((el) =>
        //Paso todo a minuscula para poder comparar, asi no me modifica ue el usuario ingrese el texto tanto en mayuscula como en minuscula, deja de ser case sensible con .toLowerCase()
        //Veo si coincide con el método .includes()
        //Uso un operador ternario en la arrow function adentro del for each
        el.textContent.toLowerCase().includes(e.target.value)
          ?el.classList.remove("filter")
          :el.classList.add("filter")
      );
    }
  });
}