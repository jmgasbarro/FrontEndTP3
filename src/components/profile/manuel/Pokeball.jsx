import { useState } from "react";

export default function Pokeball({ item, type }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Pokebola */}
      <div
        onClick={() => setIsOpen(true)}
        style={styles.pokeballContainer}
        className="pokeball-wobble"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img 
          src="/manuel/pokebola.png" 
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
          
          .pokeball-wobble {
            animation: wobble 1.5s ease-in-out infinite;
          }
          
          .pokeball-wobble:hover {
            animation: none;
          }
        `}
      </style>

      {/* Modal/Ventana emergente */}
      {isOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={styles.closeButton}
              onClick={() => setIsOpen(false)}
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
    transition: "transform 0.3s ease",
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
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
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
