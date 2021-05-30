const d = document,
  ls = localStorage;

export default function  darkTheme(btn, classDark){  
  //classDark es para los que tengan el data attribute dataDark para quitarles o ponerle y pasarlo entre dark / light
  //Necesito una variable para guardar el selector del boton
  const $themeBtn = d.querySelector(btn),
  //Necesito una lista del DOM que tengan el atributo data-dark y uso los [] dentro dle querySelectorAll para llamar por atributo
    $selectors = d.querySelectorAll("[data-dark]");
    //Al ser un querySelectorAll va a dar un NODE LIST, voy a tener que tratarlo con un FOR EACH

  //Necesito crear otras variables para cambiar el contenido del boton (luna y sol)
    let moon ="🌙",
      sun = "☀️";
      //Creo la función ligthMode para volver al modo claro
      const lightMode =()=>{
        //Vuelvo al modo claro
        $selectors.forEach(el=>el.classList.remove(classDark));
        //Le saco la clase oscura
        $themeBtn.textContent = moon;
        //Le cambio el dibujo a la luna, estableciendo la variable de localStorage
        ls.setItem("theme","light");
      };
      //Creo la función darkMode para volver al modo obscuro
      const darkMode =()=>{
        $selectors.forEach(el=>el.classList.add(classDark)); //Las agrego la clase Dark porque al tocar la luna pasa a clase dark
        $themeBtn.textContent = sun;
        //Le tengo que cambiar el dibujo de la luna por el del sol, estableciendo la variable en localStorage
        ls.setItem("theme","dark");
      };
    //Delegacion del click del boton
      d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
         if($themeBtn.textContent === moon) {
          darkMode();  //Funcion para cambiar a modo oscuro
         } else {
          lightMode();  //funcion para cambiar a modo claro
         }
        }
      });
      //Para cuando cargue mi navegador vea el local storage que se guardo de antes y en base a eso mantengo el mismo modo que ya tenía
      d.addEventListener("DOMContentLoaded", (e)=> {
        //pregunto si tengo una variable localStorage que la guardo en la variable ls, si es null le voy a asignar con .setItem() el key (theme) y value (light)
        //La primera vez que carga el documento "theme" === null entonces aplica el thema predeterminado que es light
        if(ls.getItem("theme") === null) ls.setItem("theme","light");
        //En una segunda vez, ya viene aca:  pregunta y si theme === light entonces aplica la funcion lightMode()
        if(ls.getItem("theme")==="light") lightMode();
        //Sino pregunta y si theme === dark aplica la función darkMode()
        if(ls.getItem("theme")==="dark")  darkMode();
      });
}