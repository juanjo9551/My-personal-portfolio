const proyectos = document.getElementById("proyectos").children[1].children;
Array.from(proyectos).forEach((p) => {
  p.classList.add("hidden");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

const botonVolverInicio = document.getElementById("volverInicio");
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    console.log("hola");
    botonVolverInicio.style.display = "block";
  } else {
    botonVolverInicio.style.display = "none";
  }
});

botonVolverInicio.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
