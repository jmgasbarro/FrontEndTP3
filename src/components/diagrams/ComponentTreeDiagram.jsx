// src/components/diagrams/ComponentTreeDiagram.jsx

export default function ComponentTreeDiagram() {
  return (
    <div style={styles.diagramContainer}>
      <h2 style={styles.diagramTitle}>🌲 Árbol de Renderizado (Jerarquía de Componentes)</h2>
      <p style={styles.diagramDescription}>
        Este diagrama muestra la arquitectura completa de nuestra SPA, incluyendo todos los 
        componentes, sub-componentes y rutas implementadas con React Router DOM.
      </p>

      {/* Imagen del diagrama */}
      <div style={styles.imageWrapper}>
        <img 
          src="/diagrams/arbol-de-componentes.png" 
          alt="Diagrama del árbol de componentes de la aplicación"
          style={styles.image}
        />
      </div>

      {/* Leyenda */}
      <div style={styles.legend}>
        <h3 style={styles.legendTitle}>🏷️ Código de Colores</h3>
        <div style={styles.legendGrid}>
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator}>
              <span style={{...styles.colorBox, backgroundColor: '#ff6b6b'}}></span>
              <span>Componente Raíz</span>
            </div>
            <div style={styles.colorDescription}>App.jsx - Punto de inicio de la aplicación</div>
          </div>
          
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator}>
              <span style={{...styles.colorBox, backgroundColor: '#4dabf7'}}></span>
              <span>Router</span>
            </div>
            <div style={styles.colorDescription}>AppRouter.jsx - Configuración de rutas</div>
          </div>
          
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator}>
              <span style={{...styles.colorBox, backgroundColor: '#51cf66'}}></span>
              <span>Layout y Estructura</span>
            </div>
            <div style={styles.colorDescription}>Layout, Sidebar, Footer, Outlet - Componentes persistentes</div>
          </div>
          
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator}>
              <span style={{...styles.colorBox, backgroundColor: '#ffd43b'}}></span>
              <span>Páginas (Rutas)</span>
            </div>
            <div style={styles.colorDescription}>Componentes asociados a rutas específicas</div>
          </div>
          
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator}>
              <span style={{...styles.colorBox, backgroundColor: '#e0e0e0'}}></span>
              <span>Sub-componentes</span>
            </div>
            <div style={styles.colorDescription}>Componentes reutilizables (Cards, Headers, Controls)</div>
          </div>
        </div>
      </div>

      {/* Descripción técnica */}
      <div style={styles.technicalNotes}>
        <h3 style={styles.notesTitle}>🔧 Descripción Técnica</h3>
        <ul style={styles.notesList}>
          <li>
            <strong>App.jsx:</strong> Componente raíz que inicializa toda la aplicación React
          </li>
          <li>
            <strong>AppRouter.jsx:</strong> Maneja el sistema de rutas usando React Router DOM v7
          </li>
          <li>
            <strong>Layout.jsx:</strong> Contenedor persistente que mantiene Sidebar y Footer visibles en todas las páginas
          </li>
          <li>
            <strong>Outlet:</strong> Componente de React Router que actúa como placeholder para las páginas activas
          </li>
          <li>
            <strong>Rutas Dinámicas:</strong> <code style={styles.inlineCode}>/profile/:id</code> permite perfiles personalizados por miembro
          </li>
          <li>
            <strong>Componentización:</strong> Cada página se descompone en sub-componentes reutilizables (Headers, Grids, Cards)
          </li>
        </ul>
      </div>

      {/* Características destacadas */}
      <div style={styles.features}>
        <h3 style={styles.featuresTitle}>✨ Características Destacadas</h3>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔄</div>
            <div style={styles.featureTitle}>Arquitectura SPA</div>
            <div style={styles.featureDesc}>
              Una sola carga inicial, navegación sin recargas de página
            </div>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🏗️</div>
            <div style={styles.featureTitle}>Layout Persistente</div>
            <div style={styles.featureDesc}>
              Sidebar y Footer se mantienen visibles en todas las rutas
            </div>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎯</div>
            <div style={styles.featureTitle}>Rutas Paramétricas</div>
            <div style={styles.featureDesc}>
              /profile/:id permite perfiles únicos y personalizados
            </div>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>♻️</div>
            <div style={styles.featureTitle}>Componentes Reutilizables</div>
            <div style={styles.featureDesc}>
              Cards, Headers y Controls usados múltiples veces
            </div>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📊</div>
            <div style={styles.featureTitle}>Datos Dinámicos</div>
            <div style={styles.featureDesc}>
              JSON local (Anti-Héroes) y API externa (TVMaze)
            </div>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎨</div>
            <div style={styles.featureTitle}>Perfiles Personalizados</div>
            <div style={styles.featureDesc}>
              Cada miembro con su propio diseño y estilos únicos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  diagramContainer: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "40px",
    marginBottom: "40px",
  },
  diagramTitle: {
    fontSize: "28px",
    color: "#ff6666",
    marginBottom: "15px",
    fontWeight: "700",
    textAlign: "center",
  },
  diagramDescription: {
    fontSize: "16px",
    color: "#b0b0b0",
    marginBottom: "30px",
    lineHeight: "1.6",
    textAlign: "center",
  },
  
  // Image wrapper
  imageWrapper: {
    backgroundColor: "#0a0a0a",
    padding: "30px",
    borderRadius: "12px",
    border: "2px solid #333",
    marginBottom: "30px",
    textAlign: "center",
    overflow: "auto",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    border: "1px solid #444",
  },
  
  // Legend
  legend: {
    marginTop: "30px",
    padding: "25px",
    background: "rgba(139, 0, 0, 0.15)",
    border: "2px solid #8b0000",
    borderRadius: "10px",
  },
  legendTitle: {
    fontSize: "20px",
    color: "#ff6666",
    marginBottom: "20px",
    fontWeight: "600",
  },
  legendGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
  },
  legendItem: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  colorIndicator: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: "#e0e0e0",
    fontWeight: "600",
  },
  colorBox: {
    width: "24px",
    height: "24px",
    borderRadius: "4px",
    border: "2px solid #000",
    flexShrink: 0,
  },
  colorDescription: {
    fontSize: "12px",
    color: "#888",
    fontStyle: "italic",
    marginLeft: "34px",
  },
  
  // Technical notes
  technicalNotes: {
    marginTop: "30px",
    padding: "25px",
    background: "rgba(77, 171, 247, 0.1)",
    border: "2px solid #4dabf7",
    borderRadius: "10px",
  },
  notesTitle: {
    fontSize: "20px",
    color: "#4dabf7",
    marginBottom: "15px",
    fontWeight: "600",
  },
  notesList: {
    lineHeight: "2",
    color: "#b0b0b0",
    fontSize: "14px",
  },
  inlineCode: {
    fontFamily: '"Courier New", monospace',
    color: "#ffd43b",
    backgroundColor: "rgba(255, 212, 59, 0.1)",
    padding: "2px 6px",
    borderRadius: "3px",
    fontSize: "13px",
  },
  
  // Features
  features: {
    marginTop: "30px",
    padding: "25px",
    background: "rgba(81, 207, 102, 0.1)",
    border: "2px solid #51cf66",
    borderRadius: "10px",
  },
  featuresTitle: {
    fontSize: "20px",
    color: "#51cf66",
    marginBottom: "20px",
    fontWeight: "600",
    textAlign: "center",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  featureCard: {
    background: "rgba(0, 0, 0, 0.3)",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #444",
    textAlign: "center",
    transition: "transform 0.2s, border-color 0.2s",
  },
  featureIcon: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  featureTitle: {
    fontSize: "15px",
    color: "#e0e0e0",
    fontWeight: "600",
    marginBottom: "8px",
  },
  featureDesc: {
    fontSize: "13px",
    color: "#888",
    lineHeight: "1.5",
  },
};