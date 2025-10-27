export default function DiagramsHeader() {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>Arquitectura del Proyecto</h1>
      <p style={styles.subtitle}>
        Árbol de componentes y organización de carpetas
      </p>
    </div>
  );
}

const styles = {
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "48px",
    color: "#ff0000",
    marginBottom: "15px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 15px #ff0000, 0 0 30px #8b0000",
  },
  subtitle: {
    fontSize: "18px",
    color: "#888",
    fontStyle: "italic",
  },
};
