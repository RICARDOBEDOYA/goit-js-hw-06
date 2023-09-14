 // Paso 1: Crear la variable counterValue e inicializarla con 0
let counterValue = 0;

// Paso 2: Obtener los elementos del DOM
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterElement = document.getElementById('value');

// Paso 3: Añadir escuchas de clic a los botones
decrementButton.addEventListener('click', () => {
  counterValue--;
  counterElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  counterElement.textContent = counterValue;
});
