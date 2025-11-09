// src/components/diagrams/ComponentTreeDiagram.jsx

import { useTheme } from "../../hooks/useTheme";

export default function ComponentTreeDiagram() {
  const { isDark } = useTheme();

  return (
    <div style={styles.diagramContainer(isDark)}>
      <h2 style={styles.diagramTitle(isDark)}>
        🌲 Árbol de Renderizado (Jerarquía de Componentes)
      </h2>
      <p style={styles.diagramDescription(isDark)}>
        Este diagrama muestra la arquitectura completa de nuestra SPA,
        incluyendo todos los componentes, sub-componentes y rutas implementadas
        con React Router DOM.
      </p>

      {/* Imagen del diagrama */}
      <div style={styles.imageWrapper(isDark)}>
        <img
          src="/diagrams/arbol-de-componentes.png"
          alt="Diagrama del árbol de componentes de la aplicación"
          style={styles.image(isDark)}
        />
      </div>

      {/* Leyenda */}
      <div style={styles.legend(isDark)}>
        <h3 style={styles.legendTitle(isDark)}>🏷️ Código de Colores</h3>
        <div style={styles.legendGrid}>
          {/* Item 1 */}
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator(isDark)}>
              <span
                style={{
                  ...styles.colorBox,
                  backgroundColor: "#ff6b6b",
                  borderColor: isDark ? "#000" : "#ff6b6b",
                }}
              ></span>
              <span>Componente Raíz</span>
            </div>
            <div style={styles.colorDescription(isDark)}>
              App.jsx - Punto de inicio de la aplicación
            </div>
          </div>

          {/* Item 2 */}
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator(isDark)}>
              <span
                style={{
                  ...styles.colorBox,
                  backgroundColor: "#4dabf7",
                  borderColor: isDark ? "#000" : "#4dabf7",
                }}
              ></span>
              <span>Router</span>
            </div>
            <div style={styles.colorDescription(isDark)}>
              AppRouter.jsx - Configuración de rutas
            </div>
          </div>

          {/* Item 3 */}
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator(isDark)}>
              <span
                style={{
                  ...styles.colorBox,
                  backgroundColor: "#51cf66",
                  borderColor: isDark ? "#000" : "#51cf66",
                }}
              ></span>
              <span>Layout y Estructura</span>
            </div>
            <div style={styles.colorDescription(isDark)}>
              Layout, Sidebar, Footer, Outlet - Componentes persistentes
            </div>
          </div>

          {/* Item 4 */}
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator(isDark)}>
              <span
                style={{
                  ...styles.colorBox,
                  backgroundColor: "#ffd43b",
                  borderColor: isDark ? "#000" : "#ffd43b",
                }}
              ></span>
              <span>Páginas (Rutas)</span>
            </div>
            <div style={styles.colorDescription(isDark)}>
              Componentes asociados a rutas específicas
            </div>
          </div>

          {/* Item 5 */}
          <div style={styles.legendItem}>
            <div style={styles.colorIndicator(isDark)}>
              <span
                style={{
                  ...styles.colorBox,
                  backgroundColor: isDark ? "#eee" : "#777",
                  borderColor: isDark ? "#000" : "#777",
                }}
              ></span>
              <span>Sub-componentes</span>
            </div>
            <div style={styles.colorDescription(isDark)}>
              Componentes reutilizables (Cards, Headers, Controls)
            </div>
          </div>
        </div>
      </div>

      {/* Descripción técnica */}
      <div style={styles.technicalNotes(isDark)}>
        <h3 style={styles.notesTitle}>🔧 Descripción Técnica</h3>
        <ul style={styles.notesList(isDark)}>
          <li>
            <strong>App.jsx:</strong> Componente raíz que inicializa toda la
            aplicación React
          </li>
          <li>
            <strong>AppRouter.jsx:</strong> Maneja el sistema de rutas usando
            React Router DOM v7
          </li>
          <li>
            <strong>Layout.jsx:</strong> Contenedor persistente que mantiene
            Sidebar y Footer visibles en todas las páginas
          </li>
          <li>
            <strong>Outlet:</strong> Componente de React Router que actúa como
            placeholder para las páginas activas
          </li>
          <li>
            <strong>Rutas Dinámicas:</strong>{" "}
            <code style={styles.inlineCode(isDark)}>/profile/:id</code> permite
            perfiles personalizados por miembro
          </li>
          <li>
            <strong>Componentización:</strong> Cada página se descompone en
            sub-componentes reutilizables (Headers, Grids, Cards)
          </li>
        </ul>
      </div>

      {/* Características destacadas */}
      <div style={styles.features(isDark)}>
        <h3 style={styles.featuresTitle}>✨ Características Destacadas</h3>
        <div style={styles.featuresGrid}>
          {/* Feature 1 */}
          <div style={styles.featureCard(isDark)}>
            <div style={styles.featureIcon}>🔄</div>
            <div style={styles.featureTitle(isDark)}>Arquitectura SPA</div>
            <div style={styles.featureDesc(isDark)}>
              Una sola carga inicial, navegación sin recargas de página
            </div>
          </div>
          {/* Feature 2 */}
          <div style={styles.featureCard(isDark)}>
            <div style={styles.featureIcon}>🏗️</div>
            <div style={styles.featureTitle(isDark)}>Layout Persistente</div>
            <div style={styles.featureDesc(isDark)}>
              Sidebar y Footer se mantienen visibles en todas las rutas
            </div>
          </div>
          {/* Feature 3 */}
          <div style={styles.featureCard(isDark)}>
            <div style={styles.featureIcon}>🎯</div>
            <div style={styles.featureTitle(isDark)}>Rutas Paramétricas</div>
            <div style={styles.featureDesc(isDark)}>
              /profile/:id permite perfiles únicos y personalizados
            </div>
          </div>
          {/* Feature 4 */}
          <div style={styles.featureCard(isDark)}>
            <div style={styles.featureIcon}>♻️</div>
            <div style={styles.featureTitle(isDark)}>
              Componentes Reutilizables
            </div>
            <div style={styles.featureDesc(isDark)}>
              Cards, Headers y Controls usados múltiples veces
            </div>
          </div>
          {/* Feature 5 */}
          <div style={styles.featureCard(isDark)}>
            <div style={styles.featureIcon}>📊</div>
            <div style={styles.featureTitle(isDark)}>Datos Dinámicos</div>
            <div style={styles.featureDesc(isDark)}>
              JSON local (Anti-Héroes) y API externa (TVMaze)
            </div>
          </div>
          {/* Feature 6 */}
          <div style={styles.featureCard(isDark)}>
            <div style={styles.featureIcon}>🎨</div>
            <div style={styles.featureTitle(isDark)}>
              Perfiles Personalizados
            </div>
            <div style={styles.featureDesc(isDark)}>
              Cada miembro con su propio diseño y estilos únicos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  diagramContainer: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)"
      : "#ffffff", // Fondo blanco en light
    border: isDark ? "2px solid #333" : "2px solid #e0e0e0", // Borde claro
    borderRadius: "12px",
    padding: "40px",
    marginBottom: "40px",
  }),
  diagramTitle: (isDark) => ({
    fontSize: "28px",
    color: isDark ? "#ff6666" : "#b71c1c", // Rojo oscuro en light
    marginBottom: "15px",
    fontWeight: "700",
    textAlign: "center",
  }),
  diagramDescription: (isDark) => ({
    fontSize: "16px",
    color: isDark ? "#b0b0b0" : "#4a4a4a", // Texto secundario en light
    marginBottom: "30px",
    lineHeight: "1.6",
    textAlign: "center",
  }),

  // Image wrapper
  imageWrapper: (isDark) => ({
    backgroundColor: isDark ? "#0a0a0a" : "#f5f5f5", // Fondo claro
    padding: "30px",
    borderRadius: "12px",
    border: isDark ? "2px solid #333" : "2px solid #e0e0e0", // Borde claro
    marginBottom: "30px",
    textAlign: "center",
    overflow: "auto",
  }),
  image: (isDark) => ({
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    border: isDark ? "1px solid #444" : "1px solid #ccc", // Borde claro
  }),

  // Legend
  legend: (isDark) => ({
    marginTop: "30px",
    padding: "25px",
    background: isDark ? "rgba(139, 0, 0, 0.15)" : "rgba(211, 47, 47, 0.05)", // Fondo claro
    border: isDark ? "2px solid #8b0000" : "2px solid #d32f2f", // Borde claro
    borderRadius: "10px",
  }),
  legendTitle: (isDark) => ({
    fontSize: "20px",
    color: isDark ? "#ff6666" : "#b71c1c", // Rojo oscuro en light
    marginBottom: "20px",
    fontWeight: "600",
  }),
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
  colorIndicator: (isDark) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: isDark ? "#eee" : "#111", // Texto oscuro en light
    fontWeight: "600",
  }),
  colorBox: {
    width: "24px",
    height: "24px",
    borderRadius: "4px",
    borderWidth: "2px",
    borderStyle: "solid",
    flexShrink: 0,
  },
  colorDescription: (isDark) => ({
    fontSize: "12px",
    fontStyle: "italic",
    marginLeft: "34px",
    color: isDark ? "#b0b0b0" : "#4a4a4a", // Texto secundario en light
  }),

  // Technical notes (Azul)
  technicalNotes: (isDark) => ({
    marginTop: "30px",
    padding: "25px",
    background: isDark ? "rgba(77, 171, 247, 0.1)" : "rgba(77, 171, 247, 0.05)", // Fondo azul más sutil
    border: "2px solid #4dabf7",
    borderRadius: "10px",
  }),
  notesTitle: {
    fontSize: "20px",
    color: "#4dabf7", // El azul se ve bien en ambos
    marginBottom: "15px",
    fontWeight: "600",
  },
  notesList: (isDark) => ({
    lineHeight: "2",
    fontSize: "14px",
    color: isDark ? "#b0b0b0" : "#333", // Texto oscuro en light
  }),
  inlineCode: (isDark) => ({
    fontFamily: '"Courier New", monospace',
    color: isDark ? "#ffd43b" : "#b8860b", // Amarillo más oscuro en light
    fontWeight: "800",
    backgroundColor: isDark
      ? "rgba(255, 212, 59, 0.1)"
      : "rgba(255, 212, 59, 0.15)", // Fondo amarillo claro
    padding: "2px 6px",
    borderRadius: "3px",
    fontSize: "13px",
  }),

  // Features (Verde)
  features: (isDark) => ({
    marginTop: "30px",
    padding: "25px",
    background: isDark ? "rgba(81, 207, 102, 0.1)" : "rgba(81, 207, 102, 0.05)", // Fondo verde más sutil
    border: "2px solid #51cf66",
    borderRadius: "10px",
  }),
  featuresTitle: {
    fontSize: "20px",
    color: "#51cf66", // El verde se ve bien en ambos
    marginBottom: "20px",
    fontWeight: "600",
    textAlign: "center",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  featureCard: (isDark) => ({
    background: isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.02)", // Fondo casi blanco
    padding: "20px",
    borderRadius: "8px",
    border: isDark ? "1px solid #444" : "1px solid #ddd", // Borde claro
    textAlign: "center",
    transition: "transform 0.2s, border-color 0.2s",
  }),
  featureIcon: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  featureTitle: (isDark) => ({
    fontSize: "15px",
    color: isDark ? "#eee" : "#111", // Texto oscuro en light
    fontWeight: "600",
    marginBottom: "8px",
  }),
  featureDesc: (isDark) => ({
    fontSize: "13px",
    lineHeight: "1.5",
    color: isDark ? "#b0b0b0" : "#4a4a4a", // Texto secundario en light
  }),
};
