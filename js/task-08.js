
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir la recarga de la página

  const formData = new FormData(this);

  if (formData.get('email').trim() === '' || formData.get('password').trim() === '') {
    alert('Todos los espacios deben ser rellenados');
  } else {
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    console.log(formValues);
    this.reset(); // Restablecer los valores del formulario
  }
});
