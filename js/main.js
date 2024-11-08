// Obtener el botón
const toggleButton = document.getElementById('alternar-modo-oscuro');

// Función para actualizar el icono del botón según el modo
function updateButtonIcon() {
  toggleButton.textContent = document.body.classList.contains('modo-oscuro') ? '🌜' : '🌞';
}

// Verificar si hay una preferencia guardada en localStorage
if (localStorage.getItem('modo-oscuro') === 'enabled') {
  document.body.classList.add('modo-oscuro');
  updateButtonIcon();
}

// Alternar el modo oscuro y actualizar el icono
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
  updateButtonIcon();

  // Guardar la preferencia en localStorage
  if (document.body.classList.contains('modo-oscuro')) {
    localStorage.setItem('modo-oscuro', 'enabled');
  } else {
    localStorage.setItem('modo-oscuro', 'disabled');
  }
});