const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Obtener la lista ul#ingredients
const ulIngredients = document.getElementById("ingredients");

// Iterar sobre el array de ingredientes
ingredients.forEach(ingredient => {
  // Crear un elemento li
  const liElement = document.createElement("li");

  // Añadir el nombre del ingrediente como contenido de texto
  liElement.textContent = ingredient;

  // Añadir la clase "item" al elemento
  liElement.classList.add("item");

  // Insertar el elemento li en la lista ul#ingredients
  ulIngredients.appendChild(liElement);
});
