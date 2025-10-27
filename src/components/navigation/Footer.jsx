export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>
        © 2025 Tree Group - Antiheroes Edition. Todos los derechos reservados.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0a0a0a",
    padding: "clamp(20px, 4vw, 30px) clamp(20px, 4vw, 40px)", // Responsive padding
    textAlign: "center",
    borderTop: "2px solid #8b0000",
    marginTop: "clamp(30px, 6vw, 60px)", // Responsive margin
    width: "100%",
  },
  footerText: {
    color: "#666",
    fontSize: "clamp(12px, 2vw, 14px)", // Responsive font size
  },
};
