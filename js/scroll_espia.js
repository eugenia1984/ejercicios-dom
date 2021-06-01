const d = document;

export default function scrollSpy() {
  //Quiero vigilar las secciones que voy a scrollear
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  //Creo una varaible para guardar la CALLBAK que va a recibir entradas (entries) que son los elementos que se ven en el viewport
  const cb = (entries) => {
    //console.log("entries", entries);
    entries.forEach((entry) => {
      //console.log("entry", entry);
      const id = entry.target.getAttribute("id");
      console.log(id);
      if(entry.isIntersecting) {
        //Si es verdadero le agrego la clase active y asocio la seccion con el link del menu que tiene el mismo numero de seccion
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
        classList.add("active");
      } else {
        //Si es falso le saco la clase active y asocio la seccion con el link del menu que tiene el mismo numero de seccion
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
        classList.remove("active");
      }
    });
  };

  //Creo una varaible para observar que va a ser un nuevo IntersectionObserver que va a recibir como parametro una CALLBACK
  const observer = new IntersectionObserver(cb, {
    //No declaro el root asi toma el Document
    //rootMargin: "-250px", esta no es la indicada porque hay que darle los pixeles estáticos
    threshold:[0.5,0.75],
    //Se activa cuando el elemento tiene entre un 50% y un 75% de su altura, porque al usar [] manejo rangos
  });
  //console.log("observer",observer);
  $sections.forEach((el) => observer.observe(el));
  //Va a recibir el mismo objeto que estoy recorriendo
}