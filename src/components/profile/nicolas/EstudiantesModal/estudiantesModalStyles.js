export const modalStyles = {
  // Modal Overlay
  overlay: (isDark) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: isDark
      ? "rgba(0, 0, 0, 0.95)"
      : "rgba(250, 250, 250, 0.95)", // Fondo claro
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1001,
    padding: "1rem",
    overflowY: "auto",
    animation: "modalFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  }),

  // Modal Content Container
  content: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a0a0a 0%, #2a0a0a 100%)"
      : "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", // Fondo claro
    border: isDark ? "3px solid #8b0000" : "3px solid #d32f2f", // Borde claro
    borderRadius: "16px 0 0 16px",
    padding: "2rem",
    maxWidth: "1200px",
    width: "100%",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    boxShadow: isDark
      ? "0 0 30px rgba(139, 0, 0, 0.7), 0 0 60px rgba(255, 0, 0, 0.4), 0 20px 40px rgba(0, 0, 0, 0.8)"
      : "0 0 30px rgba(211, 47, 47, 0.2), 0 0 60px rgba(211, 47, 47, 0.1), 0 20px 40px rgba(0, 0, 0, 0.1)", // Sombra clara
    animation: "modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
    transition: "all 0.3s ease",
  }),

  // Close Button
  closeButton: (isDark) => ({
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: isDark
      ? "linear-gradient(135deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(135deg, #d32f2f 0%, #c62828 100%)", // Fondo claro
    border: isDark ? "2px solid #ff0000" : "2px solid #b71c1c", // Borde claro
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    cursor: "pointer",
    fontSize: "2rem",
    color: "#fff", // Blanco sobre rojo está bien en ambos modos
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: isDark
      ? "0 0 20px rgba(255, 0, 0, 0.5)"
      : "0 0 20px rgba(211, 47, 47, 0.3)", // Sombra clara
    zIndex: 10,
  }),

  closeButtonHover: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #b30000 0%, #dc0000 100%)"
      : "linear-gradient(135deg, #c62828 0%, #b71c1c 100%)", // Fondo claro
    transform: "scale(1.15)",
    boxShadow: isDark
      ? "0 0 40px rgba(255, 0, 0, 0.9)"
      : "0 0 30px rgba(211, 47, 47, 0.5)", // Sombra clara
  }),

  closeButtonDiv: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    lineHeight: "1.1",
  },

  // Header Section
  header: {
    textAlign: "center",
    marginBottom: "2.5rem",
  },

  title: (isDark) => ({
    fontSize: "2.5rem",
    fontWeight: 700,
    color: isDark ? "#ff0000" : "#b71c1c", // Color claro
    marginBottom: "0.5rem",
    textShadow: isDark
      ? "0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.4)"
      : "0 0 20px rgba(211, 47, 47, 0.4), 0 0 40px rgba(211, 47, 47, 0.2)", // Sombra clara
    letterSpacing: "1px",
    animation: isDark ? "titlePulse 2s ease-in-out infinite" : "",
  }),

  subtitle: (isDark) => ({
    fontSize: "1.2rem",
    color: isDark ? "#b0b0b0" : "#4a4a4a", // Color claro (text-secondary)
    marginBottom: "1rem",
    fontStyle: "italic",
  }),

  description: (isDark) => ({
    fontSize: "1rem",
    color: isDark ? "#e0e0e0" : "#1a1a1a", // Color claro (text-primary)
    lineHeight: 1.6,
    maxWidth: "700px",
    margin: "0 auto 1.5rem",
  }),

  hint: (isDark) => ({
    fontSize: "0.95rem",
    color: isDark ? "#ff0000" : "#b71c1c", // Color claro
    background: isDark ? "rgba(139, 0, 0, 0.2)" : "rgba(211, 47, 47, 0.05)", // Fondo claro
    border: isDark ? "2px solid #8b0000" : "2px solid #d32f2f", // Borde claro
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    margin: "0 auto",
    maxWidth: "600px",
    fontWeight: 500,
    boxShadow: isDark
      ? "0 0 20px rgba(139, 0, 0, 0.3)"
      : "0 0 20px rgba(211, 47, 47, 0.1)", // Sombra clara
  }),

  // Stars Grid
  starsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
    alignItems: "stretch",
  },

  starContainer: {
    flex: "0 0 100%",
    height: "220px",
    perspective: "1000px",
  },

  // Card
  card: (isFlipped) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
    transformStyle: "preserve-3d",
    cursor: "pointer",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  }),

  // Card Faces (Front & Back)
  cardFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },

  // Front of Card
  cardFront: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #8b0000 0%, #5a0000 100%)"
      : "linear-gradient(135deg, #d32f2f 0%, #c62828 100%)", // Fondo claro
    color: "white", // Blanco sobre rojo
    border: isDark ? "2px solid #ff0000" : "2px solid #b71c1c", // Borde claro
    boxShadow: isDark
      ? "0 2px 4px rgba(0, 0, 0, 0.25), 0 8px 15px -5px rgba(139, 0, 0, 0.6), 0 0 25px -5px rgba(255, 0, 0, 0.3)"
      : "0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 15px -5px rgba(211, 47, 47, 0.4), 0 0 25px -5px rgba(211, 47, 47, 0.2)", // Sombra clara
    transition:
      "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease",
  }),

  cardFrontHover: (isDark) => ({
    transform: "translateY(-10px) scale(1.03)",
    boxShadow: isDark
      ? "0 2px 5px rgba(0, 0, 0, 0.3), 0 20px 35px -10px rgba(139, 0, 0, 0.8), 0 0 50px -5px rgba(255, 0, 0, 0.6)"
      : "0 2px 5px rgba(0, 0, 0, 0.15), 0 20px 35px -10px rgba(211, 47, 47, 0.6), 0 0 50px -5px rgba(211, 47, 47, 0.4)", // Sombra clara
  }),

  starIcon: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
    filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))",
    animation: "starFloat 3s ease-in-out infinite",
  },

  year: {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  },

  titleText: {
    fontSize: "1.1rem",
    lineHeight: 1.3,
    fontWeight: 500,
  },

  // Back of Card
  cardBack: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)"
      : "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)", // Fondo claro
    color: isDark ? "#e0e0e0" : "#1a1a1a", // Color claro (text-primary)
    transform: "rotateY(180deg)",
    border: isDark ? "2px solid #8b0000" : "2px solid #e0e0e0", // Borde claro
    boxShadow: isDark
      ? "0 8px 32px rgba(0, 0, 0, 0.8)"
      : "0 8px 32px rgba(0, 0, 0, 0.1)", // Sombra clara
  }),

  backYear: (isDark) => ({
    // Convertido a función
    fontSize: "1.3rem",
    fontWeight: 700,
    color: isDark ? "#ff0000" : "#b71c1c", // Color claro
    marginBottom: "0.75rem",
    textShadow: isDark
      ? "0 0 10px rgba(255, 0, 0, 0.5)"
      : "0 0 10px rgba(211, 47, 47, 0.3)", // Sombra clara
  }),

  backTitle: (isDark) => ({
    // Convertido a función
    fontSize: "1rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
    color: isDark ? "#fff" : "#1a1a1a", // Color claro
  }),

  backDescription: (isDark) => ({
    // Convertido a función
    fontSize: "0.9rem",
    lineHeight: 1.4,
    color: isDark ? "#b0b0b0" : "#4a4a4a", // Color claro (text-secondary)
  }),

  // Responsive styles
  "@media (min-width: 401px) and (max-width: 900px)": {
    starContainer: {
      flex: "0 0 calc(50% - 0.75rem)",
      minWidth: "200px",
    },
  },

  "@media (min-width: 901px) and (max-width: 1200px)": {
    starContainer: {
      flex: "0 0 calc(33.333% - 1rem)",
      minWidth: "220px",
    },
  },

  "@media (min-width: 1201px)": {
    starContainer: {
      flex: "0 0 calc(25% - 1.125rem)",
      minWidth: "240px",
    },
  },
};

// CSS Animations as a style tag
export const modalAnimations = `
@keyframes modalFadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
}

@keyframes modalSlideIn {
  from {
    transform: scale(0.85) translateY(-60px) rotateX(10deg);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0) rotateX(0deg);
    opacity: 1;
  }
}

@keyframes titlePulse {
  0%, 100% {
    text-shadow: 0 0 15px rgba(255, 0, 0, 0.2);
  }
  50% {
    text-shadow: 0 0 25px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 0, 0, 0.3);
  }
}
  
@keyframes starFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}
`;
