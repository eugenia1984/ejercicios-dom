// Me busco todos los input de tipo checkbox 
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Verifico si la tecla shift esta presionada (key down) y que esten seleccionadas las checkbox (o sea que no esten deseleccionando)
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop en cada checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Empezando a sleccionar!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));