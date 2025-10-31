"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function SkillProgressBar({ skill, level, delay = 500 }) {
  const [width, setWidth] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.skillName(isDark)}>{skill}</span>
        <span style={styles.percentage(isDark)}>{level}%</span>
      </div>
      <div style={styles.barBackground(isDark)}>
        <div
          style={{
            ...styles.barFill(isDark),
            width: `${width}%`,
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "block",
    width: "200px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  skillName: (isDark) => ({
    fontSize: "14px",
    fontWeight: "600",
    color: isDark ? "#e0e0e0" : "#1a1a1a",
    transition: "color 0.3s ease",
  }),
  percentage: (isDark) => ({
    fontSize: "14px",
    fontWeight: "600",
    color: isDark ? "#ff6666" : "#d32f2f",
    transition: "color 0.3s ease",
  }),
  barBackground: (isDark) => ({
    width: "100%",
    height: "10px",
    background: isDark ? "#2a2a2a" : "#e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "background 0.3s ease",
  }),
  barFill: (isDark) => ({
    height: "100%",
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #ff0000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #f44336 100%)",
    borderRadius: "10px",
    transition: "width 4s ease, background 0.3s ease",
    boxShadow: isDark
      ? "0 0 10px rgba(255, 0, 0, 0.5)"
      : "0 0 10px rgba(211, 47, 47, 0.3)",
  }),
};
