import { useState } from "react";

export default function Pokeball({ item, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    
    // Después de 3 vueltas (1.2s), cambiar a pokebola abierta
    setTimeout(() => {
      setShowContent(true);
      // Después de mostrar pokebola abierta (0.3s), mostrar el modal
      setTimeout(() => {
        setIsOpen(true);
      }, 300);
    }, 1200);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowContent(false);
    setIsAnimating(false);
  };

  return (
    <>
      {/* Pokebola */}
      <div
        onClick={handleClick}
        style={{
          ...styles.pokeballContainer,
          transform: isHovered
            ? "scale(1.15) translateY(-2px) rotate(360deg)"
            : "scale(1) translateY(0) rotate(0deg)",
        }}
        className={isAnimating ? "pokeball-opening" : "pokeball-wobble"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={showContent ? "/manuel/pokebolaAbierta.png" : "/manuel/pokebola.png"}
          alt="Pokebola" 
          style={styles.pokeballImage}
        />
      </div>

      {/* Agregar estilos de animación */}
      <style>
        {`
          @keyframes wobble {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            25% { transform: translateX(-8px) rotate(-5deg); }
            75% { transform: translateX(8px) rotate(5deg); }
          }
          
          @keyframes spinAndGrow {
            0% {
              transform: scale(1) rotate(0deg);
            }
            70% {
              transform: scale(1.8) rotate(1080deg);
            }
            100% {
              transform: scale(2) rotate(1080deg);
            }
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          
          .pokeball-wobble {
            animation: wobble 1.5s ease-in-out infinite;
          }
          
          .pokeball-wobble:hover {
            animation: none;
          }
          
          .pokeball-opening {
            animation: spinAndGrow 1.2s ease-in-out forwards;
          }
        `}
      </style>

      {/* Modal/Ventana emergente */}
      {isOpen && (
        <div style={styles.modalOverlay} onClick={handleClose}>
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={styles.closeButton}
              onClick={handleClose}
              onMouseEnter={hoverEffects.closeButtonHover}
              onMouseLeave={hoverEffects.closeButtonLeave}
            >
              ✕
            </button>
            
            <h3 style={styles.modalTitle}>
              {type === "movie" ? "🎬" : "🎵"} {item.title}
            </h3>
            
            {/* Vista previa de YouTube */}
            {item.youtubeId && (
              <div style={styles.videoContainer}>
                <iframe
                  style={styles.iframe}
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            {item.description && (
              <p style={styles.modalDescription}>{item.description}</p>
            )}
            
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.modalLink}
              onMouseEnter={hoverEffects.linkHover}
              onMouseLeave={hoverEffects.linkLeave}
            >
              Ver en YouTube
            </a>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  pokeballContainer: {
    cursor: "pointer",
    transition: "transform 0.6s ease",
    display: "inline-block",
  },
  pokeballImage: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    filter: "drop-shadow(0 4px 15px rgba(255, 0, 0, 0.5))",
  },

  // Modal styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
    padding: "20px",
    animation: "fadeIn 0.5s ease",
  },
  modalContent: {
    background: "linear-gradient(135deg, #1a0a1a 0%, #2d0a1a 100%)",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "800px",
    width: "100%",
    border: "3px solid #ff0000",
    boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)",
    position: "relative",
    animation: "slideDown 0.3s ease",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "transparent",
    border: "none",
    color: "#ff0000",
    fontSize: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    padding: "0",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease",
  },
  modalTitle: {
    color: "#ff0000",
    fontSize: "28px",
    marginBottom: "20px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 10px #ff0000",
    textAlign: "center",
  },
  modalDescription: {
    color: "#b0b0b0",
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "25px",
    textAlign: "center",
  },
  modalLink: {
    display: "block",
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    padding: "15px 30px",
    borderRadius: "25px",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
    border: "2px solid #ff0000",
    transition: "all 0.3s ease",
  },
  videoContainer: {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    overflow: "hidden",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "2px solid #ff0000",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
};

// Agregar efectos hover con JavaScript inline
const hoverEffects = {
  closeButtonHover: (e) => {
    e.target.style.transform = "rotate(90deg)";
  },
  closeButtonLeave: (e) => {
    e.target.style.transform = "rotate(0deg)";
  },
  linkHover: (e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.6)";
  },
  linkLeave: (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "none";
  },
};
