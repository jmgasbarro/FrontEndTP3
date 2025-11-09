import { useTheme } from "../../hooks/useTheme";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer style={styles.footer(isDark)}>
      <p style={styles.footerText}>
        © 2025 Tree Group - Antiheroes Edition. Todos los derechos reservados.
      </p>
    </footer>
  );
}

const styles = {
  footer: (isDark) => ({
    background: isDark ? "#0a0a0a" : "transparent",
    padding: "clamp(20px, 4vw, 30px) clamp(20px, 4vw, 40px)", // Responsive padding
    textAlign: "center",
    borderTop: isDark ? "3px solid #8b0000" : "3px solid #d32f2f",
    marginTop: "clamp(30px, 6vw, 60px)", // Responsive margin
    width: "100%",
  }),
  footerText: {
    fontSize: "clamp(12px, 2vw, 14px)", // Responsive font size
  },
};
