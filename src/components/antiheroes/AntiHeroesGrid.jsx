"use client";

import { useState } from "react";
import AntiHeroCard from "./AntiHeroCard";
import ImageLightbox from "../shared/ImageLightbox";
import { useTheme } from "../../hooks/useTheme";

export default function AntiHeroesGrid({
  filteredHeroes,
  totalHeroes,
  setSearchTerm,
  setSelectedUniverse,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isDark } = useTheme();

  return (
    <>
      <div style={styles.stats}>
        <p style={styles.statsText}>
          Mostrando {filteredHeroes.length} de {totalHeroes} antiheroes
        </p>
      </div>

      <div style={styles.grid}>
        {filteredHeroes.map((hero) => (
          <AntiHeroCard
            key={hero.id}
            hero={hero}
            onImageClick={setSelectedImage}
          />
        ))}
      </div>

      {filteredHeroes.length === 0 && (
        <div style={styles.noResults}>
          <p style={styles.noResultsText(isDark)}>
            No se encontraron antiheroes con los criterios seleccionados
          </p>
          <button
            style={styles.resetButton(isDark)}
            onClick={() => {
              setSearchTerm("");
              setSelectedUniverse("all");
            }}
          >
            Resetear filtros
          </button>
        </div>
      )}

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
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
    fontStyle: "italic",
    transition: "color 0.3s ease",
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
  noResultsText: (isDark) => ({
    fontSize: "20px",
    color: isDark ? "#888" : "#666",
    marginBottom: "20px",
    transition: "color 0.3s ease",
  }),
  resetButton: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    color: "#fff",
    border: isDark ? "2px solid #ff0000" : "2px solid #d32f2f",
    padding: "12px 30px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  }),
};
