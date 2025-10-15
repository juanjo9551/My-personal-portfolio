const proyectos = document.getElementById("proyectos").children[1].children;
Array.from(proyectos).forEach((p) => {
  p.classList.add("hidden");
});

const links = Array.from(document.querySelector(".links").children);
console.log(links);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("links")) {
        links.forEach((link, index) => {
          setTimeout(() => {
            link.classList.add("show2");
          }, index * 150 + 800);
        });
      }
      entry.target.classList.add("show2");
    } else {
      entry.target.classList.remove("show2");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
document.querySelectorAll(".hidden2").forEach((el) => observer2.observe(el));

//boton volver al inicio
const botonVolverInicio = document.getElementById("volverInicio");
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    botonVolverInicio.style.display = "block";
  } else {
    botonVolverInicio.style.display = "none";
  }
});

botonVolverInicio.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// Modo oscuro
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("change", function () {
  body.classList.toggle("dark-theme", this.checked);
});

// Validación del formulario
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar o salir de la sección

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeResultado = document.getElementById("mensaje-resultado");

    if (!nombre || !email || !mensaje) {
      mensajeResultado.textContent = "⚠️ Por favor, completa todos los campos.";
      mensajeResultado.style.color = "red";
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      mensajeResultado.textContent = "⚠️ Ingresa un correo electrónico válido.";
      mensajeResultado.style.color = "red";
      return;
    }

    // Si todo está correcto
    mensajeResultado.textContent =
      "✅ Mensaje enviado correctamente. ¡Gracias!";
    mensajeResultado.style.color = "green";

    // Mantener al usuario en la sección #contacto
    location.hash = "contacto";

    // Opcional: limpiar formulario
    this.reset();
  });

// Animaciones de referencias

document.querySelectorAll("#referencias blockquote").forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("expanded");
  });
});

//mostrar fecha actual en pie de pagina
const fechaActual = new Date();
const anioActual =
  fechaActual.getDate() +
  "/" +
  (fechaActual.getMonth() + 1) +
  "/" +
  fechaActual.getFullYear();
document.getElementById("fechaActual").textContent = anioActual;
