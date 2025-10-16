const proyectos = document.getElementById("lista-proyectos").children;
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

// Detectar el tema del browser y aplicarlos al body
function checkSystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // Aplicar estilos de modo oscuro
    body.classList.add("dark-theme");
  } else {
    // Aplicar estilos de modo claro
    body.classList.remove("dark-theme");
  }
}
checkSystemTheme();

// Validación del formulario
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (e) {
    //evitar recarga
    e.preventDefault();
    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeResultado = document.getElementById("mensaje-resultado");
    // Validar campos vacíos
    if (!nombre || !email || !mensaje) {
      mensajeResultado.textContent = "⚠️ Por favor, completa todos los campos.";
      mensajeResultado.style.color = "red";
      return;
    }
    // Validar formato de correo electrónico
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

    // limpiar formulario
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

//weather api key
const weather_div = document.getElementById("weather");

// Funcion para obtener los datos del clima
function fetchWeather(latitude, longitude) {
  const apiKey = "e9a79f2647de0670e15c08260d446c90";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherDescription = data.weather[0].description.replace(
        /^./,
        (c) => c.toUpperCase()
      );
      const temperature = data.main.temp;
      const location = data.name;
      const wind = data.wind.speed;
      const humidity = data.main.humidity;
      const cardinalDirections = [
        "Norte",
        "Noreste",
        "Este",
        "Sureste",
        "Sur",
        "Sudeste",
        "Oeste",
        "Noroeste",
      ];

      // Convertir grados a dirección cardinal
      const windDirIndex = Math.round(data.wind.deg / 45) % 8;
      const windDirection = cardinalDirections[windDirIndex];
      const rain = data.rain ? data.rain["1h"] : 0;
      // Mostrar los datos en el div del clima
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      weather_div.innerHTML = `
      <h3><strong>Clima en ${location}:</strong></h3>
      ${weatherDescription} <img width="30px" style="position:relative; top:8px;" src="${iconUrl}" alt="${weatherDescription} icon"><br>
      Temperatura: ${temperature}°C<br>
      Viento: ${wind} m/s ${windDirection}<br>
      Humedad: ${humidity}%<br>
      Lluvia (última hora): ${rain} mm
      `;
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

// Función para obtener la ubicación del usuario
function getUserLocation() {
  // Verificar si la Geolocalización es soportada
  if (navigator.geolocation) {
    // Obtener la ubicación actual
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // Llamar a la función para obtener el clima
        fetchWeather(latitude, longitude);
      },
      (error) => {
        // Manejar errores
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("El usuario negó la solicitud de Geolocalización.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("La información de ubicación no está disponible.");
            break;
          case error.TIMEOUT:
            console.error(
              "La solicitud para obtener la ubicación del usuario expiró."
            );
            break;
          case error.UNKNOWN_ERROR:
            console.error("Ocurrió un error desconocido.");
            break;
        }
      }
    );
  } else {
    console.error("La Geolocalización no es soportada por este navegador.");
  }
}

// Agregar evento click al div del clima
weather_div.addEventListener("click", () => {
  if (weather_div.innerHTML !== "Conocer clima en mi ciudad") return;
  getUserLocation();
});

// Llamar a la función para obtener la ubicación del usuario al cargar la página
getUserLocation();
