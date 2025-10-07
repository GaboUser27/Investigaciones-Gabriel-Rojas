// ====================================================================
// PRINCIPIO 7 DE NIELSEN: Flexibilidad y eficiencia de uso
// ====================================================================
// Ahora, además de mostrar un texto de búsqueda, cargaremos una imagen
// específica si el usuario busca "SEO", "DCU" o "Company".
// ====================================================================

// Obtenemos los elementos del HTML
const inputBusqueda = document.getElementById("busqueda");
const botonBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");
const imagenResultado = document.getElementById("imagenResultado");

// ------------------------------------------------------
// FUNCIÓN: realiza la búsqueda y muestra el resultado
// ------------------------------------------------------
function realizarBusqueda() {
    // Tomamos lo que escribió el usuario y lo normalizamos (quitar espacios extras)
    const texto = inputBusqueda.value.trim();

    // Validamos si el campo está vacío
    if (texto === "") {
        resultado.textContent = "⚠️ Por favor escribe algo para buscar.";
        imagenResultado.style.display = "none"; // ocultamos la imagen
        return;
    }

    // Mostramos el texto base
    resultado.textContent = "🔍 Resultados para: " + texto;

    // Según el valor escrito, mostramos una imagen diferente
    if (texto.toLowerCase() === "seo") {
        imagenResultado.src = "imagenes/seo.png"; // aquí pones la ruta a tu imagen SEO
        imagenResultado.alt = "Imagen SEO";
        imagenResultado.style.display = "block";
    } else if (texto.toLowerCase() === "dcu") {
        imagenResultado.src = "imagenes/usabilidadweb.png"; // aquí pones la ruta a tu imagen DCU
        imagenResultado.alt = "Imagen DCU";
        imagenResultado.style.display = "block";
    } else if (texto.toLowerCase() === "company") {
        imagenResultado.src = "imagenes/logo1.png"; // aquí pones la ruta a tu imagen Company
        imagenResultado.alt = "Imagen Company";
        imagenResultado.style.display = "block";
    } else {
        // Si no coincide con ninguna palabra clave, no mostramos imagen
        imagenResultado.style.display = "none";
    }
}

// ------------------------------------------------------
// Opción 1: Usuario principiante hace clic en el botón
// ------------------------------------------------------
botonBuscar.addEventListener("click", realizarBusqueda);

// ------------------------------------------------------
// Opción 2: Usuario avanzado presiona Enter en el teclado
// ------------------------------------------------------
inputBusqueda.addEventListener("keypress", function(event) {
    // Verificamos si la tecla presionada es "Enter"
    if (event.key === "Enter") {
        realizarBusqueda();
    }
});
