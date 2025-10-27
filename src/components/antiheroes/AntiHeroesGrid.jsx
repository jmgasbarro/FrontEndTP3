"use client";

import AntiHeroCard from "./AntiHeroCard";

export default function AntiHeroesGrid({
  filteredHeroes,
  totalHeroes,
  setSearchTerm,
  setSelectedUniverse,
}) {
  return (
    <>
      <div style={styles.stats}>
        <p style={styles.statsText}>
          Mostrando {filteredHeroes.length} de {totalHeroes} antiheroes
        </p>
      </div>

      <div style={styles.grid}>
        {filteredHeroes.map((hero) => (
          <AntiHeroCard key={hero.id} hero={hero} />
        ))}
      </div>

      {filteredHeroes.length === 0 && (
        <div style={styles.noResults}>
          <p style={styles.noResultsText}>
            No se encontraron antiheroes con los criterios seleccionados
          </p>
          <button
            style={styles.resetButton}
            onClick={() => {
              setSearchTerm("");
              setSelectedUniverse("all");
            }}
          >
            Resetear filtros
          </button>
        </div>
      )}
    </>
  );
}

const styles = {
  stats: {
    textAlign: "center",
    marginBottom: "30px",
  },
  statsText: {
    fontSize: "16px",
    color: "#888",
    fontStyle: "italic",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "30px",
  },
  noResults: {
    textAlign: "center",
    padding: "60px 20px",
  },
  noResultsText: {
    fontSize: "20px",
    color: "#888",
    marginBottom: "20px",
  },
  resetButton: {
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
