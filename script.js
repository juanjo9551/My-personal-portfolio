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

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("change", function () {
  body.classList.toggle("dark-theme", this.checked);
});
