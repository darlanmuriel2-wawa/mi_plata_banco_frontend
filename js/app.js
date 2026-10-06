/* LÓGICA DE PROGRAMACIÓN ORIENTADA A OBJETOS (POO) EN JAVASCRIPT */

// Clases basadas en el Diagrama UML del proyecto
class Usuario {
    constructor(idUsuario, nombre, apellido, correo, contrasena, estado = "Activo") {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contrasena = contrasena;
        this.estado = estado;
    }

    iniciarSesion() {
        return true;
    }
}

class Cliente extends Usuario {
    constructor(idUsuario, nombre, apellido, correo, contrasena, tipoPersona) {
        super(idUsuario, nombre, apellido, correo, contrasena);
        this.tipoPersona = tipoPersona;
    }

    solicitarProducto() {
        return true;
    }
}

// Inicializar base de datos simulada en localStorage si no existe
if (!localStorage.getItem('banco_usuarios')) {
    const adminDefault = new Cliente(1, "Darlan", "CESDE", "darlan@cesde.net", "123456", "Natural");
    localStorage.setItem('banco_usuarios', JSON.stringify([adminDefault]));
}

// Función para cambiar de vista de forma dinámica
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
}

// Manejo del Formulario de Registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('regNombre').value.trim();
    const apellido = document.getElementById('regApellido').value.trim();
    const correo = document.getElementById('regEmail').value.trim();
    const contrasena = document.getElementById('regPassword').value.trim();
    const tipoPersona = document.getElementById('regTipoPersona').value;

    let usuarios = JSON.parse(localStorage.getItem('banco_usuarios')) || [];

    // Validar si el correo ya existe
    const existe = usuarios.find(u => u.correo === correo);
    if (existe) {
        alert('¡El correo electrónico ya está registrado en el sistema!');
        return;
    }

    // Crear instancia de la clase Cliente
    const nuevoCliente = new Cliente(Date.now(), nombre, apellido, correo, contrasena, tipoPersona);
    
    usuarios.push(nuevoCliente);
    localStorage.setItem('banco_usuarios', JSON.stringify(usuarios));

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    document.getElementById('registerForm').reset();
    switchView('loginView');
});

// Manejo del Formulario de Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const correo = document.getElementById('loginEmail').value.trim();
    const contrasena = document.getElementById('loginPassword').value.trim();

    let usuarios = JSON.parse(localStorage.getItem('banco_usuarios')) || [];

    const usuarioEncontrado = usuarios.find(u => u.correo === correo && u.contrasena === contrasena);

    if (usuarioEncontrado) {
        // Guardar sesión activa
        localStorage.setItem('banco_sesion_activa', JSON.stringify(usuarioEncontrado));
        
        // Cargar datos en el Dashboard
        cargarDashboard(usuarioEncontrado);
        switchView('dashboardView');
    } else {
        alert('Credenciales incorrectas. Verifique su correo y contraseña.');
    }
});

// Cargar información en el Dashboard
function cargarDashboard(usuario) {
    document.getElementById('userNameDisplay').textContent = `${usuario.nombre} ${usuario.apellido}`;
    
    // Fecha actual formateada
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaHoy = new Date().toLocaleDateString('es-CO', options);
    document.getElementById('currentDateDisplay').textContent = fechaHoy;
}

// Cerrar Sesión
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('banco_sesion_activa');
    switchView('homeView');
});

// Verificar si ya hay una sesión activa al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const sesionActiva = JSON.parse(localStorage.getItem('banco_sesion_activa'));
    if (sesionActiva) {
        cargarDashboard(sesionActiva);
        switchView('dashboardView');
    }
});
