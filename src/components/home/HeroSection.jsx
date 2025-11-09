"use client";

import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function HeroSection() {
  const { isDark } = useTheme();
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section style={styles.hero(isDark)}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle(isDark)}>
          Bienvenidos a{" "}
          <span style={styles.heroHighlight(isDark)}>Tree Group</span>
        </h1>
        <p style={styles.heroSubtitle(isDark)}>
          Un equipo de desarrolladores con actitud de antiheroes: rompemos las
          reglas para crear soluciones extraordinarias
        </p>
        <button
          style={{
            ...styles.heroButton(isDark),
            ...(isHovered ? styles.heroButtonHover(isDark) : {}),
          }}
          onClick={() => setShowMessage(!showMessage)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {showMessage ? "Ocultar mensaje" : "Conoce más sobre nosotros"}
        </button>
        {showMessage && (
          <div style={styles.message}>
            <p style={styles.messageText}>
              Somos un equipo apasionado por el desarrollo web y la innovación
              tecnológica. Explora nuestros perfiles individuales para conocer
              más sobre cada miembro del equipo.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  hero: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a0a1a 0%, #2d0a1a 100%)"
      : "linear-gradient(135deg, #7a2f2f 0%, #b84646 100%)",
    padding: "80px clamp(20px, 4vw, 40px) clamp(40px, 8vw, 80px)",
    textAlign: "center",
    borderBottom: isDark ? "3px solid #8b0000" : "3px solid #d32f2f",
    boxShadow: "0 4px 20px rgba(139, 0, 0, 0.3)",
  }),
  heroContent: {
    margin: "0 auto",
    maxWidth: "900px",
  },
  heroTitle: (isDark) => ({
    fontSize: "clamp(28px, 6vw, 48px)",
    fontWeight: "700",
    color: isDark ? "#e0e0e0" : "#fff",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    lineHeight: "1.2",
  }),
  heroHighlight: (isDark) => ({
    color: "#ff0000",
    fontFamily: "Creepster, cursive",
    textShadow: isDark ? "0 0 10px #ff0000" : "0 0 5px #ff0000",
  }),
  heroSubtitle: (isDark) => ({
    fontSize: "clamp(16px, 3vw, 20px)",
    color: isDark ? "#e0e0e0" : "#fff",
    marginBottom: "30px",
    lineHeight: "1.6",
  }),
  heroButton: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    color: "#fff",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#ff0000",
    padding: "clamp(12px, 2vw, 15px) clamp(24px, 4vw, 40px)",
    fontSize: "clamp(14px, 2.5vw, 18px)",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    boxShadow: isDark
      ? "0 4px 15px rgba(139, 0, 0, 0.4)"
      : "0 4px 15px rgba(211, 47, 47, 0.3)", // Sombra ajustada para light mode
  }),
  heroButtonHover: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #b30000 0%, #dc0000 100%)"
      : "linear-gradient(90deg, #c62828 0%, #b71c1c 100%)",
    borderColor: "#ff3333", // Coincide con la propiedad base
    boxShadow: isDark
      ? "0 8px 25px rgba(255, 0, 0, 0.5)"
      : "0 8px 25px rgba(211, 47, 47, 0.4)",
    transform: "scale(1.03) translateY(-2px)",
  }),
  message: {
    marginTop: "30px",
    padding: "clamp(15px, 3vw, 20px)",
    background: "rgba(139, 0, 0, 0.2)",
    border: "1px solid #8b0000",
    borderRadius: "8px",
    animation: "fadeIn 0.5s ease",
  },
  messageText: {
    color: "#e0e0e0",
    fontSize: "clamp(14px, 2.5vw, 16px)",
    lineHeight: "1.6",
  },
};
