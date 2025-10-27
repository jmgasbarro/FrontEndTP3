// src/components/antiheroes/Pagination.jsx

export default function Pagination({ currentPage, totalPages, onPrevPage, onNextPage }) {
  return (
    <div style={styles.paginationContainer}>
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        style={{
          ...styles.button,
          ...(currentPage === 1 ? styles.buttonDisabled : {}),
        }}
      >
        ← Anterior
      </button>

      <span style={styles.pageInfo}>
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        style={{
          ...styles.button,
          ...(currentPage === totalPages ? styles.buttonDisabled : {}),
        }}
      >
        Siguiente →
      </button>
    </div>
  );
}

const styles = {
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "40px",
    padding: "20px 0",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #8b0000 0%, #ff0000 100%)",
    border: "2px solid #ff0000",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontFamily: "'Creepster', cursive",
  },
  buttonDisabled: {
    background: "#333",
    border: "2px solid #555",
    color: "#666",
    cursor: "not-allowed",
    opacity: 0.5,
  },
  pageInfo: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#ff6666",
    fontFamily: "'Creepster', cursive",
  },
};