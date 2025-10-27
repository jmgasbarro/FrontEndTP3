// src/containers/pages/AntiHeroesPage.jsx
"use client";

import AntiHeroesHeader from "../../components/antiheroes/AntiHeroesHeader";
import AntiHeroesControls from "../../components/antiheroes/AntiHeroesControls";
import AntiHeroesGrid from "../../components/antiheroes/AntiHeroesGrid";
import Pagination from "../../components/antiheroes/Pagination"; // 🆕 Importar componente de paginación
import { useAntiHeroes } from "../../components/antiheroes/useAntiHeroes";

export default function AntiHeroesPage() {
  const {
    filteredHeroes,
    totalHeroes,
    selectedUniverse,
    setSelectedUniverse,
    searchTerm,
    setSearchTerm,
    universes,
    page, // 🆕
    totalPaginas, // 🆕
    handlePrevPage, // 🆕
    handleNextPage, // 🆕
  } = useAntiHeroes();

  return (
    <div style={styles.container}>
      <section style={styles.content}>
        <AntiHeroesHeader totalHeroes={totalHeroes} />
        <AntiHeroesControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedUniverse={selectedUniverse}
          setSelectedUniverse={setSelectedUniverse}
          universes={universes}
        />
        <AntiHeroesGrid
          filteredHeroes={filteredHeroes}
          totalHeroes={totalHeroes}
          setSearchTerm={setSearchTerm}
          setSelectedUniverse={setSelectedUniverse}
        />
        {/* 🆕 Componente de paginación */}
        {totalPaginas > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPaginas}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
          />
        )}
      </section>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
  },
  content: {
    margin: "0 auto",
    padding: "clamp(30px, 6vw, 60px) clamp(20px, 4vw, 40px)",
    maxWidth: "1400px",
  },
};