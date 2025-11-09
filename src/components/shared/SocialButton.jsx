"use client";

import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function SocialButton({ icon, label, url, color }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.button(isDark),
        ...(isHovered ? styles.buttonHover(color) : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={styles.icon}>{icon}</span>
      <span style={styles.label}>{label}</span>
    </a>
  );
}

const styles = {
  button: (isDark) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 24px",
    background: isDark ? "#2a2a2a" : "#ffffff",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: isDark ? "#333" : "#1a1a1a",
    borderRadius: "8px",
    color: isDark ? "#e0e0e0" : "#1a1a1a",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }),
  buttonHover: (color) => ({
    transform: "translateY(-3px) scale(1.05)",
    background: color,
    borderColor: color,
    color: "#fff",
    boxShadow: `0 8px 20px ${color}40`,
  }),
  icon: {
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
  },
  label: {
    fontSize: "14px",
  },
};
