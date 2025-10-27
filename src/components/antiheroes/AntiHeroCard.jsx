export default function AntiHeroCard({ hero }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardImageContainer}>
        <img
          src={hero.image || "/placeholder.svg"}
          alt={hero.name}
          style={styles.cardImage}
        />
        <div style={styles.universeBadge}>{hero.universe}</div>
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardName}>{hero.name}</h3>
        <p style={styles.cardRealName}>{hero.realName}</p>
        <p style={styles.cardDescription}>{hero.description}</p>
        <div style={styles.powersSection}>
          <h4 style={styles.powersTitle}>Poderes:</h4>
          <div style={styles.powers}>
            {hero.powers.map((power, index) => (
              <span key={index} style={styles.powerTag}>
                {power}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    border: "2px solid #333",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  },
  cardImageContainer: {
    position: "relative",
    width: "100%",
    height: "250px",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  universeBadge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    padding: "6px 15px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
    border: "1px solid #ff0000",
    boxShadow: "0 2px 10px rgba(139, 0, 0, 0.5)",
  },
  cardContent: {
    padding: "25px",
  },
  cardName: {
    fontSize: "24px",
    color: "#ff0000",
    marginBottom: "5px",
    fontWeight: "700",
  },
  cardRealName: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "15px",
    fontStyle: "italic",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#b0b0b0",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  powersSection: {
    borderTop: "1px solid #333",
    paddingTop: "15px",
  },
  powersTitle: {
    fontSize: "14px",
    color: "#ff6666",
    marginBottom: "10px",
    fontWeight: "600",
  },
  powers: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  powerTag: {
    background: "rgba(139, 0, 0, 0.3)",
    color: "#ff6666",
    padding: "5px 12px",
    borderRadius: "15px",
    fontSize: "12px",
    border: "1px solid #8b0000",
  },
};
