// Estilos personalizados para el perfil de Nicolás
// Puedes modificar estos estilos libremente sin afectar a otros perfiles

export const nicolasStyles = {
  // Estilos del Header
  header: {
    background: `
      linear-gradient(135deg, rgba(26, 10, 26, 0.95) 0%, rgba(45, 10, 26, 0.95) 100%),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(139, 0, 0, 0.03) 10px,
        rgba(139, 0, 0, 0.03) 20px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 10px,
        rgba(139, 0, 0, 0.03) 10px,
        rgba(139, 0, 0, 0.03) 20px
      )
    `,
    padding: "60px 40px",
    borderBottom: "3px solid #8b0000",
    position: "relative",
    overflow: "hidden",
    boxShadow: "inset 0 0 100px rgba(139, 0, 0, 0.2)",
  },
  particlesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1,
  },
  particle: (index) => ({
    position: "absolute",
    width: `${Math.random() * 4 + 2}px`,
    height: `${Math.random() * 4 + 2}px`,
    background: "#ff0000",
    borderRadius: "50%",
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.2,
    animation: `float${index % 3} ${
      Math.random() * 10 + 10
    }s infinite ease-in-out`,
    boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
  }),
  headerContent: (isTablet) => ({
    margin: "0 auto",
    display: "flex",
    flexDirection: isTablet ? "row" : "column",
    alignItems: "center",
    columnGap: "40px",
    position: "relative",
    zIndex: 2,
  }),
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ff0000",
    boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)",
    animation: "pulse 3s infinite ease-in-out",
  },
  name: {
    fontSize: "48px",
    color: "#ff0000",
    marginBottom: "10px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 15px #ff0000, 0 0 30px rgba(255, 0, 0, 0.5)",
    animation: "glow 2s infinite alternate",
  },
  role: {
    fontSize: "24px",
    color: "#b0b0b0",
    fontStyle: "italic",
    marginBottom: "5px",
  },
  secondaryData: {
    fontSize: "18px",
    color: "#888",
    fontStyle: "italic",
  },

  // Estilos de Info
  info: {
    margin: "60px 40px",
  },
  sectionTitle: {
    fontSize: "32px",
    color: "#ff0000",
    marginBottom: "20px",
    fontWeight: "700",
  },
  bio: {
    fontSize: "18px",
    color: "#b0b0b0",
    lineHeight: "1.8",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  skillTag: {
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "16px",
    fontWeight: "600",
    border: "1px solid #ff0000",
  },

  // Estilos de Sections
  sections: {
    margin: "70px 40px",
  },
  section: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    border: "2px solid #333",
    borderRadius: "12px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    maxWidth: "1500px",
  },
  toggleButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
    width: "100%",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "30px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
  },
  clubToggleButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
    width: "100%",
    background:
      "linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, rgba(184, 134, 11, 0.1) 100%)",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "30px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    boxShadow:
      "0 0 20px rgba(184, 134, 11, 0.2), inset 0 0 20px rgba(255, 0, 0, 0.1)",
    animation: "pulse 3s infinite ease-in-out",
  },
  clubToggleButtonHover: {
    boxShadow:
      "0 0 30px rgba(255, 215, 0, 0.4), inset 0 0 30px rgba(255, 0, 0, 0.2)",
  },
  clubButtonContent: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },
  clubIcon: {
    fontSize: "28px",
  },
  clubBadge: {
    fontSize: "12px",
    color: "#b8860b",
    background: "rgba(255, 215, 0, 0.1)",
    padding: "4px 10px",
    borderRadius: "12px",
    border: "1px solid rgba(184, 134, 11, 0.4)",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  buttonText: {
    fontSize: "24px",
    color: "#ff0000",
    fontWeight: "700",
    textShadow: "0 0 10px rgba(255, 0, 0, 0.3)",
    transition: "all 0.3s ease",
    textAlign: "left",
  },
  buttonTextHover: {
    textShadow: "0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.5)",
    color: "#ff3333",
  },
  clubButtonText: {
    fontSize: "24px",
    color: "#ff0000",
    fontWeight: "700",
    textShadow:
      "0 0 10px rgba(255, 0, 0, 0.3), 0 0 15px rgba(184, 134, 11, 0.2)",
    transition: "all 0.3s ease",
  },
  clubButtonTextHover: {
    textShadow:
      "0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5)",
    color: "#ff3333",
  },
  arrow: {
    fontSize: "20px",
    color: "#ff0000",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  arrowHover: {
    transform: "scale(1.3)",
    filter: "drop-shadow(0 0 8px rgba(255, 0, 0, 0.8))",
  },
  expandable: (isOpen) => ({
    maxHeight: isOpen ? 350 : 0,
    overflow: "hidden",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  }),
  list: {
    listStyle: "none",
    padding: "15px 30px 15px 30px",
  },
  listItem: {
    marginBottom: "12px",
  },
  link: {
    display: "block",
    width: "100%",
    fontSize: "18px",
    color: "#b0b0b0",
    textDecoration: "none",
    padding: "16px 20px",
    background:
      "linear-gradient(90deg, rgba(139, 0, 0, 0.1) 0%, rgba(139, 0, 0, 0.05) 100%)",
    border: "1px solid rgba(139, 0, 0, 0.3)",
    borderRadius: "8px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
  },
  linkHover: {
    color: "#ff3333",
    background:
      "linear-gradient(90deg, rgba(139, 0, 0, 0.3) 0%, rgba(139, 0, 0, 0.15) 100%)",
    border: "1px solid rgba(255, 0, 0, 0.6)",
    transform: "translateX(8px)",
    boxShadow:
      "0 0 20px rgba(255, 0, 0, 0.3), inset 0 0 20px rgba(255, 0, 0, 0.1)",
    textShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
  },
  linkIcon: {
    marginRight: "12px",
    fontSize: "20px",
    display: "inline-block",
    transition: "all 0.3s ease",
  },
  linkIconHover: {
    transform: "scale(1.2) rotate(5deg)",
    filter: "drop-shadow(0 0 5px rgba(255, 0, 0, 0.6))",
  },
};

// Animaciones CSS para transiciones suaves
export const nicolasAnimations = `
@keyframes float0 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -20px) rotate(90deg);
  }
  50% {
    transform: translate(-10px, -40px) rotate(180deg);
  }
  75% {
    transform: translate(-20px, -20px) rotate(270deg);
  }
}

@keyframes float1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-15px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(15px, -15px) rotate(240deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(20px, -50px) rotate(180deg);
  }
}

@keyframes glow {
  from {
    text-shadow: 0 0 15px #ff0000, 0 0 30px rgba(255, 0, 0, 0.5);
  }
  to {
    text-shadow: 0 0 25px #ff0000, 0 0 50px rgba(255, 0, 0, 0.8), 0 0 70px rgba(255, 0, 0, 0.4);
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 0, 0, 0.8), 0 0 70px rgba(255, 0, 0, 0.4);
  }
}
`;
