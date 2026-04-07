# Carrito de Dulces - React App

## Descripción
Carrito de Dulces es una aplicación web desarrollada con React y Vite que permite visualizar una galería de dulces. Incluye un layout completo con Header, Content y Footer, y navegación entre páginas usando React Router. Está diseñada para funcionar tanto en local como en producción y es fácil de desplegar en GitHub Pages.

## Características principales
- Galería de dulces con imágenes y nombres.
- Navegación entre páginas con React Router (HashRouter).
- Componentes reutilizables y organizados (Header, Content, Footer, Props).
- Listo para deploy en GitHub Pages.
- Build optimizado usando Vite.
- Diseño responsivo básico con CSS y Bootstrap.

## Interfaz gráfica
La página principal muestra un **carrito de dulces virtual** en el que cada dulce se presenta en una **tarjeta individual**. Cada tarjeta contiene:  

- **Imagen del dulce**, mostrando su apariencia colorida y atractiva.  
- **Nombre del dulce**, claramente visible debajo de la imagen.  
- **Precio del dulce**, colocado debajo del nombre para que el usuario pueda identificar el costo rápidamente.  

Las tarjetas están organizadas en filas con suficiente espacio entre ellas, sobre un fondo claro que resalta las imágenes de los productos. La tipografía es moderna y legible, y los botones o enlaces utilizan estilos de Bootstrap para mantener la consistencia. El **Header** incluye el título de la app y la navegación principal, mientras que el **Footer** proporciona información adicional. Toda la interfaz es **responsiva**, adaptándose a dispositivos móviles y escritorio.

## Arquitectura del Proyecto
myfirstApp/
├─ public/
│ └─ img/ # Imágenes de los dulces
├─ src/
│ ├─ features/layout/components/
│ │ ├─ Header.jsx
│ │ ├─ Content.jsx
│ │ ├─ Footer.jsx
│ │ └─ Props.jsx
│ ├─ App.jsx # Componente principal
│ └─ main.jsx # Punto de entrada
├─ package.json # Dependencias y scripts
├─ vite.config.js # Configuración de Vite
└─ README.md # Este archivo

## Datos importantes del Autor
Juliana Betancur  
- Desarrolladora Frontend  
- Proyecto académico SENA, 2026  
- Repositorio: [https://github.com/jbs2507/React](https://github.com/jbs2507/React)
