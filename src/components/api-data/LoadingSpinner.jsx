export default function LoadingSpinner() {
  return (
    <div style={styles.loadingContainer}>
      <div style={styles.spinner}></div>
      <p style={styles.loadingText}>Cargando series...</p>
    </div>
  );
}

const styles = {
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 20px",
  },
  spinner: {
    width: "60px",
    height: "60px",
    border: "4px solid #333",
    borderTop: "4px solid #ff0000",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#888",
  },
};
