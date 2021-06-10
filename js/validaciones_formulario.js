const d = document;

export default function contactFormValidations(){
  //Capturo el formulario
  const $form = d.querySelector(".contact-form"),
  //Capturo los input que tengan de atributo required
    $inputs = d.querySelectorAll(".contact-form [required]");
  //console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    //Le doy un id al span creado justo abajo del input
      $span.id = input.name;
      //Le creo el texto al span dinamicamente en la propiedad text content lo pongo lo que viene en el atributo title del input
      $span.textContent = input.title;
      //Le agrego la clase contact-form-error y none
      $span.classList.add("contact-form-error","none");
      //Para insertarlo como hermano posterior del input
      input.insertAdjacentElement("afterend",$span);
  });
  //Voy a delegar eventos y hacer que la validacion se vaya haciendo mientras se complete el formulario, no la final al enviar todo. Uso keyUp asi cuando dejo de ingresar datos por teclado lo valida
  d.addEventListener("keyup",(e) => {
    if(e.target.matches(".contact-form [required]")) {
      //Para no estoy dele escribir e.target
      let $input = e.target,  
      //como textarea viene null y use || voy a usar el data-pattern que me cree para usar la expresion regular o sino uso el data-attribute que está en el dataset
        pattern = $input.pattern || $input.dataset.pattern;  
      if(pattern && $input.value!=="") {
        //Declaro la variable regex para guardar la expresion regular
        let regex = new RegExp(pattern);
        //Si el valor del input no cumple con la expresion regular es la parte verdadera
        return !regex.exec($input.value)
          ?d.getElementById($input.name).classList.add("is-active") //Agarro el span que creo dinamicamente y le agrego la clase is-active
          
          :d.getElementById($input.name).classList.remove("is-active"); //Sino saco la clase is-active
      } 

      if(!pattern) {
        return $input.value===""
        //Agarro el span que creo dinamicamente y le agrego la clase is-active
          ?d.getElementById($input.name).classList.add("is-active")
          //Sino saco la clase is-active
          :d.getElementById($input.name).classList.remove("is-active");
      }

    }
  });

  d.addEventListener("submit", (e) => {
    //Prevengo la accion x default del formulario que es enviar datos, para que no se autoprocese
    //e.preventDefault();
    alert("Enviando formulario");
    //Creo variable que almacene a loader y a la respuesta
    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none"); 
    //Simula la petición de AJAX con los SetTimeOut
    setTimeout(()=>{
      $loader.classList.add("none"); 
      $response.classList.remove("none"); 
      $form.reset();
      //Anido otro set time out para ocultar el mensaje de respuesta
      setTimeout(()=>$response.classList.add("none"),3000);
    },3000);
  });
}  