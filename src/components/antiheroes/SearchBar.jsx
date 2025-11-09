"use client";

import { useState } from "react";
import { ImSearch } from "react-icons/im";

export default function SearchBar({ searchTerm, setSearchTerm, isDark }) {
  // 2. Aceptar isDark
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={styles.searchContainer}>
      <span style={styles.searchIcon(isFocused, isDark)}>
        <ImSearch />
      </span>
      <input
        type="text"
        placeholder="Buscar por nombre o descripción..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...styles.searchInput(isDark),
          ...(isFocused ? styles.searchInputFocus(isDark) : {}),
        }}
      />
    </div>
  );
}

const styles = {
  searchContainer: {
    marginBottom: "25px",
    position: "relative",
  },
  searchIcon: (isFocused, isDark) => ({
    position: "absolute",
    left: "15px",
    top: "50%",
    transform: "translateY(-42%)",
    fontSize: "18px",
    color: isFocused
      ? isDark
        ? "#ff6666"
        : "#b71c1c" // Color de focus
      : isDark
      ? "#888"
      : "#999", // Color inactivo
    transition: "color 0.3s ease",
    zIndex: 1,
  }),
  searchInput: (isDark) => ({
    width: "100%",
    padding: "15px 20px 15px 50px", // Padding izquierdo para el ícono
    fontSize: "16px",
    background: isDark ? "#0a0a0a" : "#f5f5f5", // Fondo claro
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: isDark ? "#8b0000" : "#d32f2f",
    borderRadius: "8px",
    color: isDark ? "#e0e0e0" : "#1a1a1a", // Texto claro
    outline: "none",
    transition: "all 0.3s ease",
  }),
  searchInputFocus: (isDark) => ({
    borderColor: isDark ? "#ff0000" : "#b71c1c", // Borde activo
    boxShadow: isDark
      ? "0 0 15px rgba(255, 0, 0, 0.3)"
      : "0 0 15px rgba(211, 47, 47, 0.3)", // Sombra activa
  }),
};
