"use client";

import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function DiagramsTabs({ activeTab, setActiveTab }) {
  const { isDark } = useTheme();
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.tabs}>
      <button
        style={{
          ...styles.tab(isDark),
          ...(activeTab === "component"
            ? styles.tabActive(isDark)
            : hovered === "component"
            ? styles.tabHover(isDark)
            : {}),
        }}
        onClick={() => setActiveTab("component")}
        onMouseEnter={() => setHovered("component")}
        onMouseLeave={() => setHovered(null)}
      >
        Árbol de Componentes
      </button>
      <button
        style={{
          ...styles.tab(isDark),
          ...(activeTab === "folder"
            ? styles.tabActive(isDark)
            : hovered === "folder"
            ? styles.tabHover(isDark)
            : {}),
        }}
        onClick={() => setActiveTab("folder")}
        onMouseEnter={() => setHovered("folder")}
        onMouseLeave={() => setHovered(null)}
      >
        Estructura de Carpetas
      </button>
    </div>
  );
}

const styles = {
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  tab: (isDark) => ({
    padding: "15px 30px",
    fontSize: "16px",
    background: isDark ? "transparent" : "#ffffff", // Fondo blanco en light
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: isDark ? "#8b0000" : "#d32f2f", // Borde rojo claro
    borderRadius: "8px",
    color: isDark ? "#e0e0e0" : "#d32f2f", // Texto rojo en light
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
  }),
  tabActive: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)", // Fondo rojo en light
    borderColor: isDark ? "#ff0000" : "#b71c1c", // Borde rojo más oscuro en light
    color: "#fff", // Texto blanco en ambos
    boxShadow: isDark
      ? "0 0 15px rgba(139, 0, 0, 0.5)"
      : "0 0 15px rgba(211, 47, 47, 0.3)", // Sombra roja clara
  }),
  tabHover: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.2)" : "rgba(211, 47, 47, 0.05)", // Fondo hover muy sutil
    borderColor: isDark ? "#ff3333" : "#b71c1c", // Borde rojo hover
    color: isDark ? "#ff3333" : "#b71c1c", // Texto rojo hover
  }),
};
