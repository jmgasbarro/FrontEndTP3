export default function ComicCard({ comic }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardImageContainer}>
        <img
          src={comic.thumbnail || "/placeholder.svg?height=300&width=200"}
          alt={comic.title}
          style={styles.cardImage}
          onError={(e) => {
            e.target.src = "/placeholder.svg?height=300&width=200";
          }}
        />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardTitle}>{comic.title}</h3>
        <p style={styles.cardDescription}>
          {comic.description.length > 150
            ? comic.description.substring(0, 150) + "..."
            : comic.description}
        </p>
        <div style={styles.cardFooter}>
          <span style={styles.cardId}>ID: {comic.id}</span>
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
    width: "100%",
    height: "300px",
    overflow: "hidden",
    background: "#0a0a0a",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  cardContent: {
    padding: "20px",
  },
  cardTitle: {
    fontSize: "18px",
    color: "#ff0000",
    marginBottom: "12px",
    fontWeight: "700",
    lineHeight: "1.4",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#b0b0b0",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  cardFooter: {
    borderTop: "1px solid #333",
    paddingTop: "12px",
  },
  cardId: {
    fontSize: "12px",
    color: "#666",
    fontStyle: "italic",
  },
};
