// src/components/api-data/Pagination.jsx

export default function Pagination({ page, handlePrevPage, handleNextPage, totalPaginas }) {
  return (
    <div style={styles.pagination}>
      <button
        style={{...styles.paginationButton, ...(page === 1 && styles.disabledButton)}}
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        ← Anterior
      </button>

      <span style={styles.pageIndicator}>Página {page} de {totalPaginas}</span>

      <button
        style={{...styles.paginationButton, ...(page === totalPaginas && styles.disabledButton)}}
        onClick={handleNextPage}
        disabled={page === totalPaginas}
      >
        Siguiente →
      </button>
    </div>
  );
}

const styles = {
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "40px",
  },
  paginationButton: {
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    border: "2px solid #ff0000",
    padding: "8px 12px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  disabledButton: {
    background: "#333",
    borderColor: "#666",
    color: "#888",
    cursor: "not-allowed",
  },
  pageIndicator: {
    fontSize: "16px",
    color: "#888",
    fontWeight: "600",
  },
};
