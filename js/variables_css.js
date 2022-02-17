const d = document;
const inputs = d.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';  // para agregar el px
  // el name es el nombre que le di a las variables de css en :root{} y también los tengo como name en el input
  d.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));