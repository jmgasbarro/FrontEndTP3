"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

export default function TeamCard({ member }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  return (
    <div
      style={{
        ...styles.card(isDark),
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/profile/${member.id}`)}
    >
      <div style={styles.cardImageContainer}>
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          style={{
            ...styles.cardImage,
            ...(isHovered ? styles.cardImageHover : {}),
            objectPosition: member.id === "german" ? "center 10%" : "center",
          }}
        />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardName(isDark)}>{member.name}</h3>
        <p style={styles.cardRole(isDark)}>{member.role}</p>
        <p style={styles.cardDescription(isDark)}>{member.description}</p>
        <Link to={`/profile/${member.id}`} style={styles.cardLink(isDark)}>
          Ver perfil
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)"
      : "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
    borderRadius: "12px",
    overflow: "hidden",
    border: isDark ? "2px solid #333" : "2px solid #e0e0e0",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: isDark
      ? "0 4px 15px rgba(0, 0, 0, 0.3)"
      : "0 4px 15px rgba(0, 0, 0, 0.1)",
  }),
  cardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 30px rgba(139, 0, 0, 0.4)",
  },
  cardImageContainer: {
    width: "100%",
    height: "250px",
    overflow: "hidden",
    position: "relative",
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
  cardContent: {
    padding: "25px",
  },
  cardName: (isDark) => ({
    fontSize: "24px",
    color: isDark ? "#ff0000" : "#d32f2f",
    marginBottom: "8px",
    fontWeight: "700",
    transition: "color 0.3s ease",
  }),
  cardRole: (isDark) => ({
    fontSize: "16px",
    color: isDark ? "#888" : "#666",
    marginBottom: "12px",
    fontStyle: "italic",
    transition: "color 0.3s ease",
  }),
  cardDescription: (isDark) => ({
    fontSize: "14px",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    marginBottom: "20px",
    lineHeight: "1.5",
    transition: "color 0.3s ease",
  }),
  cardLink: (isDark) => ({
    display: "inline-block",
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    color: "#fff",
    padding: "10px 25px",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    border: isDark ? "1px solid #ff0000" : "1px solid #d32f2f",
    transition: "all 0.3s ease",
  }),
};
