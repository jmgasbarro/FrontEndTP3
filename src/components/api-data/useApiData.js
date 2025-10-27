// src/components/api-data/useApiData.js
"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/MediaQuery";

const seriesDeAntiheroes = [
  "The Boys", "The Punisher", "Peacemaker", "Loki", "Moon Knight",
  "The Umbrella Academy", "Doom Patrol", "Lucifer", "Watchmen",
  "Harley Quinn", "The Sandman", "Constantine", "Invincible",
  "Preacher", "Spawn", "Arrow", "Stargirl", "Daredevil",
  "Iron Fist", "Luke Cage", "Agents of S.H.I.E.L.D.", "MODOK"
];

export function useApiData() {
  const [seriesMostradas, setSeriesMostradas] = useState([]);
  const [listaCompleta, setListaCompleta] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // 🆕 Detectar tamaño de pantalla
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  // 🆕 Calcular series por página según el ancho de la ventana
  const getSeriesPorPagina = () => {
    if (isMobile) return 6; // Móvil: 1 columna x 6 filas
    if (isTablet) return 8; // Tablet: 2 columnas x 4 filas
    
    // Desktop: calcular según el ancho real de la ventana
    const width = window.innerWidth;
    if (width >= 1920) return 15; // Pantallas muy grandes: 5 columnas x 3 filas
    if (width >= 1600) return 12; // Pantallas grandes: 4 columnas x 3 filas
    if (width >= 1200) return 12; // Desktop estándar: 4 columnas x 3 filas
    return 9; // Desktop pequeño: 3 columnas x 3 filas
  };

  const seriesPorPagina = getSeriesPorPagina();

  // Fetch de todas las series (solo 1 vez)
  useEffect(() => {
    const fetchTodasLasSeries = async () => {
      try {
        setLoading(true);
        const promesas = seriesDeAntiheroes.map(nombreSerie => {
          const url = `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(nombreSerie)}`;
          return fetch(url).then(res => {
            if (!res.ok) return null;
            return res.json();
          });
        });

        const resultados = await Promise.all(promesas);
        const seriesValidas = resultados.filter(show => show !== null);
        
        const transformedData = seriesValidas.map((show) => ({
          id: show.id,
          title: show.name,
          description: show.summary ? show.summary.replace(/<[^>]*>?/gm, '') : "Sinopsis no disponible.",
          thumbnail: show.image?.medium || "",
        }));

        setListaCompleta(transformedData);
      } catch (err) {
        console.error(err);
        setError("Error al cargar las series. La API puede estar ocupada.");
      } finally {
        setLoading(false);
      }
    };
    fetchTodasLasSeries();
  }, []);

  // Actualizar series mostradas cuando cambia la página o la lista completa
  useEffect(() => {
    if (listaCompleta.length > 0) {
      const inicio = (page - 1) * seriesPorPagina;
      const fin = inicio + seriesPorPagina;
      setSeriesMostradas(listaCompleta.slice(inicio, fin));
    }
  }, [page, listaCompleta, seriesPorPagina]);

  // Resetear a página 1 cuando cambia el tamaño de pantalla
  useEffect(() => {
    setPage(1);
  }, [seriesPorPagina]);

  const totalPaginas = Math.ceil(listaCompleta.length / seriesPorPagina);

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
    comics: seriesMostradas,
    loading,
    error,
    page,
    totalPaginas,
    handlePrevPage,
    handleNextPage,
    fetchComics: () => {},
  };
}