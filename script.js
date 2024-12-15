// Cambiar entre ventanas
function mostrarVentana(id) {
    const secciones = document.querySelectorAll('section');
    secciones.forEach((seccion) => seccion.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Registro de animales
const animales = JSON.parse(localStorage.getItem("animales")) || [];
document.getElementById("registro-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevoAnimal = {
        id: document.getElementById("animal-id").value,
        nombre: document.getElementById("nombre").value,
        raza: document.getElementById("raza").value,
        fechaNacimiento: document.getElementById("fecha-nacimiento").value,
        hijaDe: document.getElementById("hija-de").value,
        origen: document.getElementById("origen").value,
        color: document.getElementById("color").value,
    };
    animales.push(nuevoAnimal);
    localStorage.setItem("animales", JSON.stringify(animales));
    alert("Animal registrado correctamente!");
    mostrarVentana("apartados");
});
