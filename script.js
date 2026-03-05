window.addEventListener("load", function () {
    alert("¡Bienvenido al portafolio de Miguel Rodriguez!");
});

const changeTextBtn = document.getElementById("changeTextBtn");
const dynamicText = document.getElementById("dynamicText");

changeTextBtn.addEventListener("click", function () {
    dynamicText.textContent = "Gracias por visitar mi portafolio. Aquí puedes ver algunos de mis proyectos desarrollados en Riwi.";
});

const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.getElementById("extraInfo");

toggleBtn.addEventListener("click", function () {
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        toggleBtn.textContent = "Mostrar menos";
    } else {
        extraInfo.style.display = "none";
        toggleBtn.textContent = "Mostrar más";
    }
});