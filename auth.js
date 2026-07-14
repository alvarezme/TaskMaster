const URL_API = 'http://localhost:3000/api/autenticacion';

const formularioLogin = document.getElementById('formulario-login');
const formularioRegistro = document.getElementById('formulario-registro');

// Registrar Usuario
if (formularioRegistro) {
  formularioRegistro.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('reg-nombre').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const contrasena = document.getElementById('reg-contrasena').value;

    try {
      const respuesta = await fetch(`${URL_API}/registro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, contrasena })
      });

      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);

      alert('Registro completado. Ya puedes iniciar sesión.');
      formularioRegistro.reset();
    } catch (error) {
      alert(error.message);
    }
  });
}

// Iniciar Sesión
if (formularioLogin) {
  formularioLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const contrasena = document.getElementById('login-contrasena').value;

    try {
      const respuesta = await fetch(`${URL_API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, contrasena })
      });

      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);

      // Guardamos la sesión localmente
      localStorage.setItem('usuario', JSON.stringify(datos));
      window.location.href = 'tareas.html';
    } catch (error) {
      alert(error.message);
    }
  });
}