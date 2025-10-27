export default function BitacoraSection({ title, items }) {
  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  section: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "30px",
    transition: "all 0.3s ease",
  },
  sectionTitle: {
    fontSize: "28px",
    color: "#ff0000",
    marginBottom: "20px",
    fontWeight: "700",
    borderBottom: "2px solid #8b0000",
    paddingBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: "16px",
    color: "#b0b0b0",
    lineHeight: "1.8",
    marginBottom: "12px",
    paddingLeft: "25px",
    position: "relative",
    "&::before": {
      content: '"▸"',
      position: "absolute",
      left: 0,
      color: "#ff0000",
      fontWeight: "700",
    },
  },
};
