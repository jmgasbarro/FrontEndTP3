// src/components/diagrams/FolderStructureDiagram.jsx

import { useTheme } from "../../hooks/useTheme";

export default function FolderStructureDiagram() {
  const { isDark } = useTheme();

  return (
    <div style={styles.diagramContainer(isDark)}>
      <h2 style={styles.diagramTitle}>
        📁 Organización de Carpetas del Proyecto
      </h2>
      <p style={styles.diagramDescription}>
        Estructura completa del proyecto organizada por funcionalidad, siguiendo
        las mejores prácticas de React para facilitar el mantenimiento y la
        escalabilidad.
      </p>

      <div style={styles.diagram}>
        <div style={styles.folderTree}>
          {/* ROOT LEVEL */}
          <div style={styles.folderItem}>
            <span style={styles.rootIcon}>🚀</span>
            <strong style={styles.rootText}>frontend-tp-02/</strong>
            <span style={styles.folderNote}>Raíz del proyecto</span>
          </div>

          {/* PUBLIC FOLDER */}
          <div style={styles.folderLevel}>
            <div style={styles.folderItem}>
              <span style={styles.folderIcon}>📁</span>
              <strong>public/</strong>
              <span style={styles.folderNote}>
                Archivos estáticos servidos directamente
              </span>
            </div>
            <div style={styles.folderLevel}>
              <div style={styles.fileItem}>
                <span style={styles.fileIcon}>🖼️</span>
                <code style={styles.code}>logo.ico</code>
                <span style={styles.fileNote}>Favicon de la aplicación</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.folderIcon}>📂</span>
                <strong>german/</strong>
                <span style={styles.fileNote}>Imágenes y assets de Germán</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.folderIcon}>📂</span>
                <strong>juan/</strong>
                <span style={styles.fileNote}>Imágenes y assets de Juan</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.folderIcon}>📂</span>
                <strong>manuel/</strong>
                <span style={styles.fileNote}>Imágenes y assets de Manuel</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.folderIcon}>📂</span>
                <strong>nicolas/</strong>
                <span style={styles.fileNote}>
                  Imágenes y assets de Nicolás
                </span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.folderIcon}>📂</span>
                <strong>diagrams/</strong>
                <span style={styles.fileNote}>
                  Diagramas de arquitectura (PNG/JPG)
                </span>
              </div>
            </div>

            {/* SRC FOLDER */}
            <div style={styles.folderItem}>
              <span style={styles.folderIcon}>📁</span>
              <strong>src/</strong>
              <span style={styles.folderNote}>
                Código fuente de la aplicación React
              </span>
            </div>
            <div style={styles.folderLevel}>
              {/* ROOT FILES */}
              <div style={styles.fileItem}>
                <span style={styles.reactIcon}>⚛️</span>
                <code style={styles.codeImportant}>App.jsx</code>
                <span style={styles.importantNote}>Componente raíz</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.reactIcon}>🚀</span>
                <code style={styles.codeImportant}>main.jsx</code>
                <span style={styles.importantNote}>Punto de entrada</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.cssIcon}>🎨</span>
                <code style={styles.code}>index.css</code>
                <span style={styles.fileNote}>Estilos iniciales del #root</span>
              </div>

              {/* COMPONENTS FOLDER */}
              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                <strong>components/</strong>
                <span style={styles.folderNote}>
                  Componentes UI reutilizables por funcionalidad
                </span>
              </div>
              <div style={styles.folderLevel}>
                {/* API-DATA */}
                <div style={styles.folderItem}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>api-data/</strong>
                  <span style={styles.fileNote}>
                    Componentes para consumo de API externa
                  </span>
                </div>
                <div style={styles.folderLevel}>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>ApiDataHeader.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>ApiDataContent.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>ComicsGrid.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>
                    <code style={styles.code}>ComicCard.jsx</code>
                    <span style={styles.apiNote}>TVMaze API</span>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>Pagination.jsx</code>
                  </div>
                </div>

                {/* ANTIHEROES */}
                <div style={styles.folderItem}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>antiheroes/</strong>
                  <span style={styles.fileNote}>
                    Galería con datos desde JSON local
                  </span>
                </div>
                <div style={styles.folderLevel}>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>AntiHeroesHeader.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>AntiHeroesControls.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>SearchBar.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>UniverseFilter.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>AntiHeroesGrid.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>
                    <code style={styles.code}>AntiHeroCard.jsx</code>
                    <span style={styles.jsonNote}>JSON Local</span>
                  </div>
                </div>

                {/* BITACORA */}
                <div style={styles.folderItem}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>bitacora/</strong>
                  <span style={styles.fileNote}>
                    Documentación del proceso de desarrollo
                  </span>
                </div>
                <div style={styles.folderLevel}>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>BitacoraHeader.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>BitacoraContent.jsx</code>
                  </div>
                </div>

                {/* DIAGRAMS */}
                <div style={styles.folderItem}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>diagrams/</strong>
                  <span style={styles.fileNote}>
                    Diagramas de arquitectura del proyecto
                  </span>
                </div>
                <div style={styles.folderLevel}>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>ComponentTreeDiagram.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>FolderStructureDiagram.jsx</code>
                  </div>
                </div>

                {/* HOME */}
                <div style={styles.folderItem}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>home/</strong>
                  <span style={styles.fileNote}>
                    Componentes de la página principal
                  </span>
                </div>
                <div style={styles.folderLevel}>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>HeroSection.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>{" "}
                    <code style={styles.code}>TeamSection.jsx</code>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>
                    <code style={styles.code}>TeamCard.jsx</code>
                    <span style={styles.reuseNote}>Reutilizable ×4</span>
                  </div>
                </div>

                {/* NAVIGATION */}
                <div style={styles.folderItem}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>navigation/</strong>
                  <span style={styles.fileNote}>
                    Componentes de navegación global
                  </span>
                </div>
                <div style={styles.folderLevel}>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>
                    <code style={styles.code}>Sidebar.jsx</code>
                    <span style={styles.importantNote}>
                      Menú lateral persistente
                    </span>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.reactIcon}>⚛️</span>
                    <code style={styles.code}>Footer.jsx</code>
                    <span style={styles.importantNote}>
                      Pie de página persistente
                    </span>
                  </div>
                </div>

                {/* PROFILE */}
                <div style={styles.folderItem}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>profile/</strong>
                  <span style={styles.fileNote}>
                    Perfiles individuales personalizados por miembro
                  </span>
                </div>
                <div style={styles.folderLevel}>
                  {/* GERMAN */}
                  <div style={styles.folderItem}>
                    <span style={styles.profileIcon}>👤</span>
                    <strong>german/</strong>
                    <span style={styles.profileNote}>Perfil de Germán</span>
                  </div>
                  <div style={styles.folderLevel}>
                    <div style={styles.fileItem}>
                      <span style={styles.reactIcon}>⚛️</span>{" "}
                      <code style={styles.code}>GermanProfile.jsx</code>
                    </div>
                    <div style={styles.fileItem}>
                      <span style={styles.dataIcon}>📊</span>{" "}
                      <code style={styles.code}>germanData.js</code>{" "}
                      <span style={styles.fileNote}>Datos personales</span>
                    </div>
                    <div style={styles.fileItem}>
                      <span style={styles.cssIcon}>🎨</span>{" "}
                      <code style={styles.code}>germanStyles.js</code>{" "}
                      <span style={styles.fileNote}>
                        Estilos personalizados
                      </span>
                    </div>
                  </div>

                  {/* JUAN */}
                  <div style={styles.folderItem}>
                    <span style={styles.profileIcon}>👤</span>
                    <strong>juan/</strong>
                    <span style={styles.profileNote}>Perfil de Juan</span>
                  </div>
                  <div style={styles.folderLevel}>
                    <div style={styles.fileItem}>
                      <span style={styles.reactIcon}>⚛️</span>{" "}
                      <code style={styles.code}>JuanProfile.jsx</code>
                    </div>
                    <div style={styles.fileItem}>
                      <span style={styles.dataIcon}>📊</span>{" "}
                      <code style={styles.code}>juanData.js</code>
                    </div>
                    <div style={styles.fileItem}>
                      <span style={styles.cssIcon}>🎨</span>{" "}
                      <code style={styles.code}>juanStyles.js</code>
                    </div>
                  </div>

                  {/* MANUEL */}
                  <div style={styles.folderItem}>
                    <span style={styles.profileIcon}>👤</span>
                    <strong>manuel/</strong>
                    <span style={styles.profileNote}>Perfil de Manuel</span>
                  </div>
                  <div style={styles.folderLevel}>
                    <div style={styles.fileItem}>
                      <span style={styles.reactIcon}>⚛️</span>{" "}
                      <code style={styles.code}>ManuelProfile.jsx</code>
                    </div>
                    <div style={styles.fileItem}>
                      <span style={styles.dataIcon}>📊</span>{" "}
                      <code style={styles.code}>manuelData.js</code>
                    </div>
                    <div style={styles.fileItem}>
                      <span style={styles.cssIcon}>🎨</span>{" "}
                      <code style={styles.code}>manuelStyles.js</code>
                    </div>
                  </div>

                  {/* NICOLAS */}
                  <div style={styles.folderItem}>
                    <span style={styles.profileIcon}>👤</span>
                    <strong>nicolas/</strong>
                    <span style={styles.profileNote}>Perfil de Nicolás</span>
                  </div>
                  <div style={styles.folderLevel}>
                    <div style={styles.fileItem}>
                      <span style={styles.reactIcon}>⚛️</span>{" "}
                      <code style={styles.code}>NicolasProfile.jsx</code>
                    </div>
                    <div style={styles.fileItem}>
                      <span style={styles.dataIcon}>📊</span>{" "}
                      <code style={styles.code}>nicolasData.js</code>
                    </div>
                    <div style={styles.fileItem}>
                      <span style={styles.cssIcon}>🎨</span>{" "}
                      <code style={styles.code}>nicolasStyles.js</code>
                    </div>
                  </div>

                  <div style={styles.fileItem}>
                    <span style={styles.docIcon}>📄</span>
                    <code style={styles.code}>README.md</code>
                    <span style={styles.fileNote}>
                      Guía de personalización de perfiles
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTAINERS FOLDER */}
              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                <strong>containers/</strong>
                <span style={styles.folderNote}>
                  Componentes contenedores de alto nivel
                </span>
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.folderItem}>
                  <span style={styles.folderIcon}>📂</span>
                  <strong>pages/</strong>
                  <span style={styles.folderNote}>
                    Componentes que actúan como páginas completas
                  </span>
                </div>
                <div style={styles.folderLevel}>
                  <div style={styles.fileItem}>
                    <span style={styles.pageIcon}>📄</span>
                    <code style={styles.code}>HomePage.jsx</code>
                    <span style={styles.routeNote}>Ruta: /</span>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.pageIcon}>📄</span>
                    <code style={styles.code}>AntiHeroesPage.jsx</code>
                    <span style={styles.routeNote}>Ruta: /antiheroes</span>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.pageIcon}>📄</span>
                    <code style={styles.code}>ApiDataPage.jsx</code>
                    <span style={styles.routeNote}>Ruta: /api-data</span>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.pageIcon}>📄</span>
                    <code style={styles.code}>BitacoraPage.jsx</code>
                    <span style={styles.routeNote}>Ruta: /bitacora</span>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.pageIcon}>📄</span>
                    <code style={styles.code}>DiagramsPage.jsx</code>
                    <span style={styles.routeNote}>Ruta: /diagrams</span>
                  </div>
                  <div style={styles.fileItem}>
                    <span style={styles.pageIcon}>📄</span>
                    <code style={styles.code}>ProfilePage.jsx</code>
                    <span style={styles.routeNote}>Ruta: /profile/:id</span>
                  </div>
                </div>
              </div>

              {/* DATA FOLDER */}
              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                <strong>data/</strong>
                <span style={styles.folderNote}>
                  Datos estáticos de la aplicación
                </span>
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.jsonIcon}>📋</span>
                  <code style={styles.codeImportant}>antiheroes.json</code>
                  <span style={styles.importantNote}>
                    Base de datos local (20+ objetos)
                  </span>
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.dataIcon}>📊</span>
                  <code style={styles.code}>navigation.js</code>
                  <span style={styles.fileNote}>
                    Configuración de enlaces del Sidebar
                  </span>
                </div>
              </div>

              {/* HOOKS FOLDER */}
              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                <strong>hooks/</strong>
                <span style={styles.folderNote}>
                  Custom Hooks con lógica reutilizable
                </span>
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.hookIcon}>🪝</span>
                  <code style={styles.code}>MediaQuery.js</code>
                  <span style={styles.fileNote}>
                    Hook para detectar cambios de pantalla (responsive)
                  </span>
                </div>
              </div>

              {/* LAYOUT FOLDER */}
              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                <strong>layout/</strong>
                <span style={styles.folderNote}>
                  Estructura principal de la UI
                </span>
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.layoutIcon}>🏗️</span>
                  <code style={styles.codeImportant}>layout.jsx</code>
                  <span style={styles.importantNote}>
                    Define estructura con Sidebar, Outlet y Footer
                  </span>
                </div>
              </div>

              {/* ROUTER FOLDER */}
              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                <strong>router/</strong>
                <span style={styles.folderNote}>
                  Configuración del enrutamiento SPA
                </span>
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.routerIcon}>🔀</span>
                  <code style={styles.codeImportant}>AppRouter.jsx</code>
                  <span style={styles.importantNote}>
                    Define todas las rutas con React Router DOM
                  </span>
                </div>
              </div>

              {/* STYLES FOLDER */}
              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                <strong>styles/</strong>
                <span style={styles.folderNote}>Estilos globales</span>
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.cssIcon}>🎨</span>
                  <code style={styles.code}>global.css</code>
                  <span style={styles.fileNote}>
                    CSS reset y estilos base para toda la app
                  </span>
                </div>
              </div>
            </div>

            {/* CONFIG FILES */}
            <div style={styles.folderItem}>
              <span style={styles.configIcon}>⚙️</span>
              <strong>Archivos de Configuración</strong>
            </div>
            <div style={styles.folderLevel}>
              <div style={styles.fileItem}>
                <span style={styles.npmIcon}>📦</span>{" "}
                <code style={styles.code}>package.json</code>{" "}
                <span style={styles.fileNote}>Dependencias y scripts</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.configIcon}>⚡</span>{" "}
                <code style={styles.code}>vite.config.js</code>{" "}
                <span style={styles.fileNote}>Configuración de Vite</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.configIcon}>✅</span>{" "}
                <code style={styles.code}>eslint.config.js</code>{" "}
                <span style={styles.fileNote}>Reglas de linting</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.deployIcon}>🚀</span>
                <code style={styles.codeImportant}>vercel.json</code>
                <span style={styles.importantNote}>
                  Configuración de deployment y rewrites para SPA
                </span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.gitIcon}>🌿</span>{" "}
                <code style={styles.code}>.gitignore</code>{" "}
                <span style={styles.fileNote}>Archivos ignorados por Git</span>
              </div>
              <div style={styles.fileItem}>
                <span style={styles.docIcon}>📖</span>{" "}
                <code style={styles.code}>README.md</code>{" "}
                <span style={styles.fileNote}>Documentación del proyecto</span>
              </div>
            </div>
          </div>
        </div>

        {/* LEGEND */}
        <div style={styles.legend}>
          <h3 style={styles.legendTitle}>🏷️ Leyenda de Iconos</h3>
          <div style={styles.legendGrid}>
            <div style={styles.legendItem}>
              <div>📁 Carpeta principal</div>
              <div>📂 Subcarpeta</div>
              <div>⚛️ Componente React</div>
            </div>
            <div style={styles.legendItem}>
              <div>📄 Página/Contenedor</div>
              <div>📊 Archivo de datos</div>
              <div>🎨 Estilos CSS/JS</div>
            </div>
            <div style={styles.legendItem}>
              <div>📋 Archivo JSON</div>
              <div>🪝 Custom Hook</div>
              <div>⚙️ Configuración</div>
            </div>
            <div style={styles.legendItem}>
              <div>🚀 Deployment</div>
            </div>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div style={styles.features}>
          <h3 style={styles.featuresTitle}>
            ✨ Características de la Organización
          </h3>
          <ul style={styles.featuresList}>
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
              <code style={styles.inlineCode}>/data</code> para JSON y
              configuraciones
            </li>
            <li>
              <strong>Custom Hooks:</strong> Lógica reutilizable extraída en{" "}
              <code style={styles.inlineCode}>/hooks</code>
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
              <code style={styles.inlineCode}>vercel.json</code> para rewrites y
              manejo correcto de rutas SPA
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
      : "transparent",
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "40px",
    marginBottom: "40px",
  }),
  diagramTitle: {
    fontSize: "28px",
    color: "#ff6666",
    marginBottom: "15px",
    fontWeight: "700",
    textAlign: "center",
  },
  diagramDescription: {
    fontSize: "16px",
    marginBottom: "30px",
    lineHeight: "1.6",
    textAlign: "center",
  },
  diagram: {
    background: "#0a0a0a",
    border: "1px solid #333",
    borderRadius: "8px",
    padding: "30px",
    overflowX: "auto",
  },
  folderTree: {
    fontFamily: '"Courier New", monospace',
    fontSize: "14px",
    lineHeight: "1.8",
    minWidth: "250px",
  },
  folderLevel: {
    marginLeft: "5px",
    paddingLeft: "15px",
    borderLeft: "1px solid #444",
  },
  folderItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "5px 0",
    color: "#ff6666",
    flexWrap: "wrap",
  },
  fileItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "5px 0",
    color: "#b0b0b0",
    flexWrap: "wrap",
  },

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
  deployIcon: { fontSize: "16px", color: "#00d9ff" }, // 🆕 Icono para deployment

  // Text styles
  rootText: {
    fontSize: "18px",
    color: "#ff6666",
  },
  code: {
    fontFamily: '"Courier New", monospace',
    color: "#b0b0b0",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "2px 6px",
    borderRadius: "3px",
    fontSize: "13px",
  },
  codeImportant: {
    fontFamily: '"Courier New", monospace',
    color: "#ff6666",
    backgroundColor: "rgba(255, 102, 102, 0.1)",
    padding: "2px 6px",
    borderRadius: "3px",
    fontSize: "13px",
    fontWeight: "600",
  },
  inlineCode: {
    fontFamily: '"Courier New", monospace',
    color: "#ff6666",
    backgroundColor: "rgba(255, 102, 102, 0.1)",
    padding: "2px 4px",
    borderRadius: "3px",
    fontSize: "12px",
  },

  // Notes
  folderNote: {
    fontSize: "12px",
    color: "#666",
    fontStyle: "italic",
    marginLeft: "auto",
  },
  fileNote: {
    fontSize: "11px",
    color: "#555",
    fontStyle: "italic",
  },
  importantNote: {
    fontSize: "11px",
    color: "#ff6666",
    fontWeight: "600",
    fontStyle: "italic",
  },
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
  legend: {
    marginTop: "30px",
    padding: "20px",
    background: "rgba(139, 0, 0, 0.15)",
    border: "1px solid #8b0000",
    borderRadius: "8px",
  },
  legendTitle: {
    fontSize: "18px",
    color: "#ff6666",
    marginBottom: "15px",
    fontWeight: "600",
  },
  legendGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  legendItem: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "13px",
    color: "#b0b0b0",
  },

  // Features
  features: {
    marginTop: "30px",
    padding: "20px",
    background: "rgba(77, 171, 247, 0.1)",
    border: "1px solid #4dabf7",
    borderRadius: "8px",
  },
  featuresTitle: {
    fontSize: "18px",
    color: "#4dabf7",
    marginBottom: "15px",
    fontWeight: "600",
  },
  featuresList: {
    lineHeight: "1.8",
    color: "#b0b0b0",
    fontSize: "14px",
  },
};
