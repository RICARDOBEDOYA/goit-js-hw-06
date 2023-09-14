// Seleccionar la lista de categorías
const categoriesList = document.getElementById('categories');

// Contar y mostrar el número de categorías
const categorias = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categorias.length}`);

// Iterar sobre cada categoría y encontrar título y número de artículos
categorias.forEach(categoria => {
  const titulo = categoria.querySelector('h2').textContent;
  const numArticulos = categoria.querySelectorAll('ul li').length;
  console.log(`Category: ${titulo}`);
  console.log(`Elements: ${numArticulos}`);
});






