// Estilos personalizados para el perfil de Nicolás

export const nicolasStyles = {
  // Estilos del Header
  header: (isDark) => ({
    background: isDark
      ? `
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
    `
      : `
      linear-gradient(135deg, rgba(255, 235, 238, 0.95) 0%, rgba(255, 240, 240, 0.95) 100%),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(211, 47, 47, 0.03) 10px,
        rgba(211, 47, 47, 0.03) 20px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 10px,
        rgba(211, 47, 47, 0.03) 10px,
        rgba(211, 47, 47, 0.03) 20px
      )
    `,
    padding: "60px 40px",
    borderBottom: isDark ? "3px solid #8b0000" : "3px solid #d32f2f",
    position: "relative",
    overflow: "hidden",
    boxShadow: isDark
      ? "inset 0 0 100px rgba(139, 0, 0, 0.2)"
      : "inset 0 0 100px rgba(211, 47, 47, 0.1)",
  }),
  particlesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1,
  },
  particle: (index, isDark) => ({
    position: "absolute",
    width: `${Math.random() * 4 + 2}px`,
    height: `${Math.random() * 4 + 2}px`,
    background: isDark ? "#ff0000" : "#d32f2f",
    borderRadius: "50%",
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.2,
    animation: `float${index % 3} ${
      Math.random() * 10 + 10
    }s infinite ease-in-out`,
    boxShadow: isDark
      ? "0 0 10px rgba(255, 0, 0, 0.5)"
      : "0 0 10px rgba(211, 47, 47, 0.3)",
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
  profileImage: (isDark) => ({
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: isDark ? "4px solid #ff0000" : "4px solid #d32f2f",
    boxShadow: isDark
      ? "0 0 30px rgba(255, 0, 0, 0.5)"
      : "0 0 30px rgba(211, 47, 47, 0.5)",
    animation: isDark ? "pulse 3s infinite ease-in-out" : "",
  }),
  name: (isDark) => ({
    fontSize: "48px",
    color: isDark ? "#ff0000" : "#b71c1c", // Color más oscuro para texto en fondo claro
    marginBottom: "10px",
    fontFamily: "Creepster, cursive",
    textShadow: isDark
      ? "0 0 15px #ff0000, 0 0 30px rgba(255, 0, 0, 0.5)"
      : "0 0 10px rgba(211, 47, 47, 0.5)",
    animation: isDark ? "glow 2s infinite alternate" : "",
  }),
  role: (isDark) => ({
    fontSize: "24px",
    color: isDark ? "#b0b0b0" : "#4a4a4a", // var(--text-secondary)
    fontStyle: "italic",
    marginBottom: "5px",
  }),
  secondaryData: {
    fontSize: "18px",
    fontStyle: "italic",
  },

  // Estilos de Info
  info: {
    margin: "60px 40px",
  },
  sectionTitle: (isDark) => ({
    fontSize: "32px",
    color: isDark ? "#ff0000" : "#b71c1c",
    marginBottom: "20px",
    fontWeight: "700",
  }),
  bio: {
    fontSize: "18px",
    lineHeight: "1.8",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "15px",
  },
  skillTag: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    color: "#fff", // El texto blanco funciona en ambos fondos rojos
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "16px",
    fontWeight: "600",
    border: isDark ? "1px solid #ff0000" : "1px solid #b71c1c",
  }),

  // Estilos de Sections
  sections: {
    margin: "70px 40px",
  },
  section: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)"
      : "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
    border: isDark ? "2px solid #333" : "2px solid #e0e0e0",
    borderRadius: "12px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    maxWidth: "1500px",
  }),
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
  clubToggleButton: (isDark) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
    width: "100%",
    background: isDark
      ? "linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, rgba(184, 134, 11, 0.1) 100%)"
      : "linear-gradient(135deg, rgba(211, 47, 47, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%)",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "30px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    boxShadow:
      "0 0 20px rgba(184, 134, 11, 0.2), inset 0 0 20px rgba(255, 0, 0, 0.1)",
    animation: isDark ? "pulse 3s infinite ease-in-out" : "",
  }),
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
  clubBadge: (isDark) => ({
    fontSize: "12px",
    color: "#b8860b", // El oro se ve bien en ambos
    background: isDark ? "rgba(255, 215, 0, 0.1)" : "rgba(255, 215, 0, 0.15)",
    padding: "4px 10px",
    borderRadius: "12px",
    border: isDark
      ? "1px solid rgba(184, 134, 11, 0.4)"
      : "1px solid rgba(184, 134, 11, 0.6)",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
  }),
  buttonText: (isDark) => ({
    fontSize: "24px",
    color: isDark ? "#ff0000" : "#b71c1c",
    fontWeight: "700",
    textShadow: isDark
      ? "0 0 10px rgba(255, 0, 0, 0.3)"
      : "0 0 10px rgba(211, 47, 47, 0.2)",
    transition: "all 0.3s ease",
    textAlign: "left",
  }),
  buttonTextHover: (isDark) => ({
    textShadow: isDark
      ? "0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.5)"
      : "0 0 20px rgba(211, 47, 47, 0.5), 0 0 30px rgba(211, 47, 47, 0.3)",
    color: isDark ? "#ff3333" : "#d32f2f",
  }),
  clubButtonText: (isDark) => ({
    fontSize: "24px",
    color: isDark ? "#ff0000" : "#b71c1c",
    fontWeight: "700",
    textShadow: isDark
      ? "0 0 10px rgba(255, 0, 0, 0.3), 0 0 15px rgba(184, 134, 11, 0.2)"
      : "0 0 10px rgba(211, 47, 47, 0.2), 0 0 15px rgba(184, 134, 11, 0.1)",
    transition: "all 0.3s ease",
  }),
  clubButtonTextHover: (isDark) => ({
    textShadow: isDark
      ? "0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5)"
      : "0 0 20px rgba(211, 47, 47, 0.5), 0 0 30px rgba(255, 215, 0, 0.3)",
    color: isDark ? "#ff3333" : "#d32f2f",
  }),
  arrow: (isDark) => ({
    fontSize: "20px",
    color: isDark ? "#ff0000" : "#d32f2f",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  }),
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
  link: (isDark) => ({
    display: "block",
    width: "100%",
    fontSize: "18px",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    textDecoration: "none",
    padding: "16px 20px",
    background: isDark
      ? "linear-gradient(90deg, rgba(139, 0, 0, 0.1) 0%, rgba(139, 0, 0, 0.05) 100%)"
      : "linear-gradient(90deg, rgba(211, 47, 47, 0.05) 0%, rgba(211, 47, 47, 0.02) 100%)",
    border: isDark
      ? "1px solid rgba(139, 0, 0, 0.3)"
      : "1px solid rgba(211, 47, 47, 0.2)",
    borderRadius: "8px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
  }),
  linkHover: (isDark) => ({
    color: isDark ? "#ff3333" : "#b71c1c",
    background: isDark
      ? "linear-gradient(90deg, rgba(139, 0, 0, 0.3) 0%, rgba(139, 0, 0, 0.15) 100%)"
      : "linear-gradient(90deg, rgba(211, 47, 47, 0.15) 0%, rgba(211, 47, 47, 0.1) 100%)",
    border: isDark
      ? "1px solid rgba(255, 0, 0, 0.6)"
      : "1px solid rgba(211, 47, 47, 0.5)",
    transform: "translateX(8px)",
    boxShadow: isDark
      ? "0 0 20px rgba(255, 0, 0, 0.3), inset 0 0 20px rgba(255, 0, 0, 0.1)"
      : "0 0 20px rgba(211, 47, 47, 0.2), inset 0 0 20px rgba(211, 47, 47, 0.05)",
    textShadow: isDark
      ? "0 0 10px rgba(255, 0, 0, 0.5)"
      : "0 0 10px rgba(211, 47, 47, 0.3)",
  }),
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
    text-shadow: 0 0 15px rgba(255, 0, 0, 0.2);
  }
  to {
    text-shadow: 0 0 25px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 0, 0, 0.3);
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 30px rgba(255, 0, 0, 0.05);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 0, 0, 0.2), 0 0 60px rgba(255, 0, 0, 0.1);
  }
}
`;
