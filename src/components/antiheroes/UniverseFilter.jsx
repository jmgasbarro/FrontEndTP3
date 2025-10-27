"use client";

export default function UniverseFilter({
  selectedUniverse,
  setSelectedUniverse,
  universes,
}) {
  return (
    <div style={styles.filterContainer}>
      <label style={styles.filterLabel}>Filtrar por universo:</label>
      <div style={styles.filterButtons}>
        {universes.map((universe) => (
          <button
            key={universe}
            onClick={() => setSelectedUniverse(universe)}
            style={{
              ...styles.filterButton,
              ...(selectedUniverse === universe
                ? styles.filterButtonActive
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
  filterLabel: {
    fontSize: "16px",
    color: "#ff6666",
    fontWeight: "600",
  },
  filterButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  filterButton: {
    padding: "10px 20px",
    fontSize: "14px",
    background: "transparent",
    border: "2px solid #8b0000",
    borderRadius: "6px",
    color: "#e0e0e0",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
  },
  filterButtonActive: {
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    borderColor: "#ff0000",
    boxShadow: "0 0 15px rgba(139, 0, 0, 0.5)",
  },
};
