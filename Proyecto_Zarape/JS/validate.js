function iniciarSesion() {
    // Obtener los valores de usuario y contraseña
    let username = document.getElementById("txtUsername").value;
    let password = document.getElementById("txtPassword").value;
            
    // Datos de usuario válidos
    let validUser = "root";
    let validPass = "root";

    // Validación de usuario y contraseña
    if (username === validUser && password === validPass) {
        // Redirigir a otra página
        window.location.href = '../modules/moduloInicio/inicio.html'; // Ingresa hacia la pagina de inicio
    } else {
        // Mensaje de error
        alert("Usuario o contraseña inválidos. Intenta de nuevo.");
        }
}


// @Made by Diego