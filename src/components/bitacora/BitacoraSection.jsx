import { useTheme } from "../../hooks/useTheme";

export default function BitacoraSection({ title, items }) {
  const { isDark } = useTheme();

  return (
    <div style={styles.section(isDark)}>
      <h2 style={styles.sectionTitle(isDark)}>{title}</h2>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem(isDark)}>
            <span style={styles.bullet(isDark)}>▸</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  section: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)"
      : "#ffffff",
    border: isDark ? "2px solid #333" : "2px solid #ccc",
    borderRadius: "12px",
    padding: "30px",
    transition: "all 0.3s ease",
  }),
  sectionTitle: (isDark) => ({
    fontSize: "28px",
    color: isDark ? "#ff6666" : "#b71c1c",
    marginBottom: "20px",
    fontWeight: "700",
    borderBottom: isDark ? "2px solid #8b0000" : "2px solid #d32f2f",
    paddingBottom: "10px",
  }),
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: (isDark) => ({
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "12px",
    paddingLeft: "10px",
    color: isDark ? "#cccccc" : "#333333",
    display: "flex",
    alignItems: "start",
    gap: "8px",
  }),
  bullet: (isDark) => ({
    color: isDark ? "#ff6666" : "#d32f2f",
    fontWeight: "700",
  }),
};
