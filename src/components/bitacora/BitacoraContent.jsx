// src/components/bitacora/BitacoraContent.jsx
import { useTheme } from "../../hooks/useTheme";
import BitacoraSection from "./BitacoraSection";

const sections = [
  {
    title: "📅 Cronología del Desarrollo (TP1 → TP2 → TP3)",
    items: [
      "Semana 1 (TP2): Análisis del proyecto TP1 original y planificación de la arquitectura en React",
      "Semana 1 (TP2): Setup inicial del proyecto con Vite + React + React Router DOM",
      "Semana 2 (TP2): Migración de la estructura HTML a componentes React reutilizables",
      "Semana 2 (TP2): Implementación del Sidebar persistente y sistema de rutas básicas",
      "Semana 3 (TP2): Desarrollo de perfiles individuales con total personalización por miembro",
      "Semana 3 (TP2): Creación de la galería de anti-héroes con datos desde JSON local (20+ objetos)",
      "Semana 3 (TP2): Implementación de búsqueda y filtros en tiempo real",
      "Semana 4 (TP2): Integración con TVMaze API para consumo de datos externos",
      "Semana 4 (TP2): Desarrollo de paginación del lado del cliente para la API",
      "Semana 4 (TP2): Creación de diagramas de arquitectura (árbol de componentes y estructura de carpetas)",
      "Semana 4 (TP2): Optimización responsive en 3 breakpoints (móvil, tablet, desktop) y primer deploy en Vercel",
      "Semana 5 (TP3): Revisión de la consigna del TP3 y selección de mejoras a implementar",
      "Semana 5 (TP3): Implementación de animaciones suaves en tarjetas, botones y navegación",
      "Semana 5 (TP3): Creación de la galería de imágenes interactiva con lightbox para los anti-héroes",
      "Semana 6 (TP3): Desarrollo de barras de progreso de habilidades y botones de redes sociales animados",
      "Semana 6 (TP3): Implementación del carrusel de proyectos destacados en la Home",
      "Semana 7 (TP3): Creación del sistema de tema oscuro/claro con ThemeContext + useTheme",
      "Semana 7 (TP3): Refactor de componentes para soportar el tema dinámico y actualización de README + Bitácora según consignas del TP3",
    ],
  },
  {
    title: "👥 División de Tareas por Miembro",
    items: [
      "Germán (Full Stack): Setup inicial con Vite, configuración de rutas, integración con TVMaze API, deploy en Vercel, documentación",
      "Juan (Full Stack): Diseño del Sidebar, HomePage con HeroSection, galería JSON de anti-héroes, sistema de búsqueda y filtros, barras de habilidades",
      "Manuel (Backend): Manejo de estados asíncronos, integración de API REST, optimización de rendimiento, componentes interactivos",
      "Nicolás (Project Manager): Coordinación del equipo, control de versiones en Git, creación de diagramas de arquitectura, tema global (dark/light)",
      "Todo el equipo: Desarrollo individual de perfiles personalizados con total libertad creativa",
      "Todo el equipo: Revisiones de código y testing de funcionalidades en diferentes dispositivos",
    ],
  },
  {
    title: "🚧 Desafíos Encontrados y Soluciones",
    items: [
      "DESAFÍO (TP2): Migración de estilos CSS globales con BEM a CSS-in-JS por componente → SOLUCIÓN: Creamos archivos *Styles.js para cada componente reutilizable",
      "DESAFÍO (TP2): Evitar prop drilling al compartir datos entre componentes → SOLUCIÓN: Implementamos custom hooks y levantamos el estado cuando fue necesario",
      "DESAFÍO (TP2): Rutas dinámicas para perfiles individuales personalizados → SOLUCIÓN: Usamos rutas paramétricas /profile/:id con mapeo de componentes",
      "DESAFÍO (TP2): API sin paginación del lado del servidor → SOLUCIÓN: Implementamos paginación del lado del cliente con estados de carga",
      "DESAFÍO (TP2): Trabajo en paralelo sin conflictos de Git → SOLUCIÓN: Carpetas individuales por miembro para perfiles, cada uno con total independencia",
      "DESAFÍO (TP3): Integrar animaciones y lightbox sin afectar la performance → SOLUCIÓN: Animaciones con CSS puro y componentes reutilizables (ImageLightbox, ProjectCarousel)",
      "DESAFÍO (TP3): Aplicar tema oscuro/claro en toda la app sin romper estilos existentes → SOLUCIÓN: ThemeContext + useTheme y refactor de estilos a funciones que reciben isDark",
      "DESAFÍO (TP3): Evitar inconsistencias de estilos (border vs borderColor) en CSS-in-JS dinámico → SOLUCIÓN: Normalizamos las propiedades de estilo y unificamos la lógica por componente",
      "DESAFÍO (TP3): Mantener la coherencia visual entre componentes nuevos (lightbox, carrusel, barras, botones sociales) y la identidad original del TP2 → SOLUCIÓN: Reutilizamos la paleta, tipografías y patrones de layout existentes",
    ],
  },
  {
    title: "💡 Aprendizajes Clave del Equipo",
    items: [
      "Pensamiento en componentes: Identificar elementos reutilizables mejora dramáticamente la mantenibilidad del código",
      "React Router: Las SPAs ofrecen mejor UX que sitios multipágina tradicionales (sin recargas, transiciones fluidas)",
      "Gestión de estado: useState y useEffect son fundamentales para manejar datos dinámicos y efectos secundarios",
      "Fetch de APIs: Importancia del manejo correcto de promesas, estados de carga (loading) y errores (error handling)",
      "CSS-in-JS: Estilos encapsulados por componente previenen conflictos de nombres y facilitan el mantenimiento",
      "Vite: Build tool moderno con HMR ultra-rápido vs webpack tradicional (mejora significativa en developer experience)",
      "Hooks personalizados: Extraer lógica reutilizable en custom hooks (ej: useMediaQuery, useAntiHeroes, useApiData) reduce duplicación de código",
      "Git workflow: Trabajo en carpetas independientes permite paralelización sin merge conflicts constantes",
      "Tema global: Usar Context API para el tema oscuro/claro simplifica la propagación de estilos y evita prop drilling excesivo",
    ],
  },
  {
    title: "🔧 Decisiones Técnicas Importantes",
    items: [
      "DECISIÓN: Vite sobre Create React App → RAZÓN: Tiempo de inicio 10x más rápido, HMR instantáneo, build optimizado con Rollup",
      "DECISIÓN: CSS-in-JS sobre módulos CSS → RAZÓN: Estilos co-ubicados con componentes, no requiere configuración adicional, menor curva de aprendizaje",
      "DECISIÓN: Perfiles independientes por carpeta → RAZÓN: Evita conflictos en Git, creatividad total por miembro, facilita merge de cambios",
      "DECISIÓN: React Router DOM v7 → RAZÓN: Soporte moderno de rutas, Outlet para layouts persistentes, API simplificada",
      "DECISIÓN: Estructura por funcionalidad vs por tipo → RAZÓN: Carpetas como /antiheroes/, /api-data/ agrupan todo lo relacionado (componentes, estilos, lógica)",
      "DECISIÓN: JSON local + API externa → RAZÓN: Demostrar manejo de datos estáticos y dinámicos, diferentes patrones de consumo",
      "DECISIÓN: Paginación del lado del cliente → RAZÓN: La API de TVMaze no ofrece paginación, implementamos control total del UX",
      "DECISIÓN (TP3): Crear carpeta /shared para componentes reutilizables → RAZÓN: Centralizar lightbox, carrusel, barras de skill y botones sociales",
      "DECISIÓN (TP3): ThemeContext + useTheme → RAZÓN: Unificar el manejo del tema oscuro/claro en un único punto de verdad",
    ],
  },
  {
    title: "🎨 Características de Diseño Implementadas",
    items: [
      "Tema oscuro como identidad visual principal del proyecto, con degradados sutiles",
      "En TP3 se agrega tema claro y toggle global para alternar entre light/dark",
      "Tipografía Creepster para títulos principales, creando atmósfera oscura y dramática",
      "Sidebar fijo con navegación vertical para acceso rápido a todas las secciones",
      "Diseño responsive con 3 breakpoints: móvil (<768px), tablet (768-1024px), desktop (>1024px)",
      "Componentes modulares y reutilizables siguiendo principios SOLID de React",
      "Transiciones suaves entre rutas sin recargas de página (experiencia SPA)",
      "Cards con efectos hover y animaciones CSS para mejorar interactividad",
      "Carrusel de proyectos, lightbox de imágenes y botones sociales animados para reforzar la experiencia visual",
    ],
  },
  {
    title: "📊 Datos y APIs Utilizadas",
    items: [
      "Archivo antiheroes.json con 20+ objetos de anti-héroes (Marvel, DC, The Boys, Invincible, etc.)",
      "TVMaze API pública para obtener datos de series en tiempo real (https://www.tvmaze.com/api)",
      "Sistema de búsqueda en tiempo real filtrando por nombre de personaje",
      "Filtros por universo (Marvel, DC, The Boys, Invincible, Otros) para la galería JSON",
      "Paginación dinámica responsive que se adapta al tamaño de pantalla",
      "Manejo de estados: loading (cargando), error (falló la petición), success (datos cargados)",
      "En TP3 se mantiene la misma fuente de datos pero se mejora la presentación (lightbox, animaciones, componentes compartidos)",
    ],
  },
  {
    title: "🏗️ Arquitectura del Proyecto",
    items: [
      "App.jsx → AppRouter → Layout (con Outlet) → Páginas específicas",
      "Layout persistente: Sidebar y Footer visibles en todas las rutas",
      "containers/pages/ - Componentes de página que ensamblan la UI completa",
      "components/ - Componentes reutilizables organizados por feature (api-data, antiheroes, home, bitacora, diagrams, profile, shared, etc.)",
      "data/ - Archivos JSON y configuraciones (antiheroes.json, navigation.js)",
      "hooks/ - Custom Hooks con lógica reutilizable (useMediaQuery, useTheme, useAntiHeroes, useApiData)",
      "contexts/ - ThemeContext para gestionar el tema global (oscuro/claro)",
      "router/ - Configuración central de rutas con React Router DOM",
      "Cada perfil en carpeta independiente: *Profile.jsx, *Data.js, *Styles.js (+ extras como Pokeball, EstudiantesModal)",
    ],
  },
  {
    title: "📦 Tecnologías y Dependencias",
    items: [
      "React 19.1 - Librería principal para construcción de UI",
      "React DOM 19.1 - Renderizado en el navegador",
      "React Router DOM 7.9 - Sistema de rutas SPA",
      "Vite 7.1 - Build tool y dev server ultra-rápido",
      "ESLint 9 - Linter para mantener calidad de código",
      "Vercel - Plataforma de deployment con CI/CD automático",
      "Git & GitHub - Control de versiones y colaboración del equipo",
      "Context API + custom hooks (ThemeContext + useTheme) para tema global",
      "React Icons - Set de íconos para mejorar la interfaz (por ejemplo, íconos del toggle de tema)",
    ],
  },
];

export default function BitacoraContent() {
  const { isDark } = useTheme();

  return (
    <section style={styles.container}>
      <div style={styles.header(isDark)}>
        <h1 style={styles.title(isDark)}>📔 Bitácora del Proyecto</h1>
        <p style={styles.subtitle(isDark)}>
          Documentación del proceso de evolución del proyecto: de HTML/CSS/JS a
          SPA en React y mejoras del TP3
        </p>
        <p style={styles.team}>Grupo 3 - Germán, Juan, Manuel, Nicolás</p>
      </div>

      <div style={styles.content}>
        {sections.map((section, index) => (
          <BitacoraSection
            key={index}
            title={section.title}
            items={section.items}
            isDark={isDark}
          />
        ))}
      </div>

      <div style={styles.footer(isDark)}>
        <p style={styles.footerText(isDark)}>
          Este proyecto representó un desafío técnico significativo que nos
          permitió profundizar en el desarrollo moderno con React, mejorando
          nuestras habilidades en arquitectura de componentes, gestión de
          estado, diseño de UX/UI y trabajo colaborativo a lo largo de los TP2 y
          TP3.
        </p>
        <p style={styles.footerDate}>Trabajo Práctico N°3 - Frontend - 2025</p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    margin: "0 auto",
    padding: "60px 40px",
    minHeight: "100vh",
  },
  header: (isDark) => ({
    textAlign: "center",
    marginBottom: "50px",
    padding: "30px",
    background: isDark ? "rgba(139, 0, 0, 0.15)" : "rgba(211, 47, 47, 0.05)",
    border: isDark ? "2px solid #8b0000" : "2px solid #d32f2f",
    borderRadius: "12px",
  }),
  title: (isDark) => ({
    fontSize: "48px",
    color: isDark ? "#ff6666" : "#b71c1c",
    marginBottom: "15px",
    fontWeight: "700",
    fontFamily: "'Creepster', cursive",
  }),
  subtitle: (isDark) => ({
    fontSize: "18px",
    marginBottom: "10px",
    lineHeight: "1.6",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
  }),
  team: {
    fontSize: "16px",
    color: "#4dabf7",
    fontWeight: "600",
    marginTop: "10px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  footer: (isDark) => ({
    marginTop: "60px",
    padding: "30px",
    textAlign: "center",
    background: isDark ? "rgba(77, 171, 247, 0.1)" : "rgba(77, 171, 247, 0.05)",
    border: "2px solid #4dabf7",
    borderRadius: "12px",
  }),
  footerText: (isDark) => ({
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "15px",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
  }),
  footerDate: {
    fontSize: "14px",
    color: "#4dabf7",
    fontWeight: "600",
  },
};
