const d = document;
//CReo la funcion responsiveTEster() que resive el id del formulario
export default function responsiveTester(form){
  const $form = d.getElementById(form);
  let tester; 
  //Por el momento la varaible test está vacia pero voy a guardar aca el window.Open de la ventana donde voy a abrir el Open Tester, para luego poder cerrarla.

  d.addEventListener("submit",(e)=>{
    if(e.target === $form) { 
      //directamente comparo el e.target con la varaible $form que va a traer lo que tenga en mi HTML en la etiqueta con id form
      e.preventDefault(); 
      //Para que no se procesa la web ya que no tengo el atributo action en mi etiqueta form
      //Ahora si voy a cargar contenido en la ventana guardada en la variable tester 
      tester = window.open(
        $form.direccion.value, //obtengo el valor que esta en el input con name="direccion"
        "tester",
        `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`); //para que el ancho y alta que completo en el form sean mi ancho y alto de la ventana emergente
    }
  });

}