

//PROGRAMA AUDIOS
document.addEventListener('DOMContentLoaded', function () {
    const audioElement = document.getElementById('audioElement');
    const textElements = document.querySelectorAll('.reproducirAudio');

    textElements.forEach(function (element) {
        element.addEventListener('click', function () {
            const audioSrc = this.getAttribute('data-audio');
            audioElement.src = audioSrc;
            audioElement.play();
        });
    });
});


//MODAL FOTOS
// Obtener elementos del DOM
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var buttons = document.getElementsByClassName("modal-button");
var closeBtn = document.getElementsByClassName("close")[0];

// Agregar un evento de clic a cada botón
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var imgSrc = this.getAttribute("data-img"); // Obtener la URL de la imagen del atributo personalizado
        modalImage.src = imgSrc; // Establecer la fuente de la imagen en el modal
        modal.style.display = "block"; // Mostrar el modal
    });
}

// Agregar un evento de clic al botón de cierre
closeBtn.addEventListener("click", function() {
    modal.style.display = "none"; // Ocultar el modal al hacer clic en la "X"
});

// Cerrar el modal haciendo clic en cualquier parte fuera del modal
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
