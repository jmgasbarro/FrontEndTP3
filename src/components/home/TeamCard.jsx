import { Link } from "react-router-dom";

export default function TeamCard({ member }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardImageContainer}>
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          style={{...styles.cardImage,
          objectPosition: member.id === "german" ? "center 10%" : "center",}}
        />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardName}>{member.name}</h3>
        <p style={styles.cardRole}>{member.role}</p>
        <p style={styles.cardDescription}>{member.description}</p>
        <Link to={`/profile/${member.id}`} style={styles.cardLink}>
          Ver perfil
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    borderRadius: "12px",
    overflow: "hidden",
    border: "2px solid #333",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  },
  cardImageContainer: {
    width: "100%",
    height: "250px",
    overflow: "hidden",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  cardContent: {
    padding: "25px",
  },
  cardName: {
    fontSize: "24px",
    color: "#ff0000",
    marginBottom: "8px",
    fontWeight: "700",
  },
  cardRole: {
    fontSize: "16px",
    color: "#888",
    marginBottom: "12px",
    fontStyle: "italic",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#b0b0b0",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  cardLink: {
    display: "inline-block",
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    padding: "10px 25px",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    border: "1px solid #ff0000",
    transition: "all 0.3s ease",
  },
};
