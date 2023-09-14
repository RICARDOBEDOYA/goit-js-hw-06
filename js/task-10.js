function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = ''; // Limpiar contenido previo

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    size += 10;
  }
}
function destroyBoxes() {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = '';
}
document.querySelector('button[data-create]').addEventListener('click', function() {
  const amount = parseInt(document.querySelector('input').value, 10);
  createBoxes(amount);
});
document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);

