function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var passwordButton = document.querySelector('input[value="Mostrar Contraseña"]');

    if (passwordField.type === "password") {
      passwordField.type = "text";
      passwordButton.value = "Ocultar Contraseña";
    } else {
      passwordField.type = "password";
      passwordButton.value = "Mostrar Contraseña";
    }
  }

  function checkLogin() {
    var password = document.getElementById("password").value;

    // Realiza la validación aquí.

    if (password === "ElPerroR") {
      alert("Inicio de sesión exitoso");
      // Redireccionar a la página principal
      window.location.href = "menu.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }