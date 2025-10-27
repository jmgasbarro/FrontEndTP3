// src/components/bitacora/BitacoraContent.jsx
import BitacoraSection from "./BitacoraSection";

export default function BitacoraContent() {
  const sections = [
    {
      title: "📅 Cronología del Desarrollo",
      items: [
        "Semana 1: Análisis del proyecto TP1 original y planificación de la arquitectura en React",
        "Semana 1: Setup inicial del proyecto con Vite + React + React Router DOM",
        "Semana 2: Migración de la estructura HTML a componentes React reutilizables",
        "Semana 2: Implementación del Sidebar persistente y sistema de rutas básicas",
        "Semana 3: Desarrollo de perfiles individuales con total personalización por miembro",
        "Semana 3: Creación de la galería de anti-héroes con datos desde JSON local (20+ objetos)",
        "Semana 3: Implementación de búsqueda y filtros en tiempo real",
        "Semana 4: Integración con TVMaze API para consumo de datos externos",
        "Semana 4: Desarrollo de paginación del lado del cliente para la API",
        "Semana 4: Creación de diagramas de arquitectura (árbol de componentes y estructura de carpetas)",
        "Semana 4: Optimización responsive en 3 breakpoints (móvil, tablet, desktop)",
        "Semana 4: Deploy en Vercel y ajustes finales de documentación",
      ],
    },
    {
      title: "👥 División de Tareas por Miembro",
      items: [
        "Germán (Full Stack): Setup inicial con Vite, configuración de rutas, integración con TVMaze API, deploy en Vercel",
        "Juan (Full Stack): Diseño del Sidebar, HomePage con HeroSection, galería JSON de anti-héroes, sistema de búsqueda y filtros",
        "Manuel (Backend): Manejo de estados asíncronos, integración de API REST, optimización de rendimiento, documentación técnica",
        "Nicolás (Project Manager): Coordinación del equipo, control de versiones en Git, creación de diagramas de arquitectura, redacción de README y bitácora",
        "Todo el equipo: Desarrollo individual de perfiles personalizados con total libertad creativa",
        "Todo el equipo: Revisiones de código y testing de funcionalidades en diferentes dispositivos",
      ],
    },
    {
      title: "🚧 Desafíos Encontrados y Soluciones",
      items: [
        "DESAFÍO: Migración de estilos CSS globales con BEM a CSS-in-JS por componente → SOLUCIÓN: Creamos archivos *Styles.js para cada componente reutilizable",
        "DESAFÍO: Evitar prop drilling al compartir datos entre componentes → SOLUCIÓN: Implementamos custom hooks y levantamos el estado cuando fue necesario",
        "DESAFÍO: Rutas dinámicas para perfiles individuales personalizados → SOLUCIÓN: Usamos rutas paramétricas /profile/:id con mapeo de componentes",
        "DESAFÍO: API sin paginación del lado del servidor → SOLUCIÓN: Implementamos paginación del lado del cliente con estados de carga",
        "DESAFÍO: Trabajo en paralelo sin conflictos de Git → SOLUCIÓN: Carpetas individuales por miembro para perfiles, cada uno con total independencia",
        "DESAFÍO: Mantener consistencia visual entre perfiles personalizados → SOLUCIÓN: Guidelines de diseño compartidos pero implementación libre",
        "DESAFÍO: Transición de sitio multipágina a SPA sin perder funcionalidad → SOLUCIÓN: React Router con Outlet para navegación sin recargas",
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
        "Hooks personalizados: Extraer lógica reutilizable en custom hooks (ej: useMediaQuery) reduce duplicación de código",
        "Git workflow: Trabajo en carpetas independientes permite paralelización sin merge conflicts constantes",
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
      ],
    },
    {
      title: "🎨 Características de Diseño Implementadas",
      items: [
        "Tema oscuro (dark mode) como identidad visual del proyecto con degradados sutiles",
        "Tipografía Creepster para títulos principales, creando atmósfera oscura y dramática",
        "Sidebar fijo con navegación vertical para acceso rápido a todas las secciones",
        "Diseño responsive con 3 breakpoints: móvil (<768px), tablet (768-1024px), desktop (>1024px)",
        "Componentes modulares y reutilizables siguiendo principios SOLID de React",
        "Transiciones suaves entre rutas sin recargas de página (experiencia SPA)",
        "Cards con efectos hover y animaciones CSS para mejorar interactividad",
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
      ],
    },
    {
      title: "🏗️ Arquitectura del Proyecto",
      items: [
        "App.jsx → AppRouter → Layout (con Outlet) → Páginas específicas",
        "Layout persistente: Sidebar y Footer visibles en todas las rutas",
        "containers/pages/ - Componentes de página que ensamblan la UI completa",
        "components/ - Componentes reutilizables organizados por feature (api-data, antiheroes, home, etc.)",
        "data/ - Archivos JSON y configuraciones (antiheroes.json, navigation.js)",
        "hooks/ - Custom Hooks con lógica reutilizable (useMediaQuery para responsive)",
        "router/ - Configuración central de rutas con React Router DOM",
        "Cada perfil en carpeta independiente: *Profile.jsx, *Data.js, *Styles.js",
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
      ],
    },
  ];

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>📔 Bitácora del Proyecto</h1>
        <p style={styles.subtitle}>
          Documentación del proceso de migración de HTML/CSS/JS a React SPA
        </p>
        <p style={styles.team}>
          Grupo 3 - Germán, Juan, Manuel, Nicolás
        </p>
      </div>

      <div style={styles.content}>
        {sections.map((section, index) => (
          <BitacoraSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>

      <div style={styles.footer}>
        <p style={styles.footerText}>
          Este proyecto representó un desafío técnico significativo que nos permitió 
          profundizar en el desarrollo moderno con React, mejorando nuestras habilidades 
          en arquitectura de componentes, gestión de estado y trabajo colaborativo.
        </p>
        <p style={styles.footerDate}>
          Trabajo Práctico N°2 - Frontend - 2025
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    margin: "0 auto",
    padding: "60px 40px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
    padding: "30px",
    background: "rgba(139, 0, 0, 0.15)",
    border: "2px solid #8b0000",
    borderRadius: "12px",
  },
  title: {
    fontSize: "48px",
    color: "#ff6666",
    marginBottom: "15px",
    fontWeight: "700",
    fontFamily: "'Creepster', cursive",
  },
  subtitle: {
    fontSize: "18px",
    color: "#b0b0b0",
    marginBottom: "10px",
    lineHeight: "1.6",
  },
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
  footer: {
    marginTop: "60px",
    padding: "30px",
    textAlign: "center",
    background: "rgba(77, 171, 247, 0.1)",
    border: "2px solid #4dabf7",
    borderRadius: "12px",
  },
  footerText: {
    fontSize: "16px",
    color: "#b0b0b0",
    lineHeight: "1.8",
    marginBottom: "15px",
  },
  footerDate: {
    fontSize: "14px",
    color: "#4dabf7",
    fontWeight: "600",
  },
};