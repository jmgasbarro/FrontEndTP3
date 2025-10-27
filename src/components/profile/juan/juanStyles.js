// src/components/profile/juan/juanStyles.js

export const juanStyles = {
  // Estilos del Header con imagen de fondo + partículas
  header: {
  background: "#0a0a0a",
  padding: "60px 40px",  // 🆕 Más chico
  borderBottom: "3px solid #8b0000",
  position: "relative",
  overflow: "hidden",
  minHeight: "auto",  // 🆕 Altura automática
},
  
  // Imagen de fondo con efecto zoom suave
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url('/juan/header-background.jpg')", // 🆕 Tu imagen aquí
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    animation: "zoomIn 20s ease-in-out infinite alternate",
    zIndex: 0,
  },
  
  // Overlay oscuro para mejorar legibilidad del texto
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(10, 10, 10, 0.85) 0%, rgba(26, 10, 26, 0.85) 50%, rgba(45, 10, 26, 0.85) 100%)",
    zIndex: 1,
  },
  
  // Contenedor de partículas
  particlesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 2,
  },
  
  // Partículas individuales
  particle: {
    position: "absolute",
    bottom: "-10px",
    width: "4px",
    height: "4px",
    background: "#ff0000",
    borderRadius: "50%",
    boxShadow: "0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000",
    animation: "float 10s infinite ease-in-out",
    opacity: 0.7,
  },
  
  headerContent: (isTablet) => ({
    margin: "0 auto",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: isTablet ? "row" : "column",
    alignItems: "center",
    columnGap: "40px",
    position: "relative",
    zIndex: 3,
  }),
  
  profileImage: {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #ff0000",
  boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)",
  transition: "transform 0.3s ease",
  cursor: "pointer",
},
  
  name: {
    fontSize: "52px",
    color: "#ff0000",
    marginBottom: "10px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px rgba(255, 0, 0, 0.5)",
    animation: "glow 2s ease-in-out infinite alternate",
    letterSpacing: "2px",
  },
  
  role: {
    fontSize: "26px",
    color: "#e0e0e0",
    fontStyle: "italic",
    marginBottom: "8px",
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
  },
  
  location: {
    fontSize: "18px",
    color: "#b0b0b0",
    marginBottom: "5px",
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
  },
  
  age: {
    fontSize: "18px",
    color: "#b0b0b0",
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
  },

  // Estilos de Info
  info: {
    padding: "60px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  
  sectionTitle: {
    fontSize: "32px",
    color: "#ff0000",
    marginBottom: "20px",
    fontWeight: "700",
    position: "relative",
    display: "inline-block",
  },
  
  bio: {
    fontSize: "18px",
    color: "#b0b0b0",
    lineHeight: "1.8",
  },
  
  // Skills Container
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  
  skillBadge: {
    background: "linear-gradient(135deg, #8b0000 0%, #ff0000 100%)",
    color: "#fff",
    padding: "12px 28px",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "600",
    border: "2px solid #ff0000",
    boxShadow: "0 4px 10px rgba(255, 0, 0, 0.3)",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "default",
  },

  // Estilos de Sections
  sections: {
    padding: "0 40px 60px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  
  section: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "30px",
  },
  
  toggleButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "0",
  },
  
  buttonText: {
    fontSize: "24px",
    color: "#ff0000",
    fontWeight: "700",
  },
  
  arrow: {
    fontSize: "20px",
    color: "#ff0000",
  },
  
  // Grid de tarjetas
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  },
  
  card: {
    cursor: "pointer",
    transition: "transform 0.3s ease",
    textAlign: "center",
  },
  
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "2px solid #333",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
  },
  
  cardTitle: {
    fontSize: "14px",
    color: "#b0b0b0",
    marginTop: "10px",
    fontWeight: "600",
  },
  
  // Contact List
  contactList: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0 0 0",
  },
  
  contactItem: {
    fontSize: "16px",
    color: "#b0b0b0",
    marginBottom: "15px",
  },
  
  contactLink: {
    color: "#ff0000",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },

  // Modal
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  
  modalContent: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    border: "3px solid #ff0000",
    borderRadius: "16px",
    maxWidth: "600px",
    width: "90%",
    maxHeight: "90vh",
    overflowY: "auto",
    padding: "40px 30px",
    position: "relative",
    boxShadow: "0 0 50px rgba(255, 0, 0, 0.5)",
  },
  
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "#ff0000",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    fontSize: "20px",
    cursor: "pointer",
    transition: "background 0.3s ease",
    zIndex: 2001,
  },
  
  modalImage: {
    width: "200px",
    height: "280px",
    objectFit: "cover",
    borderRadius: "8px",
    margin: "0 auto 20px",
    display: "block",
    border: "2px solid #333",
  },
  
  modalTitle: {
    fontSize: "24px",
    color: "#ff0000",
    marginBottom: "15px",
    textAlign: "center",
    fontWeight: "700",
  },
  
  modalDescription: {
    fontSize: "16px",
    color: "#b0b0b0",
    lineHeight: "1.6",
    marginBottom: "25px",
    textAlign: "center",
  },
  
  mediaContainer: {
    marginTop: "25px",
  },
  
  mediaTitle: {
    fontSize: "18px",
    color: "#ff0000",
    marginBottom: "15px",
    fontWeight: "600",
  },
  
  iframe: {
    borderRadius: "8px",
    border: "2px solid #333",
  },
};