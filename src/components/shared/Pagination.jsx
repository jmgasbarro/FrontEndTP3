"use client";

import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function Pagination({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}) {
  const { isDark } = useTheme();
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.pagination}>
      <button
        style={{
          ...styles.paginationButton(isDark),
          // Deshabilita si currentPage es 1
          ...(currentPage === 1
            ? styles.disabledButton(isDark)
            : hovered === "prev"
            ? styles.paginationButtonHover(isDark)
            : {}),
        }}
        onClick={onPrevPage}
        disabled={currentPage === 1}
        onMouseEnter={() => setHovered("prev")}
        onMouseLeave={() => setHovered(null)}
      >
        ← Anterior
      </button>

      <span style={styles.pageIndicator(isDark)}>
        Página {currentPage} de {totalPages}
      </span>

      <button
        style={{
          ...styles.paginationButton(isDark),
          // Deshabilita si currentPage es igual a totalPages
          ...(currentPage === totalPages
            ? styles.disabledButton(isDark)
            : hovered === "next"
            ? styles.paginationButtonHover(isDark)
            : {}),
        }}
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        onMouseEnter={() => setHovered("next")}
        onMouseLeave={() => setHovered(null)}
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
  paginationButton: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)", // Fondo claro
    color: "#fff",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: isDark ? "#ff0000" : "#b71c1c", // Borde claro
    padding: "8px 12px",
    fontSize: "16px",
    lineHeight: "1",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  }),
  paginationButtonHover: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #b30000 0%, #dc0000 100%)"
      : "linear-gradient(90deg, #c62828 0%, #b71c1c 100%)",
    borderColor: isDark ? "#ff3333" : "#a31515",
    boxShadow: isDark
      ? "0 0 10px rgba(255, 0, 0, 0.3)"
      : "0 0 10px rgba(211, 47, 47, 0.2)",
    transform: "scale(1.03)",
  }),
  disabledButton: (isDark) => ({
    background: isDark ? "#333" : "#e0e0e0", // Fondo deshabilitado claro
    borderColor: isDark ? "#666" : "#ccc", // Borde deshabilitado claro
    color: isDark ? "#888" : "#aaa", // Texto deshabilitado claro
    cursor: "not-allowed",
    transform: "none", // Asegura que no haya transform en disabled
    boxShadow: "none", // Asegura que no haya sombra en disabled
  }),
  pageIndicator: (isDark) => ({
    fontSize: "16px",
    color: isDark ? "#888" : "#666", // Texto claro
    fontWeight: "600",
  }),
};
