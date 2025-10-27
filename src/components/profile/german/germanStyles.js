// Estilos personalizados para el perfil de Germán
export const germanStyles = {
  // Estilos del Header
  header: {
    background: "linear-gradient(135deg, #1a0a1a 0%, #2d0a1a 100%)",
    padding: "60px 40px",
    borderBottom: "3px solid #8b0000",
  },
  headerContent: (isTablet) => ({
    margin: "0 auto",
    display: "flex",
    flexDirection: isTablet ? "row" : "column",
    alignItems: "center",
    columnGap: "40px",
  }),
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center top",
    border: "4px solid #ff0000",
    boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)",
  },
  name: {
    fontSize: "48px",
    color: "#ff0000",
    marginBottom: "10px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 15px #ff0000",
  },
  role: {
    fontSize: "24px",
    color: "#b0b0b0",
    fontStyle: "italic",
  },

  // Estilos de Info
  info: {
    padding: "60px 40px",
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
    padding: "0 40px 60px",
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
  list: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0 0 0",
  },
  listItem: {
    marginBottom: "12px",
  },
  link: {
    fontSize: "16px",
    color: "#b0b0b0",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
};