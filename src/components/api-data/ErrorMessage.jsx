"use client";

export default function ErrorMessage({ error, fetchComics }) {
  return (
    <div style={styles.errorContainer}>
      <p style={styles.errorText}>{error}</p>
      <button style={styles.retryButton} onClick={fetchComics}>
        Reintentar
      </button>
    </div>
  );
}

const styles = {
  errorContainer: {
    textAlign: "center",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    border: "2px solid #8b0000",
    borderRadius: "12px",
  },
  errorText: {
    fontSize: "18px",
    color: "#ff6666",
    marginBottom: "20px",
  },
  retryButton: {
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    border: "2px solid #ff0000",
    padding: "12px 30px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
};
