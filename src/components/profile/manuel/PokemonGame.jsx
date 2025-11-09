import { useState, useEffect } from "react";

export default function PokemonGame() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [hoveredGame, setHoveredGame] = useState(null);

  // Lista de juegos disponibles con sus portadas y ROMs desde GitHub Pages
  const games = [
    {
      id: 1,
      name: "Pokémon Rojo Fuego",
      cover: "https://pegasus-online.pl/images/pegasus/covers/--gba/Pokemon-FireRed-GBA.jpg",
      rom: "https://jmgasbarro.github.io/FrontEndTP3/manuel/roms/pokemon-firered.gba"
    },
    {
      id: 2,
      name: "Pokémon Verde Hoja",
      cover: "https://m.media-amazon.com/images/M/MV5BOGU1OWU1ZTMtZjY5Yy00Zjg5LThiOWEtMzA0ZmVhODdkZDk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rom: "https://jmgasbarro.github.io/FrontEndTP3/manuel/roms/pokemon-leafgreen.gba"
    },
    {
      id: 3,
      name: "Pokémon Esmeralda",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrVby2eixD1noeZ7p5Usa4YGscO1KMQITfg&s",
      rom: "https://jmgasbarro.github.io/FrontEndTP3/manuel/roms/pokemon-emerald.gba"
    }
  ];

  useEffect(() => {
    if (isGameOpen && selectedGame) {
      // Limpiar scripts anteriores
      const oldScripts = document.querySelectorAll('script[src*="emulatorjs"]');
      oldScripts.forEach(script => script.remove());
      
      // Configurar variables globales para EmulatorJS
      window.EJS_player = '#emulator-game';
      window.EJS_core = 'gba';
      window.EJS_gameUrl = selectedGame.rom;
      window.EJS_pathtodata = 'https://cdn.emulatorjs.org/';
      window.EJS_backgroundColor = '#000000';
      
      // Cargar el script del emulador
      const script = document.createElement('script');
      script.src = 'https://cdn.emulatorjs.org/loader.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        script.remove();
      };
    }
  }, [isGameOpen, selectedGame]);

  const loadEmulator = (game) => {
    setSelectedGame(game);
    setIsGameOpen(true);
  };

  return (
    <div style={styles.container}>
      {!isGameOpen ? (
        // Galería de juegos
        <div style={styles.gamesGallery}>
          <h3 style={styles.galleryTitle}>🎮 Selecciona un Juego de Pokémon</h3>
          <p style={styles.gallerySubtitle}>Haz clic en la portada del juego que quieras jugar</p>
          
          <div style={styles.gamesGrid}>
            {games.map((game) => (
              <div
                key={game.id}
                style={styles.gameCard2(hoveredGame === game.id)}
                onClick={() => loadEmulator(game)}
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                <div style={styles.coverContainer}>
                  <img
                    src={game.cover}
                    alt={game.name}
                    style={styles.coverImage}
                  />
                  <div style={styles.playOverlay(hoveredGame === game.id)}>
                    <span style={styles.playIcon}>▶</span>
                  </div>
                </div>
                <h4 style={styles.gameName}>{game.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Contenedor del juego embebido
        <div style={styles.gameContainer}>
          <div style={styles.gameHeader}>
            <h3 style={styles.gameTitle}>🎮 {selectedGame?.name}</h3>
            <button
              style={styles.closeGameButton}
              onClick={() => {
                setIsGameOpen(false);
                setSelectedGame(null);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(90deg) scale(1.1)";
                e.currentTarget.style.background = "#ff0000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                e.currentTarget.style.background = "rgba(139, 0, 0, 0.9)";
              }}
            >
              ✕
            </button>
          </div>

          {/* Contenedor del emulador */}
          <div style={styles.emulatorWrapper}>
            <div id='emulator-game' style={{width: '100%', height: '100%'}}></div>
          </div>
        </div>
      )}

      {/* Agregar animaciones */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { 
              transform: scale(1);
              box-shadow: 0 4px 20px rgba(255, 0, 0, 0.4);
            }
            50% { 
              transform: scale(1.02);
              box-shadow: 0 8px 40px rgba(255, 0, 0, 0.6);
            }
          }
          
          @keyframes shine {
            0% { transform: translateX(-100%) rotate(45deg); }
            100% { transform: translateX(400%) rotate(45deg); }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  
  // Estilos de la galería
  gamesGallery: {
    width: "100%",
    maxWidth: "900px",
  },
  galleryTitle: {
    fontSize: "32px",
    color: "#ff0000",
    textAlign: "center",
    marginBottom: "10px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 15px #ff0000",
  },
  gallerySubtitle: {
    fontSize: "16px",
    color: "#b0b0b0",
    textAlign: "center",
    marginBottom: "40px",
  },
  gamesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
    padding: "20px",
  },
  gameCard2: (isHovered) => ({
    background: "linear-gradient(135deg, #1a0a1a 0%, #2d0a1a 100%)",
    border: "3px solid #ff0000",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: isHovered ? "translateY(-10px) scale(1.05)" : "translateY(0) scale(1)",
    boxShadow: isHovered
      ? "0 12px 40px rgba(255, 0, 0, 0.8)"
      : "0 4px 20px rgba(255, 0, 0, 0.4)",
  }),
  coverContainer: {
    position: "relative",
    width: "100%",
    paddingTop: "100%",
    overflow: "hidden",
  },
  coverImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  playOverlay: (isVisible) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.3s ease",
  }),
  playIcon: {
    fontSize: "60px",
    color: "#ff0000",
    textShadow: "0 0 20px #ff0000",
  },
  gameName: {
    color: "#ff0000",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "15px",
    margin: 0,
    textAlign: "center",
    fontFamily: "Creepster, cursive",
  },
  
  // Estilos del contenedor del juego
  gameContainer: {
    background: "linear-gradient(135deg, #1a0a1a 0%, #2d0a1a 100%)",
    border: "3px solid #ff0000",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(255, 0, 0, 0.6)",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  gameHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 25px",
    borderBottom: "2px solid #ff0000",
    background: "rgba(0, 0, 0, 0.3)",
  },
  gameTitle: {
    color: "#ff0000",
    fontSize: "24px",
    margin: 0,
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 10px #ff0000",
  },
  closeGameButton: {
    background: "rgba(139, 0, 0, 0.9)",
    color: "#fff",
    border: "2px solid #ff0000",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(255, 0, 0, 0.5)",
  },
  emulatorWrapper: {
    width: "100%",
    height: "700px",
    minHeight: "700px",
    background: "#000",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
