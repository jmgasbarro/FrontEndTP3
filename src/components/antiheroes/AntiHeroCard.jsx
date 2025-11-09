"use client";

import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { ImSearch } from "react-icons/im";

export default function AntiHeroCard({ hero, onImageClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  return (
    <div
      style={{
        ...styles.card(isDark),
        ...(isHovered ? styles.cardHover : {}),
        animation: "slideUp 0.5s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onImageClick && onImageClick(hero)}
    >
      <div style={styles.cardImageContainer}>
        <img
          src={hero.image || "/placeholder.svg"}
          alt={hero.name}
          style={{
            ...styles.cardImage,
            ...(isHovered ? styles.cardImageHover : {}),
          }}
        />
        <div style={styles.universeBadge(isDark)}>{hero.universe}</div>
        <div
          style={{
            ...styles.imageOverlay,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <span style={styles.overlayText}>
            <ImSearch /> Click para ampliar
          </span>
        </div>
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardName(isDark)}>{hero.name}</h3>
        <p style={styles.cardRealName(isDark)}>{hero.realName}</p>
        <p style={styles.cardDescription(isDark)}>{hero.description}</p>
        <div style={styles.powersSection(isDark)}>
          <h4 style={styles.powersTitle(isDark)}>Poderes:</h4>
          <div style={styles.powers}>
            {hero.powers.map((power, index) => (
              <span key={index} style={styles.powerTag(isDark)}>
                {power}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)"
      : "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
    border: isDark ? "2px solid #333" : "2px solid #e0e0e0",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: isDark
      ? "0 4px 15px rgba(0, 0, 0, 0.3)"
      : "0 4px 15px rgba(0, 0, 0, 0.1)",
  }),
  cardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 25px rgba(139, 0, 0, 0.4)",
  },
  cardImageContainer: {
    position: "relative",
    width: "100%",
    height: "250px",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  cardImageHover: {
    transform: "scale(1.1)",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
  },
  overlayText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
  },
  universeBadge: (isDark) => ({
    position: "absolute",
    top: "15px",
    right: "15px",
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    color: "#fff",
    padding: "6px 15px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
    border: isDark ? "1px solid #ff0000" : "1px solid #d32f2f",
    boxShadow: isDark
      ? "0 2px 10px rgba(139, 0, 0, 0.5)"
      : "0 2px 10px rgba(211, 47, 47, 0.3)",
  }),
  cardContent: {
    padding: "25px",
  },
  cardName: (isDark) => ({
    fontSize: "24px",
    color: isDark ? "#ff0000" : "#d32f2f",
    marginBottom: "5px",
    fontWeight: "700",
    transition: "color 0.3s ease",
  }),
  cardRealName: (isDark) => ({
    fontSize: "14px",
    color: isDark ? "#888" : "#666",
    marginBottom: "15px",
    fontStyle: "italic",
    transition: "color 0.3s ease",
  }),
  cardDescription: (isDark) => ({
    fontSize: "14px",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    lineHeight: "1.6",
    marginBottom: "20px",
    transition: "color 0.3s ease",
  }),
  powersSection: (isDark) => ({
    borderTop: isDark ? "1px solid #333" : "1px solid #e0e0e0",
    paddingTop: "15px",
    transition: "border-color 0.3s ease",
  }),
  powersTitle: (isDark) => ({
    fontSize: "14px",
    color: isDark ? "#ff6666" : "#d32f2f",
    marginBottom: "10px",
    fontWeight: "600",
    transition: "color 0.3s ease",
  }),
  powers: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  powerTag: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.3)" : "rgba(211, 47, 47, 0.1)",
    color: isDark ? "#ff6666" : "#d32f2f",
    padding: "5px 12px",
    borderRadius: "15px",
    fontSize: "12px",
    border: isDark ? "1px solid #8b0000" : "1px solid #d32f2f",
    transition: "all 0.3s ease",
  }),
};
