# Grupo 3 - Proyecto SPA en React (Evolución del TP1)

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.9-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://frontend-tp-02.vercel.app/)

## 📖 Descripción del Proyecto

Este repositorio documenta la evolución de nuestro proyecto del TP1. Hemos migrado el sitio web estático original (HTML, CSS, JS) a una moderna **Single Page Application (SPA)** construida con **React 19** y **Vite 7**.

La nueva aplicación conserva la esencia del proyecto original —presentar a nuestro equipo y documentar el proceso— pero lo reconstruye sobre una arquitectura de componentes, ofreciendo una experiencia de usuario más fluida, dinámica y moderna.

## 🚀 Demo en Vivo

➡️ **[Ver Aplicación Desplegada en Vercel](https://frontend-tp-02.vercel.app/)**

## 🔄 Evolución Tecnológica: TP1 → TP2

El salto tecnológico del TP1 al TP2 ha sido el núcleo de este trabajo.

| Característica | ⏪ Antes (TP1) | ⏩ Ahora (TP2) |
| :--- | :--- | :--- |
| **Arquitectura** | Sitio Multi-Página (MPA) | **Single Page Application (SPA)** |
| **Librería Principal** | JavaScript "vanilla" | **React 19** |
| **Build Tool** | N/A | **Vite 7** |
| **Navegación** | Múltiples archivos `.html` | **React Router DOM 7** |
| **Estilos** | CSS Global con BEM | **CSS-in-JS** (Estilos por componente) |
| **Manejo de Datos** | Datos embebidos en HTML | **JSON local + API externa (TVMaze)** |
| **Developer Experience** | Recarga manual | **HMR instantáneo** |

## ✨ Características Principales

- 🔄 **Navegación SPA:** Transiciones instantáneas entre secciones sin recargar la página
- 🎭 **Galería desde JSON:** Sección de "Anti-Héroes" con 20+ objetos, búsqueda y filtrado en tiempo real
- 📺 **Consumo de API:** Integración con TVMaze API para mostrar series con paginación del lado del cliente
- 👤 **Perfiles Dinámicos:** Rutas paramétricas (`/profile/:id`) con diseños 100% personalizados por cada miembro
- 🎨 **Componentes Reutilizables:** Arquitectura modular con separación de responsabilidades
- 📱 **Responsive Design:** 3 breakpoints (móvil, tablet, desktop) con custom hooks
- 📊 **Diagramas de Arquitectura:** Árbol de componentes y estructura de carpetas visualizados
- 📔 **Bitácora Completa:** Documentación detallada del proceso de desarrollo en equipo

## 📁 Estructura del Proyecto

```
frontend-tp-02/
├── public/                   # Archivos estáticos
│   ├── logo.ico              # Favicon
│   ├── diagrams/             # Diagramas de arquitectura (PNG)
│   └── [german|juan|manuel|nicolas]/  # Assets por miembro
│
├── src/
│   ├── components/           # Componentes UI organizados por funcionalidad
│   │   ├── api-data/         # Componentes para consumo de API
│   │   ├── antiheroes/       # Galería desde JSON local
│   │   ├── bitacora/         # Documentación del proceso
│   │   ├── diagrams/         # Diagramas de arquitectura
│   │   ├── home/             # Página de inicio
│   │   ├── navigation/       # Sidebar y Footer
│   │   └── profile/          # Perfiles personalizados por miembro
│   │       ├── german/       # Perfil de Germán (independiente)
│   │       ├── juan/         # Perfil de Juan (independiente)
│   │       ├── manuel/       # Perfil de Manuel (independiente)
│   │       └── nicolas/      # Perfil de Nicolás (independiente)
│   │
│   ├── containers/pages/     # Componentes de página (HomePage, AntiHeroesPage, etc.)
│   ├── data/                 # Datos estáticos (antiheroes.json + navigation.js)
│   ├── hooks/                # Custom Hooks (useMediaQuery)
│   ├── layout/               # Estructura principal de la UI (Layout con Outlet)
│   ├── router/               # Configuración de rutas (AppRouter)
│   └── styles/               # Estilos globales (global.css)
│
├── App.jsx                   # Componente raíz
├── main.jsx                  # Punto de entrada
├── package.json              # Dependencias y scripts
└── README.md                 # Esta documentación
```

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework:** React 19.1
- **Build Tool:** Vite 7.1 (HMR ultra-rápido)
- **Routing:** React Router DOM 7.9
- **Styling:** CSS-in-JS (estilos inline por componente)
- **Linting:** ESLint 9
- **Deployment:** Vercel
- **Version Control:** Git & GitHub
- **API Externa:** [TVMaze API](https://www.tvmaze.com/api)

## ⚙️ Instalación y Ejecución

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/juandualibe/frontend-tp-02.git
   ```

2. **Navega a la carpeta del proyecto:**
   ```bash
   cd frontend-tp-02
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo con HMR
npm run build    # Genera el build de producción optimizado
npm run preview  # Preview del build de producción localmente
npm run lint     # Ejecuta ESLint para verificar calidad de código
```

## 📦 Despliegue

El proyecto está desplegado en **Vercel** con CI/CD automático:

🔗 **[https://frontend-tp-02.vercel.app/](https://frontend-tp-02.vercel.app/)**

Cada push a la rama `main` genera un nuevo deploy automático.

## 👥 Equipo de Desarrollo

| Miembro | Rol | Responsabilidades | Perfil |
|---------|-----|-------------------|--------|
| **Germán** | Full Stack Developer | Setup inicial, rutas, API, deploy | [`/profile/german`](https://frontend-tp-02.vercel.app/profile/german) |
| **Juan** | Full Stack Developer | Sidebar, HomePage, galería JSON, filtros | [`/profile/juan`](https://frontend-tp-02.vercel.app/profile/juan) |
| **Manuel** | Backend Developer | Estados asíncronos, integración API, optimización | [`/profile/manuel`](https://frontend-tp-02.vercel.app/profile/manuel) |
| **Nicolás** | Project Manager | Coordinación, Git, diagramas, documentación | [`/profile/nicolas`](https://frontend-tp-02.vercel.app/profile/nicolas) |

## 🎯 Cumplimiento de Consignas del TP2

✅ **Repositorio y Publicación:**
- Repositorio en GitHub: [juandualibe/frontend-tp-02](https://github.com/juandualibe/frontend-tp-02)
- Deploy en Vercel: [frontend-tp-02.vercel.app](https://frontend-tp-02.vercel.app/)

✅ **Estructura y Contenidos:**
1. ✓ Sidebar con logo y menú vertical funcional
2. ✓ Sección Portada (HomePage)
3. ✓ Sección Bitácora completa
4. ✓ Secciones individuales por integrante (4 perfiles personalizados)
5. ✓ Datos desde JSON local (antiheroes.json con 20+ objetos)
6. ✓ Datos desde API pública (TVMaze API)
7. ✓ Árbol de renderizado (diagrama de componentes)
8. ✓ Diagrama de organización de carpetas

✅ **Requisitos Técnicos:**
- ✓ React Router implementado
- ✓ Responsive en 3 breakpoints
- ✓ Componentización y reutilización
- ✓ README.md actualizado
- ✓ Control de versiones con Git

## 📚 Documentación Adicional

- [📊 Diagramas de Arquitectura](https://frontend-tp-02.vercel.app/diagrams) - Ver árbol de componentes y estructura de carpetas
- [📔 Bitácora del Proyecto](https://frontend-tp-02.vercel.app/bitacora) - Documentación completa del desarrollo
- [🎭 Galería de Anti-Héroes](https://frontend-tp-02.vercel.app/antiheroes) - Ejemplo de datos desde JSON
- [📺 Series (API)](https://frontend-tp-02.vercel.app/api-data) - Ejemplo de consumo de API externa
- [📁 Guía de Perfiles](src/components/profile/README.md) - Cómo personalizar perfiles

## 🤝 Contribución y Personalización

Cada miembro del equipo tiene **total libertad creativa** para personalizar su perfil en la carpeta `src/components/profile/[nombre]/`:

- **`*Profile.jsx`**: Estructura y componentes del perfil
- **`*Data.js`**: Información personal, habilidades, películas, música
- **`*Styles.js`**: Colores, tipografías, diseño personalizado

### Ventajas de esta estructura:
- ✅ Trabajo en paralelo sin conflictos de Git
- ✅ Independencia total entre perfiles
- ✅ Fácil mantenimiento y actualización
- ✅ Creatividad sin límites

## 💡 Aprendizajes Clave

Durante el desarrollo de este proyecto, el equipo aprendió:

- 🧩 **Pensamiento en componentes**: Identificar elementos reutilizables
- 🔄 **React Router**: Navegación SPA sin recargas de página
- 📊 **Gestión de estado**: useState, useEffect para datos dinámicos
- 🌐 **Fetch de APIs**: Manejo de promesas, loading y error states
- 🎨 **CSS-in-JS**: Estilos encapsulados por componente
- ⚡ **Vite**: Build tool moderno 10x más rápido que Webpack
- 🪝 **Custom Hooks**: Lógica reutilizable (ej: useMediaQuery)
- 🌿 **Git workflow**: Trabajo colaborativo con carpetas independientes

## 📝 Notas del Proyecto

Este proyecto fue desarrollado como parte del **Trabajo Práctico N°2** de la materia Frontend (2025), demostrando:

- ✨ Migración exitosa de aplicación estática (HTML/CSS/JS) a SPA moderna (React)
- ⚛️ Implementación de arquitectura basada en componentes reutilizables
- 🌐 Consumo de APIs REST externas con manejo de estados asíncronos
- 🧭 Sistema de routing completo con React Router DOM
- 🎯 Buenas prácticas de desarrollo frontend moderno
- 👥 Trabajo colaborativo en equipo usando Git y GitHub

## 📄 Licencia

Este proyecto es parte de un trabajo académico de la Universidad.

---

## 🔗 Enlaces Útiles

- 🌐 [Aplicación en Vivo](https://frontend-tp-02.vercel.app/)
- 💻 [Repositorio GitHub](https://github.com/juandualibe/frontend-tp-02)
- 📖 [Documentación de React](https://react.dev/)
- ⚡ [Documentación de Vite](https://vitejs.dev/)
- 🧭 [Documentación de React Router](https://reactrouter.com/)

---

_Desarrollado con ❤️ por el Grupo 3 (Germán, Juan, Manuel, Nicolás) - 2025_