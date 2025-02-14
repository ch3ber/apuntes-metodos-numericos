---
layout: ../layouts/StaticLayout.astro
title: Acerca De
---

# Sitio Web sobre Métodos Numéricos

## Introducción

En el ámbito de la computación y la ingeniería, la resolución de ecuaciones no lineales y sistemas de ecuaciones lineales es una tarea fundamental. Diversos métodos numéricos han sido desarrollados para aproximar soluciones cuando los métodos analíticos no son viables.

Este proyecto consiste en un sitio web desarrollado en **Astro** que documenta e implementa cinco métodos numéricos esenciales:

- **Método de Bisección**
- **Método de la Secante**
- **Método del Punto Fijo**
- **Método de Newton-Raphson**
- **Método de Gauss-Jordan**

El objetivo del sitio es proporcionar a los estudiantes una herramienta interactiva donde puedan aprender y comprender estos métodos, sus fundamentos matemáticos y sus aplicaciones en diversas áreas de la ingeniería.

<br>

## Metodología

### Métodos Implementados
Los cinco métodos numéricos incluidos en el sitio son:

- **Método de Bisección:** Se basa en el teorema del valor intermedio para encontrar raíces de ecuaciones en un intervalo dado.
- **Método de la Secante:** Similar a Newton-Raphson, pero sin necesidad de calcular derivadas.
- **Método del Punto Fijo:** Reformula el problema en la forma \(x = g(x)\) y utiliza iteraciones sucesivas.
- **Método de Newton-Raphson:** Utiliza la derivada de la función para mejorar iterativamente las aproximaciones de la raíz.
- **Método de Gauss-Jordan:** Se emplea para resolver sistemas de ecuaciones lineales mediante la reducción de matrices.

### Implementación en el Sitio Web
La información sobre los métodos está almacenada en una API que responde a las solicitudes de la aplicación Astro, permitiendo cargar los datos de manera dinámica.

## Tecnologías Utilizadas

### Estructura del Proyecto en Astro
La estructura del código del sitio es la siguiente:

```
./src
├── assets
├── components
│   ├── Footer.astro
│   └── Nav.astro
├── config
├── layouts
├── pages
│   ├── api
│   ├── index.astro
│   ├── parciales
│   │   └── [parcialId]
│   │       └── [metodoId].astro
│   └── parciales.astro
├── schemas
├── styles
└── utils
```

### Integración de Formatos Matemáticos
Para la representación de fórmulas matemáticas en LaTeX, se utilizaron los siguientes scripts:
```html
<script async src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script
  async
  id="MathJax-script"
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
></script>
```

### API y Carga Dinámica de Datos
Se desarrolló una API en **Node.js** que proporciona los datos necesarios para la aplicación Astro. Esto permite actualizar la información sin modificar el código de la interfaz.

## Ejecución y Despliegue

### Instalación y Ejecución Local
El sitio web puede instalarse y ejecutarse localmente siguiendo estos pasos:
1. Clonar el repositorio desde GitHub.
2. Instalar dependencias con **pnpm**.
3. Ejecutar el servidor de desarrollo con **pnpm dev**.

### Despliegue en Vercel
El sitio web está desplegado en **Vercel** con soporte para **SSR (Server-Side Rendering)**. Gracias a la integración **CI/CD**, cualquier commit en la rama `main` genera un nuevo despliegue automáticamente.

## Resultados y Ejemplos

### Capturas de Pantalla
![UI Home](/img/docs/ui-home.png)

### Interacción del Usuario
El sitio ofrece una interfaz simple e intuitiva, con optimización **SEO** para mejorar su alcance. Los usuarios pueden navegar por los distintos métodos y parciales de manera sencilla.

## Conclusiones y Futuras Mejoras

### Logros Alcanzados
El sitio web logra presentar de manera clara y estructurada los métodos numéricos, facilitando el aprendizaje a los estudiantes.

### Futuras Mejoras
Actualmente, solo está disponible el contenido del **Parcial 1**. En el futuro, se agregará información correspondiente a los siguientes parciales y se podrían incluir ejemplos interactivos y simulaciones.

## Referencias
- Documentación oficial de **Astro**: [https://astro.build](https://astro.build)
- MathJax para renderizado de fórmulas matemáticas: [https://www.mathjax.org](https://www.mathjax.org)
