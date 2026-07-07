# ACTIVIDAD 4 - Portafolio Personal

HECHO POR: Haniel Eliud Perez Cruz

Portafolio personal de una sola página hecho con HTML, CSS y Bootstrap 5, para mostrar mis datos, mis habilidades y los proyectos que he ido haciendo en la materia.

## Descripción del proyecto

**Framework usado:** Bootstrap 5 (vía CDN), sin mezclarlo con Tailwind.

**Plantilla base:** [iPortfolio](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/) de BootstrapMade. Es una plantilla gratuita de una sola página pensada para portafolios personales/CV, con diseño limpio y minimalista. Tomé su estructura de secciones como base y la reconstruí con mis propios componentes de Bootstrap 5 y mi propio CSS, en vez de usar directamente sus archivos originales.

**Secciones del portafolio:**

- **Inicio** - Encabezado principal con mi nombre, el rol que estoy estudiando, mi foto y dos botones de acceso rápido a "Proyectos" y "Contacto".
- **Sobre mí** - Breve descripción de quién soy, qué estoy aprendiendo actualmente y hacia dónde quiero enfocar mi carrera.
- **Habilidades** - Tarjetas con las tecnologías que manejo o estoy aprendiendo: HTML, JavaScript, GitHub, Java y Bootstrap.
- **Proyectos** - Tarjetas con los tres proyectos que he desarrollado en la materia: `utileria.js`, `componente.js` y la serie de ejercicios de Programación Web.
- **Contacto** - Mi correo, teléfono y espacio para mi usuario de GitHub.

## Proceso de creación

1. Elegí **iPortfolio** de BootstrapMade como referencia porque su estructura (inicio, sobre mí, skills, proyectos, contacto) ya encajaba con lo que pedía la actividad, y su estilo claro/minimalista era el que quería para mi portafolio.
2. En vez de descargar los archivos originales de la plantilla, armé el HTML desde cero usando los componentes de Bootstrap 5 (navbar, cards, grid, botones) siguiendo esa misma estructura de secciones.
3. Agregué mi propio archivo `portafolio.css` para personalizar detalles que Bootstrap no trae por defecto: la foto de perfil circular, el subrayado debajo de los títulos de sección, el fondo gris claro alternado entre secciones y el botón flotante de "subir arriba".
4. Agregué mi propio archivo `portafolio.js` para que el menú resalte automáticamente la sección en la que estás mientras haces scroll, y para mostrar/ocultar el botón de subir arriba.
5. Rellené el contenido con mis datos reales: mi foto de perfil, mi nombre completo, las tecnologías que estoy aprendiendo, y los tres proyectos reales que hice antes en la materia (`utileria.js`, `componente.js` y los ejercicios básicos de HTML/CSS/JS).
6. Probé el portafolio corriendo Apache desde XAMPP en `localhost` antes de subirlo a GitHub Pages, para revisar que todo cargara bien (imágenes, iconos, CSS y JS).

## Estructura

```
/portafolio
├── README.md
├── index.html
├── css/
│   └── portafolio.css
├── js/
│   └── portafolio.js
└── img/
    └── perfil.jpg
```


## Capturas de pantalla



## Autor

Haniel Eliud Perez Cruz - 2026
