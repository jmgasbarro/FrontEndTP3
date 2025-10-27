export const germanStyles = {
  // HEADER
  header: {
    backgroundImage:
      "linear-gradient(135deg, rgba(26,10,26,0.9) 0%, rgba(45,10,26,0.9) 100%), url('/ger/fondo_perfil.png')",
    backgroundSize: "cover",
    backgroundPosition: "center 20%",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay",
    padding: "80px 40px",
    borderBottom: "3px solid #8b0000",
    boxShadow: "0 0 40px rgba(255, 0, 0, 0.3)",
  },

  headerContent: (isTablet) => ({
    margin: "0 auto",
    display: "flex",
    flexDirection: isTablet ? "row" : "column",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "40px",
    rowGap: "20px",
  }),

  profileImage: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center 20%",
    border: "4px solid #ff0000",
    boxShadow: "0 0 40px rgba(255, 0, 0, 0.6)",
    transition: "transform 0.4s ease",
  },

  name: {
    fontSize: "52px",
    color: "#ff0000",
    marginBottom: "10px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 20px #ff0000",
  },

  role: {
    fontSize: "24px",
    color: "#b0b0b0",
    fontStyle: "italic",
  },

  // INFO
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

  // SECTIONS
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
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    marginTop: "20px",
    padding: "0 10px",
  },
  videoCard: {
    background: "linear-gradient(135deg, #1a0a1a 0%, #2a0a1a 100%)",
    border: "2px solid #8b0000",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 0 15px rgba(255, 0, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  videoCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 0 25px rgba(255, 0, 0, 0.6)",
  },
  videoTitle: {
    color: "#ff0000",
    fontSize: "18px",
    marginBottom: "10px",
    textAlign: "center",
    fontFamily: "Creepster, cursive",
  },
  videoFrame: {
    borderRadius: "8px",
    transition: "transform 0.3s ease",
  },
};
