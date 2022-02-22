// Para seleccionar todos los paneles
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Para que se expanda y contraiga el panel al hacer click
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// Para ver la frase completa cuando realice la transicion
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));