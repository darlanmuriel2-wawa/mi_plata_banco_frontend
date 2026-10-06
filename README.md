# 🚀 Proyecto Banco Digital - "Mi Plata"
> Aplicación Frontend desarrollada para la clase de Frontend 1 (CESDE). Inspirada en la arquitectura de clases orientada a objetos (POO)  con un estilo visual futurista de neón y modo oscuro.

---

## 📋 Historias de Usuario (User Stories)

Para cumplir con los requerimientos académicos del docente, se definen las siguientes Historias de Usuario basadas en nuestro diagrama de clases UML:

### 1. HU-01: Registro de Nuevos Clientes
* **Como** usuario nuevo de la plataforma web,
* **Quiero** poder registrarme ingresando mis datos personales (Nombre, Apellido, Correo y Contraseña),
* **Para** crear una cuenta en el sistema y poder acceder a los servicios bancarios digitales de "Mi Plata".
* **Criterios de aceptación:**
  - El formulario valida que todos los campos estén llenos.
  - Se almacena el nuevo objeto de tipo `Cliente` / `Usuario` de forma segura (simulado con `localStorage`).
  - Muestra un mensaje de éxito y redirige automáticamente al formulario de inicio de sesión.

### 2. HU-02: Inicio de Sesión (Login)
* **Como** cliente registrado o administrador del banco,
* **Quiero** ingresar mis credenciales (Correo y Contraseña),
* **Para** autenticarme en el sistema y acceder a mi panel principal (Dashboard).
* **Criterios de aceptación:**
  - El sistema valida si el correo y la contraseña coinciden con los registros guardados.
  - Si los datos son correctos, otorga acceso al Dashboard personalizado.
  - Si son incorrectos, muestra una alerta visual de error.

### 3. HU-04: Consulta de Saldo y Cuentas (Dashboard)
* **Como** cliente autenticado,
* **Quiero** visualizar el saldo disponible de mis cuentas (Ahorros, Nómina, Corriente) y mis tarjetas de crédito,
* **Para** llevar el control de mis finanzas personales en tiempo real.
* **Criterios de aceptación:**
  - El dashboard muestra de forma dinámica la información del usuario conectado.
  - Se visualizan tarjetas con formato futurista para cada tipo de cuenta heredada (`CuentaAhorros`, `CuentaCorriente`, etc.).

---

## 🛠️ Estructura del Proyecto

```text
mi-plata-banco/
├── index.html          # Estructura principal de la web y vistas (Login, Registro, Dashboard)
├── css/
│   └── styles.css      # Estilos visuales con temática Neón Futurista y Glassmorphism
├── js/
│   └── app.js          # Lógica de POO, manejo de formularios, validaciones y localStorage
└── README.md           # Documentación e Historias de Usuario
```

## Realizado por:

Darlan Estiwar Muriel Ramirez

para ingresa al formulario y ver simulacion de cuentas creadas 

correo darlan@cesde.net, clave 123456

---

## 📌 Guía para subir a GitHub

Sigue estos pasos desde tu terminal (Git Bash o consola):

1. **Inicializar repositorio:**
   ```bash
   git init
   ```
2. **Agregar los archivos:**
   ```bash
   git add .
   ```
3. **Hacer commit:**
   ```bash
   git commit -m "feat: proyecto banco mi plata frontend completo con login y registro"
   ```
4. **Conectar con tu repositorio remoto en GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/darlanmuriel2-wawa/mi_plata_banco_frontend.git
   git push -u origin main
   ```
