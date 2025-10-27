"use client";

export default function DiagramsTabs({ activeTab, setActiveTab }) {
  return (
    <div style={styles.tabs}>
      <button
        style={{
          ...styles.tab,
          ...(activeTab === "component" ? styles.tabActive : {}),
        }}
        onClick={() => setActiveTab("component")}
      >
        Árbol de Componentes
      </button>
      <button
        style={{
          ...styles.tab,
          ...(activeTab === "folder" ? styles.tabActive : {}),
        }}
        onClick={() => setActiveTab("folder")}
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
  tab: {
    padding: "15px 30px",
    fontSize: "16px",
    background: "transparent",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#8b0000",
    borderRadius: "8px",
    color: "#e0e0e0",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
  },
  tabActive: {
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    borderColor: "#ff0000",
    boxShadow: "0 0 15px rgba(139, 0, 0, 0.5)",
  },
};
