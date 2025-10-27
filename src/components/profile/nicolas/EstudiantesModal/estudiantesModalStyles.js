export const modalStyles = {
  // Modal Overlay
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1001,
    padding: "1rem",
    overflowY: "auto",
    animation: "modalFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Modal Content Container
  content: {
    background: "linear-gradient(135deg, #1a0a0a 0%, #2a0a0a 100%)",
    border: "3px solid #8b0000",
    borderRadius: "16px 0 0 16px",
    padding: "2rem",
    maxWidth: "1200px",
    width: "100%",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    boxShadow:
      "0 0 30px rgba(139, 0, 0, 0.7), 0 0 60px rgba(255, 0, 0, 0.4), 0 20px 40px rgba(0, 0, 0, 0.8)",
    animation: "modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
    transition: "all 0.3s ease",
  },

  // Close Button
  closeButton: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "linear-gradient(135deg, #8b0000 0%, #b30000 100%)",
    border: "2px solid #ff0000",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    cursor: "pointer",
    fontSize: "2rem",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
    zIndex: 10,
  },

  closeButtonHover: {
    background: "linear-gradient(135deg, #b30000 0%, #dc0000 100%)",
    transform: "scale(1.15)",
    boxShadow: "0 0 40px rgba(255, 0, 0, 0.9)",
  },

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

  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#ff0000",
    marginBottom: "0.5rem",
    textShadow: "0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.4)",
    letterSpacing: "1px",
    animation: "titlePulse 2s ease-in-out infinite",
  },

  subtitle: {
    fontSize: "1.2rem",
    color: "#b0b0b0",
    marginBottom: "1rem",
    fontStyle: "italic",
  },

  description: {
    fontSize: "1rem",
    color: "#e0e0e0",
    lineHeight: 1.6,
    maxWidth: "700px",
    margin: "0 auto 1.5rem",
  },

  hint: {
    fontSize: "0.95rem",
    color: "#ff0000",
    background: "rgba(139, 0, 0, 0.2)",
    border: "2px solid #8b0000",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    margin: "0 auto",
    maxWidth: "600px",
    fontWeight: 500,
    boxShadow: "0 0 20px rgba(139, 0, 0, 0.3)",
  },

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
  cardFront: {
    background: "linear-gradient(135deg, #8b0000 0%, #5a0000 100%)",
    color: "white",
    border: "2px solid #ff0000",
    boxShadow:
      "0 2px 4px rgba(0, 0, 0, 0.25), 0 8px 15px -5px rgba(139, 0, 0, 0.6), 0 0 25px -5px rgba(255, 0, 0, 0.3)",
    transition:
      "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease",
  },

  cardFrontHover: {
    transform: "translateY(-10px) scale(1.03)",
    boxShadow:
      "0 2px 5px rgba(0, 0, 0, 0.3), 0 20px 35px -10px rgba(139, 0, 0, 0.8), 0 0 50px -5px rgba(255, 0, 0, 0.6)",
  },

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
  cardBack: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    color: "#e0e0e0",
    transform: "rotateY(180deg)",
    border: "2px solid #8b0000",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8)",
  },

  backYear: {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#ff0000",
    marginBottom: "0.75rem",
    textShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
  },

  backTitle: {
    fontSize: "1rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
    color: "#fff",
  },

  backDescription: {
    fontSize: "0.9rem",
    lineHeight: 1.4,
    color: "#b0b0b0",
  },

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
    text-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.4);
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 0, 0, 1), 0 0 60px rgba(255, 0, 0, 0.6);
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
