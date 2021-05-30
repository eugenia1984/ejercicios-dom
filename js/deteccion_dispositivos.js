const d = document,
  n = navigator,
  ua= n.userAgent;

export default function userDiviceInfo(id){
  const $id = d.getElementById(id),
  //Objeto isMobile con cuatro propiedades, las tres primeras están declaradas en una Arrow Function y any está declarada en una funcion anónima (porque hace referencia a las demás propiedades del objeto, usando .this() )
  //En cada funcion comparo con .match() con uua expresión regular para ver si la cadena del navigator User Agent tiene cierta palabra, utilizo /i para que no tome en cuenta mayusculas y minusculas (para que no sea case sensitive). El método ANY está para cuando no quiero separar acorde al dispositivo en que se conecta
    isMobile ={
      android:()=>ua.match(/android/i),
      ios:()=>ua.match(/iphone|ipad|ipod/i),
      windows:()=>ua.match(/windows phone/i),
      any:function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    //El objeto isDesktop tiene tres métodos declarados en Arrow Function que comparan si el Navigator User Agent coinciden (.match()) con una determinada expresión regular para ver que sistema operativo están usando, y tengo un cuarto método (any) que es para los tres métodos mencionados anteriormente (por eso utilizo el opèrador lógico OR, con que tenga uno de los tres será True)
    isDesktop = {
      linux:()=>ua.match(/linux/i),
      mac:()=>ua.match(/mac os/i),
      windows:()=>ua.match(/windows nt/i),
      any: function() {
        return this.linux() || this.mac() || this.windows();
      },
    },
    //Tengo el objeto isBrowser que detecta de que navegador me estoy conectando
    isBrowser = {
      chrome:()=>ua.match(/chrome/i),
      safari:()=>ua.match(/safari/i),
      firefox:()=>ua.match(/firefox/i),
      opera:()=>ua.match(/opera|opera min/i),
      ie:()=>ua.match(/msie|iemobile/i),
      edge:()=>ua.match(/edge/i),
      any: function () {
        return (
          this.ie()||
          this.edge()||
          this.chrome()||
          this.safari()||
          this.firefox()||
          this.opera()
        );
      },
    
    };
    //Me va a imprimir el User Agent en el primer list item, la plataforma en el segundo list item (vy a ver que si es verdad que me conecto desde alguno de los dispositivos entonces que me imprima el sistema operativo que encontró que es Mobil y caso contrrario tiene que ser el sistema operativo de isDesktop)
    $id.innerHTML = `
    <ul>
      <li> User Agent : <strong> ${ua} </strong> </li>
      <li> Plataforma : <strong> ${isMobile.any()?isMobile.any():isDesktop.any()} </strong> </li>
      <li>Navegador: <strong>${isBrowser.any()} </strong> </li>
    </ul>
    `;

    /*Ejemplo de Contenido Exclusivo*/
    if(isBrowser.chrome()){
      $id.innerHTML += `<p> <mark> Este contenido solo se ve en: Chome.</mark>  </p>`;
    }

    if(isBrowser.firefox()){
      $id.innerHTML += `<p> <mark>   Este contenido solo se ve en: FireFox.</mark> </p>`;
    }

    if(isDesktop.linux()){
      $id.innerHTML += `<p> <mark>  Descarga nuestro Software para Linux. </mark></p>`;
    }

    if(isDesktop.mac()){
      $id.innerHTML += `<p><mark>  Descarga nuestro Software para Mac OS. </mark> </p>`;
    }
    if(isDesktop.windows()){
      $id.innerHTML += `<p><mark>  Descarga nuestro Software para Windows. </mark> </p>`;
    }
    /*Ejemplo de redireccion automática*/
    /*
    if(isMobile.android()) {
      window.location.href= "https://eugenia1984.github.io/Portafolio/";
    }
    */
}