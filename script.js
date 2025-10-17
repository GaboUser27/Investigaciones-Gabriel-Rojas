const inputBusqueda = document.getElementById("busqueda");
const botonBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");
const imagenResultado = document.getElementById("imagenResultado");

//Realiza la búsqueda y muestra el resultado

function realizarBusqueda() {
    //Toma lo que escribió el usuario y le quitamos espacios
    const texto = inputBusqueda.value.trim();

    //Valida si el campo está vacío
    if (texto === "") {
        resultado.textContent = "⚠️ Por favor escribe algo para buscar.";
        imagenResultado.style.display = "none"; //Oculta la imagen
        return;
    }

    //Mostramos el texto base
    resultado.textContent = "🔍 Resultados para: " + texto;

    //Según el valor escrito, mostramos una imagen diferente
    if (texto.toLowerCase() === "seo") {
        imagenResultado.src = "Imagenes/SEO.png";
        imagenResultado.alt = "Imagen SEO";
        imagenResultado.style.display = "block";
    } else if (texto.toLowerCase() === "dcu") {
        imagenResultado.src = "Imagenes/UsabilidadWeb.png";
        imagenResultado.alt = "Imagen DCU";
        imagenResultado.style.display = "block";
    } else if (texto.toLowerCase() === "company") {
        imagenResultado.src = "Imagenes/Logo1.png";
        imagenResultado.alt = "Imagen Company";
        imagenResultado.style.display = "block";
    } else {
        //Si no coincide con ninguna palabra clave, no mostramos imagen
        imagenResultado.style.display = "none";
    }
}

//Usuario principiante hace clic en el botón
botonBuscar.addEventListener("click", realizarBusqueda);

//Usuario avanzado presiona Enter en el teclado
inputBusqueda.addEventListener("keypress", function(event) {
    // Verificamos si la tecla presionada es "Enter"
    if (event.key === "Enter") {
        realizarBusqueda();
    }
});
