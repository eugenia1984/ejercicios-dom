const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide");  //Node list que trae todos los .slider-slide

  let i = 0;  
  //Me sirve como contador para psar de slide a slide, si llego al final vuelvo
  
  d.addEventListener("click", (e) => {
      if(e.target === $prevBtn){
        e.preventDefault(); 
        //porque como tiene un #el link, voy a prevenir que al hacer click se me vaya a la parte del header
        $slides[i].classList.remove("active");
        i--;
        //Se le saca la clase que visualiza a la slide anterior

        if(i<0) {
          i = $slides.length-1;
        }

        $slides[i].classList.add("active");
        //Agrego la clase
      }

      if(e.target === $nextBtn){
        e.preventDefault(); 
        $slides[i].classList.remove("active");
        i++;
    
        if(i>=$slides.length) {
          i = 0;
        }
        $slides[i].classList.add("active");
      }
    });

}


