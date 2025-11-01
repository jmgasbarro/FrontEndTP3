import { useTheme } from "../../hooks/useTheme";

export default function ApiDataHeader() {
  const { isDark } = useTheme();
  return (
    <div style={styles.header}>
      <h1 style={styles.title(isDark)}>Series de Anti-Héroes</h1>
      <p style={styles.subtitle}>
        Datos obtenidos en tiempo real desde la API de TVMaze
      </p>
    </div>
  );
}

const styles = {
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: (isDark) => ({
    fontSize: "48px",
    color: isDark ? "#ff0000" : "#d32f2f",
    textAlign: "center",
    marginBottom: "15px",
    fontFamily: "Creepster, cursive",
    textShadow: isDark
      ? "0 0 15px #ff0000, 0 0 30px #8b0000"
      : "0 0 10px rgba(211, 47, 47, 0.3)",
    transition: "color 0.3s ease, text-shadow 0.3s ease",
  }),
  subtitle: {
    fontSize: "18px",
    color: "#888",
    fontStyle: "italic",
  },
};
