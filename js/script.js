
document.getElementById("anio").textContent = new Date().getFullYear();

const botonHamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

botonHamburguesa.addEventListener("click", function() {
    menu.classList.toggle("abierto");
});

const enlacesMenu = document.querySelectorAll(".menu a");
enlacesMenu.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("abierto");
    });
});


const botonArriba = document.getElementById("botonArriba");

window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
        botonArriba.classList.add("visible");
    } else {
        botonArriba.classList.remove("visible");
    }
});


const formulario = document.getElementById("formulario");
const mensajeExito = document.getElementById("mensajeExito");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); 

    
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

   
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorMensaje").textContent = "";

    let valido = true;

   
    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "Por favor escribe tu nombre";
        valido = false;
    } else if (nombre.length < 3) {
        document.getElementById("errorNombre").textContent = "El nombre es muy corto";
        valido = false;
    }

    
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo === "") {
        document.getElementById("errorCorreo").textContent = "Por favor escribe tu correo";
        valido = false;
    } else if (!patronCorreo.test(correo)) {
        document.getElementById("errorCorreo").textContent = "El correo no es válido";
        valido = false;
    }

    
    if (mensaje === "") {
        document.getElementById("errorMensaje").textContent = "Por favor escribe un mensaje";
        valido = false;
    } else if (mensaje.length < 10) {
        document.getElementById("errorMensaje").textContent = "El mensaje debe tener al menos 10 caracteres";
        valido = false;
    }

   
    if (valido) {
        mensajeExito.classList.add("mostrar");
        formulario.reset();

       
        setTimeout(function() {
            mensajeExito.classList.remove("mostrar");
        }, 4000);
    }
});


console.log("¡Hola! Gracias por revisar mi portafolio :)");
