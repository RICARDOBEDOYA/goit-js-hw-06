 // Obtener elementos del DOM
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Añadir un escucha de evento 'input' al input
nameInput.addEventListener('input', () => {
  // Verificar si el input está vacío
  if (nameInput.value.trim() === '') {
    nameOutput.textContent = 'Anónimo';
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
