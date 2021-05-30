const d = document,
  w = window;

export default function scrollTopButtom(btn) { 
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    //En el caso de que el navegador sea muy viejo yno soporte el .pageYOffset que aplique el .scrollTop del documento de HTML y lo guardo en una varaible
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop; 

    if(scrollTop > 600) {
      //saco la clase hidden del boton de scroll
      $scrollBtn.classList.remove("hidden"); 
    } else {
      //agrego la clase hidden del boton de scroll
      $scrollBtn.classList.add("hidden");
    }
    console.log(w.pageYOffset, d.documentElement.scrollTop);
  });
  //Para que cuando este el boton de scroll y le haga click me suba hacia arriba
  d.addEventListener("click", (e) => {
    if(e.target.matches(btn)){
      w.scrollTo( {
        behavior: "smooth",
        top: 0,
        }
      )};
  });
}