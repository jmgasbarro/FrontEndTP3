// src/components/antiheroes/useAntiHeroes.js
"use client";

import { useState, useEffect, useMemo } from "react";
import { useMediaQuery } from "../../hooks/MediaQuery";
import antiHeroesData from "../../data/antiheroes.json";

export function useAntiHeroes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUniverse, setSelectedUniverse] = useState("Todos");
  const [page, setPage] = useState(1);

  // 🆕 Detectar tamaño de pantalla
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  // 🆕 Calcular héroes por página según el ancho de la ventana
  const getHeroesPorPagina = () => {
    if (isMobile) return 6; // Móvil: 1 columna x 6 filas
    if (isTablet) return 8; // Tablet: 2 columnas x 4 filas
    
    // Desktop: calcular según el ancho real de la ventana
    const width = window.innerWidth;
    if (width >= 1920) return 15; // Pantallas muy grandes: 5 columnas x 3 filas
    if (width >= 1600) return 12; // Pantallas grandes: 4 columnas x 3 filas
    if (width >= 1200) return 12; // Desktop estándar: 4 columnas x 3 filas
    return 9; // Desktop pequeño: 3 columnas x 3 filas
  };

  const heroesPorPagina = getHeroesPorPagina();

  // Extraer universos únicos
  const universes = useMemo(() => {
    const uniqueUniverses = [...new Set(antiHeroesData.map(hero => hero.universe))];
    return ["Todos", ...uniqueUniverses.sort()];
  }, []);

  // Filtrar héroes por búsqueda y universo
  const filteredHeroes = useMemo(() => {
    return antiHeroesData.filter(hero => {
      const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesUniverse = selectedUniverse === "Todos" || hero.universe === selectedUniverse;
      return matchesSearch && matchesUniverse;
    });
  }, [searchTerm, selectedUniverse]);

  // 🆕 Calcular héroes de la página actual
  const heroesMostrados = useMemo(() => {
    const inicio = (page - 1) * heroesPorPagina;
    const fin = inicio + heroesPorPagina;
    return filteredHeroes.slice(inicio, fin);
  }, [filteredHeroes, page, heroesPorPagina]);

  // 🆕 Resetear a página 1 cuando cambia el filtro, búsqueda o tamaño de pantalla
  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedUniverse, heroesPorPagina]);

  const totalPaginas = Math.ceil(filteredHeroes.length / heroesPorPagina);

  // 🆕 Manejadores de paginación
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (page < totalPaginas) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    filteredHeroes: heroesMostrados, // 🆕 Ahora devuelve solo los de la página actual
    totalHeroes: filteredHeroes.length, // Total de héroes filtrados
    selectedUniverse,
    setSelectedUniverse,
    searchTerm,
    setSearchTerm,
    universes,
    // 🆕 Nuevas propiedades de paginación
    page,
    totalPaginas,
    handlePrevPage,
    handleNextPage,
  };
}