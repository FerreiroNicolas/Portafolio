//HAMBURGUESA DE NAVEGADOR EN MOVILES

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed(".multiple-text", {
  strings: ["Trainee", "Estudiante ing. informática"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

// MODO OSCURO
// Función para cambiar entre el modo oscuro y claro

function toggleDarkMode() {
  const icon = document.querySelector('.dark-mode-icon');

  // Verifica la clase actual del icono
  if (icon.classList.contains('fa-moon')) {
      // Cambia al modo claro
      document.body.classList.remove('dark-mode');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  } else {
      // Cambia al modo oscuro
      document.body.classList.add('dark-mode');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  }
}

function toggleDarkModeHamburger() {
  const icon = document.querySelector('#dark-mode-toggle-hamburger .dark-mode-icon');

  // Verifica la clase actual del icono
  if (icon.classList.contains('fa-moon')) {
      // Cambia al modo claro
      document.body.classList.remove('dark-mode');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  } else {
      // Cambia al modo oscuro
      document.body.classList.add('dark-mode');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  }
}

// VALIDACION FORMULARIO

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#miFormulario');
  const errorDiv = document.querySelector('#error');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      const fullname = document.querySelector('#nombre').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('textarea[name="mensaje"]').value;

      if (fullname === '' || email === '' || message === '') {
          errorDiv.textContent = 'Por favor, complete todos los campos obligatorios.';
      } else {
          fetch(form.action, {
              method: form.method,
              body: new FormData(form),
              headers: {
                  'Accept': 'application/json'
              }
          })
          .then(response => response.json())
          .then(data => {
              if (data.ok) {
                  form.reset();
                  swal.fire({
                      title: 'Formulario enviado',
                      text: 'Gracias por contactarnos, te escribiremos pronto.',
                      icon: 'success'
                  });
              } else {
                  errorDiv.textContent = 'Hubo un problema al enviar el formulario. Inténtelo de nuevo más tarde.';
              }
          })
          .catch(error => {
              console.error(error);
              errorDiv.textContent = 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.';
          });
      }
  });
});
