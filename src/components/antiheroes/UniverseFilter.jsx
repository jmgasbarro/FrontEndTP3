"use client";

import { useState } from "react";

export default function UniverseFilter({
  selectedUniverse,
  setSelectedUniverse,
  universes,
  isDark,
}) {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div style={styles.filterContainer}>
      <label style={styles.filterLabel(isDark)}>Filtrar por universo:</label>
      <div style={styles.filterButtons}>
        {universes.map((universe) => (
          <button
            key={universe}
            onClick={() => setSelectedUniverse(universe)}
            onMouseEnter={() => setHoveredButton(universe)}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              ...styles.filterButton(isDark), // <-- Corregido
              ...(selectedUniverse === universe
                ? styles.filterButtonActive(isDark)
                : hoveredButton === universe
                ? styles.filterButtonHover(isDark)
                : {}),
            }}
          >
            {universe === "all" ? "Todos" : universe}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  filterContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  filterLabel: (isDark) => ({
    fontSize: "16px",
    color: isDark ? "#ff6666" : "#b71c1c",
    fontWeight: "600",
  }),
  filterButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  filterButton: (isDark) => ({
    padding: "10px 20px",
    fontSize: "14px",
    background: "transparent",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: isDark ? "#8b0000" : "#d32f2f",

    borderRadius: "6px",
    color: isDark ? "#e0e0e0" : "#d32f2f",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
  }),

  filterButtonActive: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    borderColor: isDark ? "#ff0000" : "#b71c1c",
    color: "#fff",
    boxShadow: isDark
      ? "0 0 15px rgba(139, 0, 0, 0.5)"
      : "0 0 15px rgba(211, 47, 47, 0.3)",
  }),
  filterButtonHover: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.2)" : "rgba(211, 47, 47, 0.05)",
    borderColor: isDark ? "#ff6666" : "#b71c1c",
    color: isDark ? "#ff6666" : "#b71c1c",
  }),
};
