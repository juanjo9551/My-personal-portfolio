# Mi Portafolio personal

Soy Juan José Fernandez, estudiante de Licenciatura en Ciencias de la Computación, y este repositorio contiene mi portafolio personal de estilo one-page, desarrollado como sitio web estático para presentar mi identidad profesional, proyectos, referencias y datos de contacto.

## Descripción general

La web está diseñada como una landing page moderna y visualmente atractiva, con una estructura dividida en secciones:

- Inicio
- Sobre mí
- Proyectos
- Contacto
- Referencias

Incluye navegación fija, modo oscuro, animaciones al hacer scroll, cards de proyectos, formulario de contacto con validación y un widget de clima.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- Fetch API
- OpenWeatherMap (integración de clima)

## Estructura del proyecto

```text
programacion-web portfolio/
├── README.md
└── Programacion-Web/
    ├── assets/
    ├── fondo1.jpeg
    ├── fotopersonal.jpg
    ├── index.html
    ├── script.js
    ├── scrollAnimations.css
    └── styles.css
```

## Características principales

- Diseño responsive para distintos tamaños de pantalla.
- Navegación con menú adaptable en dispositivos pequeños.
- Modo oscuro/claro con toggle visual.
- Animaciones de entrada con Intersection Observer.
- Sección de proyectos con imágenes y descripciones.
- Formulario de contacto con validación de nombre, correo y mensaje.
- Sección de referencias con bloques de testimonios.
- Widget de clima con búsqueda por ciudad y geolocalización.

## Cómo ejecutar el proyecto

Como es un sitio estático, no requiere compilación ni dependencias externas.

### Opción 1: abrir directamente en el navegador

Abre el archivo:

```text
Programacion-Web/index.html
```

### Opción 2: servirlo localmente

Desde la raíz del repositorio:

```bash
cd Programacion-Web
python -m http.server 8000
```

Luego abre en el navegador:

```text
http://localhost:8000
```

## Nota importante sobre el clima

La lógica del clima en `script.js` usa una clave de API y está preparada para consumir servicios externos. En un proyecto puramente frontend, la clave no debería exponerse directamente en el cliente; lo recomendable sería mover esa lógica a un backend o a una función serverless segura.

## Archivos relevantes

- `Programacion-Web/index.html`: estructura principal del sitio.
- `Programacion-Web/styles.css`: estilos visuales y layout.
- `Programacion-Web/scrollAnimations.css`: animaciones de entrada y salida.
- `Programacion-Web/script.js`: interacciones, formulario, clima y comportamiento dinámico.

## Personalización

La web está lista para personalizarse con:

- nombre y descripción profesional
- enlaces a redes sociales
- proyectos y enlaces de demostración
- referencias y testimonios
- imagenes de perfil y banners

## Estado del proyecto

Proyecto personal en desarrollo, orientado a presentar portfolio profesional y trabajos académicos/proyectos personales.

## Licencia

Este proyecto no especifica una licencia pública. Si vas a reutilizarlo, consulta antes con el autor para definir el uso permitido.
