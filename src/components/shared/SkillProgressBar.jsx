"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function SkillProgressBar({ skill, level, delay = 500 }) {
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div 
      style={{
        ...styles.container,
        transform: isHovered ? 'translateX(10px) scale(1.05)' : 'translateX(0) scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.header}>
        <span style={styles.skillName(isDark, isHovered)}>{skill}</span>
        <span style={styles.percentage(isDark, isHovered)}>{level}%</span>
      </div>
      <div style={styles.barBackground(isDark, isHovered)}>
        <div
          style={{
            ...styles.barFill(isDark, isHovered),
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
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  skillName: (isDark, isHovered) => ({
    fontSize: "14px",
    fontWeight: "600",
    color: isHovered ? (isDark ? "#ff0000" : "#ff0000") : (isDark ? "#e0e0e0" : "#1a1a1a"),
    transition: "color 0.3s ease",
    textShadow: isHovered ? "0 0 8px rgba(255, 0, 0, 0.6)" : "none",
  }),
  percentage: (isDark, isHovered) => ({
    fontSize: "14px",
    fontWeight: "600",
    color: isHovered ? "#ff0000" : (isDark ? "#ff6666" : "#d32f2f"),
    transition: "color 0.3s ease",
    textShadow: isHovered ? "0 0 8px rgba(255, 0, 0, 0.6)" : "none",
  }),
  barBackground: (isDark, isHovered) => ({
    width: "100%",
    height: isHovered ? "12px" : "10px",
    background: isDark ? "#2a2a2a" : "#e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "background 0.3s ease, height 0.3s ease",
  }),
  barFill: (isDark, isHovered) => ({
    height: "100%",
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #ff0000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #f44336 100%)",
    borderRadius: "10px",
    transition: "width 4s ease, background 0.3s ease, box-shadow 0.3s ease",
    boxShadow: isHovered
      ? (isDark ? "0 0 20px rgba(255, 0, 0, 0.8)" : "0 0 20px rgba(211, 47, 47, 0.6)")
      : (isDark ? "0 0 10px rgba(255, 0, 0, 0.5)" : "0 0 10px rgba(211, 47, 47, 0.3)"),
  }),
};
