// src/components/diagrams/FolderStructureDiagram.jsx

import { useTheme } from "../../hooks/useTheme";

export default function FolderStructureDiagram() {
  const { isDark } = useTheme();

  return (
    <div style={styles.diagramContainer(isDark)}>
      <h2 style={styles.diagramTitle(isDark)}>
        📁 Organización de Carpetas del Proyecto
      </h2>
      <p style={styles.diagramDescription(isDark)}>
        Estructura completa del proyecto organizada por funcionalidad, siguiendo
        las mejores prácticas de React para facilitar el mantenimiento y la
        escalabilidad.
      </p>

      <div style={styles.diagram(isDark)}>
        <div style={styles.folderTree}>
          {/* ROOT LEVEL */}
          <div style={styles.folderItem(isDark)}>
            <span style={styles.rootIcon}>🚀</span>
            <strong style={styles.rootText(isDark)}>frontend-tp-02/</strong>
            <span style={styles.folderNote(isDark)}>Raíz del proyecto</span>
          </div>

          {/* PUBLIC FOLDER */}
          <div style={styles.folderLevel(isDark)}>
            <div style={styles.folderItem(isDark)}>
              <span style={styles.folderIcon}>📁</span>
              <strong>public/</strong>
              <span style={styles.folderNote(isDark)}>
                Archivos estáticos servidos directamente
              </span>
            </div>

            <div style={styles.folderLevel(isDark)}>
              {[
                "logo.ico",
                "german/",
                "juan/",
                "manuel/",
                "nicolas/",
                "diagrams/",
              ].map((name, i) => (
                <div key={i} style={styles.fileItem(isDark)}>
                  <span style={styles.folderIcon}>
                    {name.includes(".") ? "🖼️" : "📂"}
                  </span>
                  <code style={styles.code(isDark)}>{name}</code>
                  <span style={styles.fileNote(isDark)}>
                    {name === "logo.ico"
                      ? "Favicon de la aplicación"
                      : `Imágenes y assets de ${name.replace("/", "")}`}
                  </span>
                </div>
              ))}
            </div>

            {/* SRC FOLDER */}
            <div style={styles.folderItem(isDark)}>
              <span style={styles.folderIcon}>📁</span>
              <strong>src/</strong>
              <span style={styles.folderNote(isDark)}>
                Código fuente de la aplicación React
              </span>
            </div>

            <div style={styles.folderLevel(isDark)}>
              {/* ROOT FILES */}
              <div style={styles.fileItem(isDark)}>
                <span style={styles.reactIcon}>⚛️</span>
                <code style={styles.codeImportant(isDark)}>App.jsx</code>
                <span style={styles.importantNote(isDark)}>
                  Componente raíz
                </span>
              </div>
              <div style={styles.fileItem(isDark)}>
                <span style={styles.reactIcon}>🚀</span>
                <code style={styles.codeImportant(isDark)}>main.jsx</code>
                <span style={styles.importantNote(isDark)}>
                  Punto de entrada
                </span>
              </div>
              <div style={styles.fileItem(isDark)}>
                <span style={styles.cssIcon}>🎨</span>
                <code style={styles.code(isDark)}>index.css</code>
                <span style={styles.fileNote(isDark)}>
                  Estilos iniciales del #root
                </span>
              </div>

              {/* COMPONENTS */}
              <div style={styles.folderItem(isDark)}>
                <span style={styles.folderIcon}>📁</span>
                <strong>components/</strong>
                <span style={styles.folderNote(isDark)}>
                  Componentes UI reutilizables por funcionalidad
                </span>
              </div>

              <div style={styles.folderLevel(isDark)}>
                {/* API-DATA */}
                <div style={styles.folderItem(isDark)}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>api-data/</strong>
                  <span style={styles.fileNote(isDark)}>
                    Componentes para consumo de API externa
                  </span>
                </div>

                <div style={styles.folderLevel(isDark)}>
                  {[
                    "ApiDataHeader.jsx",
                    "ApiDataContent.jsx",
                    "ComicsGrid.jsx",
                    "ComicCard.jsx",
                    "Pagination.jsx",
                  ].map((file, i) => (
                    <div key={i} style={styles.fileItem(isDark)}>
                      <span style={styles.reactIcon}>⚛️</span>
                      <code style={styles.code(isDark)}>{file}</code>
                      {file === "ComicCard.jsx" && (
                        <span style={styles.apiNote}>TVMaze API</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* ANTIHEROES */}
                <div style={styles.folderItem(isDark)}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>antiheroes/</strong>
                  <span style={styles.fileNote(isDark)}>
                    Galería con datos desde JSON local
                  </span>
                </div>
                <div style={styles.folderLevel(isDark)}>
                  {[
                    "AntiHeroesHeader.jsx",
                    "AntiHeroesControls.jsx",
                    "SearchBar.jsx",
                    "UniverseFilter.jsx",
                    "AntiHeroesGrid.jsx",
                    "AntiHeroCard.jsx",
                  ].map((f, i) => (
                    <div key={i} style={styles.fileItem(isDark)}>
                      <span style={styles.reactIcon}>⚛️</span>
                      <code style={styles.code(isDark)}>{f}</code>
                      {f === "AntiHeroCard.jsx" && (
                        <span style={styles.jsonNote}>JSON Local</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* BITACORA */}
                <div style={styles.folderItem(isDark)}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>bitacora/</strong>
                  <span style={styles.fileNote(isDark)}>
                    Documentación del proceso de desarrollo
                  </span>
                </div>
                <div style={styles.folderLevel(isDark)}>
                  {["BitacoraHeader.jsx", "BitacoraContent.jsx"].map((f, i) => (
                    <div key={i} style={styles.fileItem(isDark)}>
                      <span style={styles.reactIcon}>⚛️</span>
                      <code style={styles.code(isDark)}>{f}</code>
                    </div>
                  ))}
                </div>

                {/* DIAGRAMS */}
                <div style={styles.folderItem(isDark)}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>diagrams/</strong>
                  <span style={styles.fileNote(isDark)}>
                    Diagramas de arquitectura del proyecto
                  </span>
                </div>
                <div style={styles.folderLevel(isDark)}>
                  {[
                    "ComponentTreeDiagram.jsx",
                    "FolderStructureDiagram.jsx",
                  ].map((f, i) => (
                    <div key={i} style={styles.fileItem(isDark)}>
                      <span style={styles.reactIcon}>⚛️</span>
                      <code style={styles.code(isDark)}>{f}</code>
                    </div>
                  ))}
                </div>

                {/* HOME */}
                <div style={styles.folderItem(isDark)}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>home/</strong>
                  <span style={styles.fileNote(isDark)}>
                    Componentes de la página principal
                  </span>
                </div>
                <div style={styles.folderLevel(isDark)}>
                  {["HeroSection.jsx", "TeamSection.jsx", "TeamCard.jsx"].map(
                    (f, i) => (
                      <div key={i} style={styles.fileItem(isDark)}>
                        <span style={styles.reactIcon}>⚛️</span>
                        <code style={styles.code(isDark)}>{f}</code>
                        {f === "TeamCard.jsx" && (
                          <span style={styles.reuseNote}>Reutilizable ×4</span>
                        )}
                      </div>
                    )
                  )}
                </div>

                {/* NAVIGATION */}
                <div style={styles.folderItem(isDark)}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>navigation/</strong>
                  <span style={styles.fileNote(isDark)}>
                    Componentes de navegación global
                  </span>
                </div>
                <div style={styles.folderLevel(isDark)}>
                  {["Sidebar.jsx", "Footer.jsx"].map((f, i) => (
                    <div key={i} style={styles.fileItem(isDark)}>
                      <span style={styles.reactIcon}>⚛️</span>
                      <code style={styles.code(isDark)}>{f}</code>
                      <span style={styles.importantNote(isDark)}>
                        {f === "Sidebar.jsx"
                          ? "Menú lateral persistente"
                          : "Pie de página persistente"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* PROFILE */}
                <div style={styles.folderItem(isDark)}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>profile/</strong>
                  <span style={styles.folderNote(isDark)}>
                    Perfiles individuales personalizados por miembro
                  </span>
                </div>

                <div style={styles.folderLevel(isDark)}>
                  {["german", "juan", "manuel", "nicolas"].map((person, i) => (
                    <div key={i}>
                      <div style={styles.folderItem(isDark)}>
                        <span style={styles.profileIcon}>👤</span>
                        <strong>{person}/</strong>
                        <span style={styles.profileNote}>
                          Perfil de{" "}
                          {person.charAt(0).toUpperCase() + person.slice(1)}
                        </span>
                      </div>
                      <div style={styles.folderLevel(isDark)}>
                        <div style={styles.fileItem(isDark)}>
                          <span style={styles.reactIcon}>⚛️</span>
                          <code style={styles.code(isDark)}>
                            {person.charAt(0).toUpperCase() + person.slice(1)}
                            Profile.jsx
                          </code>
                        </div>
                        <div style={styles.fileItem(isDark)}>
                          <span style={styles.dataIcon}>📊</span>
                          <code style={styles.code(isDark)}>
                            {person}Data.js
                          </code>
                        </div>
                        <div style={styles.fileItem(isDark)}>
                          <span style={styles.cssIcon}>🎨</span>
                          <code style={styles.code(isDark)}>
                            {person}Styles.js
                          </code>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div style={styles.fileItem(isDark)}>
                    <span style={styles.docIcon}>📄</span>
                    <code style={styles.code(isDark)}>README.md</code>
                    <span style={styles.fileNote(isDark)}>
                      Guía de personalización de perfiles
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTAINERS */}
              <div style={styles.folderItem(isDark)}>
                <span style={styles.folderIcon}>📁</span>
                <strong>containers/</strong>
                <span style={styles.folderNote(isDark)}>
                  Componentes contenedores de alto nivel
                </span>
              </div>
              <div style={styles.folderLevel(isDark)}>
                <div style={styles.folderItem(isDark)}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>pages/</strong>
                  <span style={styles.folderNote(isDark)}>
                    Componentes que actúan como páginas completas
                  </span>
                </div>
                <div style={styles.folderLevel(isDark)}>
                  {[
                    ["HomePage.jsx", "/"],
                    ["AntiHeroesPage.jsx", "/antiheroes"],
                    ["ApiDataPage.jsx", "/api-data"],
                    ["BitacoraPage.jsx", "/bitacora"],
                    ["DiagramsPage.jsx", "/diagrams"],
                    ["ProfilePage.jsx", "/profile/:id"],
                  ].map(([name, route], i) => (
                    <div key={i} style={styles.fileItem(isDark)}>
                      <span style={styles.pageIcon}>📄</span>
                      <code style={styles.code(isDark)}>{name}</code>
                      <span style={styles.routeNote}>Ruta: {route}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DATA */}
              <div style={styles.folderItem(isDark)}>
                <span style={styles.folderIcon}>📁</span>
                <strong>data/</strong>
                <span style={styles.folderNote(isDark)}>
                  Datos estáticos de la aplicación
                </span>
              </div>
              <div style={styles.folderLevel(isDark)}>
                <div style={styles.fileItem(isDark)}>
                  <span style={styles.jsonIcon}>📋</span>
                  <code style={styles.codeImportant(isDark)}>
                    antiheroes.json
                  </code>
                  <span style={styles.importantNote(isDark)}>
                    Base de datos local (20+ objetos)
                  </span>
                </div>
                <div style={styles.fileItem(isDark)}>
                  <span style={styles.dataIcon}>📊</span>
                  <code style={styles.code(isDark)}>navigation.js</code>
                  <span style={styles.fileNote(isDark)}>
                    Configuración de enlaces del Sidebar
                  </span>
                </div>
              </div>

              {/* HOOKS */}
              <div style={styles.folderItem(isDark)}>
                <span style={styles.folderIcon}>📁</span>
                <strong>hooks/</strong>
                <span style={styles.folderNote(isDark)}>
                  Custom Hooks con lógica reutilizable
                </span>
              </div>
              <div style={styles.folderLevel(isDark)}>
                <div style={styles.fileItem(isDark)}>
                  <span style={styles.hookIcon}>🪝</span>
                  <code style={styles.code(isDark)}>useTheme.js</code>
                </div>
                <div style={styles.fileItem(isDark)}>
                  <span style={styles.hookIcon}>🪝</span>
                  <code style={styles.code(isDark)}>MediaQuery.js</code>
                </div>
              </div>

              {/* LAYOUT */}
              <div style={styles.folderItem(isDark)}>
                <span style={styles.folderIcon}>📁</span>
                <strong>layout/</strong>
                <span style={styles.folderNote(isDark)}>
                  Estructura principal de la UI
                </span>
              </div>
              <div style={styles.folderLevel(isDark)}>
                <div style={styles.fileItem(isDark)}>
                  <span style={styles.layoutIcon}>🏗️</span>
                  <code style={styles.codeImportant(isDark)}>layout.jsx</code>
                  <span style={styles.importantNote(isDark)}>
                    Define estructura con Sidebar, Outlet y Footer
                  </span>
                </div>
              </div>

              {/* ROUTER */}
              <div style={styles.folderItem(isDark)}>
                <span style={styles.folderIcon}>📁</span>
                <strong>router/</strong>
                <span style={styles.folderNote(isDark)}>
                  Configuración del enrutamiento SPA
                </span>
              </div>
              <div style={styles.folderLevel(isDark)}>
                <div style={styles.fileItem(isDark)}>
                  <span style={styles.routerIcon}>🔀</span>
                  <code style={styles.codeImportant(isDark)}>
                    AppRouter.jsx
                  </code>
                  <span style={styles.importantNote(isDark)}>
                    Define todas las rutas con React Router DOM
                  </span>
                </div>
              </div>

              {/* STYLES */}
              <div style={styles.folderItem(isDark)}>
                <span style={styles.folderIcon}>📁</span>
                <strong>styles/</strong>
                <span style={styles.folderNote(isDark)}>Estilos globales</span>
              </div>
              <div style={styles.folderLevel(isDark)}>
                <div style={styles.fileItem(isDark)}>
                  <span style={styles.cssIcon}>🎨</span>
                  <code style={styles.code(isDark)}>global.css</code>
                  <span style={styles.fileNote(isDark)}>
                    CSS reset y estilos base para toda la app
                  </span>
                </div>
              </div>
            </div>

            {/* CONFIG FILES */}
            <div style={styles.folderItem(isDark)}>
              <span style={styles.configIcon}>⚙️</span>
              <strong>Archivos de Configuración</strong>
            </div>
            <div style={styles.folderLevel(isDark)}>
              {[
                ["package.json", "📦", "Dependencias y scripts"],
                ["vite.config.js", "⚡", "Configuración de Vite"],
                ["eslint.config.js", "✅", "Reglas de linting"],
                [
                  "vercel.json",
                  "🚀",
                  "Configuración de deployment y rewrites para SPA",
                ],
                [".gitignore", "🌿", "Archivos ignorados por Git"],
                ["README.md", "📖", "Documentación del proyecto"],
              ].map(([name, icon, note], i) => (
                <div key={i} style={styles.fileItem(isDark)}>
                  <span>{icon}</span>
                  <code
                    style={
                      name === "vercel.json"
                        ? styles.codeImportant(isDark)
                        : styles.code(isDark)
                    }
                  >
                    {name}
                  </code>
                  <span style={styles.fileNote(isDark)}>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LEGEND */}
        <div style={styles.legend(isDark)}>
          <h3 style={styles.legendTitle(isDark)}>🏷️ Leyenda de Iconos</h3>
          <div style={styles.legendGrid}>
            <div style={styles.legendItem(isDark)}>
              <div>📁 Carpeta principal</div>
              <div>📂 Subcarpeta</div>
              <div>⚛️ Componente React</div>
            </div>
            <div style={styles.legendItem(isDark)}>
              <div>📄 Página/Contenedor</div>
              <div>📊 Archivo de datos</div>
              <div>🎨 Estilos CSS/JS</div>
            </div>
            <div style={styles.legendItem(isDark)}>
              <div>📋 Archivo JSON</div>
              <div>🪝 Custom Hook</div>
              <div>⚙️ Configuración</div>
            </div>
            <div style={styles.legendItem(isDark)}>
              <div>🚀 Deployment</div>
            </div>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div style={styles.features(isDark)}>
          <h3 style={styles.featuresTitle}>
            ✨ Características de la Organización
          </h3>
          <ul style={styles.featuresList(isDark)}>
            <li>
              <strong>Separación por Funcionalidad:</strong> Cada carpeta agrupa
              componentes relacionados
            </li>
            <li>
              <strong>Perfiles Independientes:</strong> Cada miembro tiene su
              propia carpeta con total libertad creativa
            </li>
            <li>
              <strong>Datos Centralizados:</strong> Carpeta{" "}
              <code style={styles.inlineCode(isDark)}>/data</code> para JSON y
              configuraciones
            </li>
            <li>
              <strong>Custom Hooks:</strong> Lógica reutilizable extraída en{" "}
              <code style={styles.inlineCode(isDark)}>/hooks</code>
            </li>
            <li>
              <strong>Componentes vs Páginas:</strong> Clara distinción entre UI
              reutilizable y contenedores de rutas
            </li>
            <li>
              <strong>Estilos Modulares:</strong> CSS-in-JS por componente +
              estilos globales centralizados
            </li>
            <li>
              <strong>Configuración de Deployment:</strong>{" "}
              <code style={styles.inlineCode(isDark)}>vercel.json</code> para
              rewrites y manejo correcto de rutas SPA
            </li>
          </ul>
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
  diagram: (isDark) => ({
    background: isDark ? "#0a0a0a" : "#f5f5f5", // Fondo claro
    border: isDark ? "1px solid #333" : "1px solid #e0e0e0", // Borde claro
    borderRadius: "8px",
    padding: "30px",
    overflowX: "auto",
  }),
  folderTree: {
    fontFamily: '"Courier New", monospace',
    fontSize: "14px",
    lineHeight: "1.8",
    minWidth: "250px",
  },
  folderLevel: (isDark) => ({
    marginLeft: "5px",
    paddingLeft: "15px",
    borderLeft: isDark ? "1px solid #444" : "1px solid #ccc", // Borde de árbol claro
  }),
  folderItem: (isDark) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "5px 0",
    color: isDark ? "#ff6666" : "#b71c1c", // Texto rojo oscuro en light
    flexWrap: "wrap",
  }),
  fileItem: (isDark) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "5px 0",
    color: isDark ? "#b0b0b0" : "#333333", // Texto principal en light
    flexWrap: "wrap",
  }),

  // Icons
  rootIcon: { fontSize: "18px" },
  folderIcon: { fontSize: "16px" },
  fileIcon: { fontSize: "16px" },
  reactIcon: { fontSize: "16px", color: "#61dafb" },
  cssIcon: { fontSize: "16px", color: "#da77f2" },
  dataIcon: { fontSize: "16px", color: "#ffa94d" },
  pageIcon: { fontSize: "16px", color: "#ffd43b" },
  jsonIcon: { fontSize: "16px", color: "#51cf66" },
  hookIcon: { fontSize: "16px", color: "#ff6b6b" },
  layoutIcon: { fontSize: "16px", color: "#4dabf7" },
  routerIcon: { fontSize: "16px", color: "#ff8787" },
  configIcon: { fontSize: "16px", color: "#868e96" },
  npmIcon: { fontSize: "16px", color: "#cc0000" },
  gitIcon: { fontSize: "16px", color: "#f76707" },
  docIcon: { fontSize: "16px", color: "#adb5bd" },
  profileIcon: { fontSize: "16px", color: "#4dabf7" },
  deployIcon: { fontSize: "16px", color: "#00d9ff" },

  // Text styles
  rootText: (isDark) => ({
    fontSize: "18px",
    color: isDark ? "#ff6666" : "#b71c1c",
  }),
  code: (isDark) => ({
    fontFamily: '"Courier New", monospace',
    color: isDark ? "#b0b0b0" : "#333",
    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.05)", // Fondo de código claro
    padding: "2px 6px",
    borderRadius: "3px",
    fontSize: "13px",
  }),
  codeImportant: (isDark) => ({
    fontFamily: '"Courier New", monospace',
    color: isDark ? "#ff6666" : "#b71c1c",
    backgroundColor: isDark
      ? "rgba(255, 102, 102, 0.1)"
      : "rgba(211, 47, 47, 0.1)", // Fondo de código claro
    padding: "2px 6px",
    borderRadius: "3px",
    fontSize: "13px",
    fontWeight: "600",
  }),
  inlineCode: (isDark) => ({
    fontFamily: '"Courier New", monospace',
    color: isDark ? "#ff6666" : "#b71c1c",
    backgroundColor: isDark
      ? "rgba(255, 102, 102, 0.1)"
      : "rgba(211, 47, 47, 0.1)",
    padding: "2px 4px",
    borderRadius: "3px",
    fontSize: "12px",
  }),

  // Notes
  folderNote: (isDark) => ({
    fontSize: "12px",
    color: isDark ? "#666" : "#777", // Nota un poco más oscura en light
    fontStyle: "italic",
    marginLeft: "auto",
  }),
  fileNote: (isDark) => ({
    fontSize: "11px",
    color: isDark ? "#555" : "#888", // Nota un poco más oscura en light
    fontStyle: "italic",
  }),
  importantNote: (isDark) => ({
    fontSize: "11px",
    color: isDark ? "#ff6666" : "#c62828", // Rojo más oscuro en light
    fontWeight: "600",
    fontStyle: "italic",
  }),
  profileNote: {
    fontSize: "11px",
    color: "#4dabf7",
    fontStyle: "italic",
  },
  routeNote: {
    fontSize: "11px",
    color: "#1a1a1a",
    fontWeight: "600",
    backgroundColor: "#ffd43b",
    padding: "2px 8px",
    borderRadius: "4px",
  },
  apiNote: {
    fontSize: "11px",
    color: "#fff",
    fontWeight: "600",
    backgroundColor: "#ff6b6b",
    padding: "2px 8px",
    borderRadius: "4px",
  },
  jsonNote: {
    fontSize: "11px",
    color: "#1a1a1a",
    fontWeight: "600",
    backgroundColor: "#51cf66",
    padding: "2px 8px",
    borderRadius: "4px",
  },
  reuseNote: {
    fontSize: "11px",
    color: "#fff",
    fontWeight: "600",
    backgroundColor: "#7950f2",
    padding: "2px 8px",
    borderRadius: "4px",
  },

  // Legend
  legend: (isDark) => ({
    marginTop: "30px",
    padding: "20px",
    background: isDark ? "rgba(139, 0, 0, 0.15)" : "rgba(211, 47, 47, 0.05)", // Fondo claro
    border: isDark ? "1px solid #8b0000" : "1px solid #d32f2f", // Borde claro
    borderRadius: "8px",
  }),
  legendTitle: (isDark) => ({
    fontSize: "18px",
    color: isDark ? "#ff6666" : "#b71c1c", // Título claro
    marginBottom: "15px",
    fontWeight: "600",
  }),
  legendGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  legendItem: (isDark) => ({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "13px",
    color: isDark ? "#b0b0b0" : "#333", // Texto claro
  }),

  // Features
  features: (isDark) => ({
    marginTop: "30px",
    padding: "20px",
    background: isDark ? "rgba(77, 171, 247, 0.1)" : "rgba(77, 171, 247, 0.1)",
    border: "1px solid #4dabf7",
    borderRadius: "8px",
  }),
  featuresTitle: {
    fontSize: "18px",
    color: "#4dabf7",
    marginBottom: "15px",
    fontWeight: "600",
  },
  featuresList: (isDark) => ({
    lineHeight: "1.8",
    color: isDark ? "#b0b0b0" : "#333", // Texto claro
    fontSize: "14px",
  }),
};
