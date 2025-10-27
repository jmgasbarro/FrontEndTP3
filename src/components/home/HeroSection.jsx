"use client";

import { useState } from "react";

export default function HeroSection() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>
          Bienvenidos a <span style={styles.heroHighlight}>Tree Group</span>
        </h1>
        <p style={styles.heroSubtitle}>
          Un equipo de desarrolladores con actitud de antiheroes: rompemos las
          reglas para crear soluciones extraordinarias
        </p>
        <button
          style={styles.heroButton}
          onClick={() => setShowMessage(!showMessage)}
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
  hero: {
    background: "linear-gradient(135deg, #1a0a1a 0%, #2d0a1a 100%)",
    padding: "80px clamp(20px, 4vw, 40px) clamp(40px, 8vw, 80px)", // Responsive padding
    textAlign: "center",
    borderBottom: "3px solid #8b0000",
    boxShadow: "0 4px 20px rgba(139, 0, 0, 0.3)",
  },
  heroContent: {
    margin: "0 auto",
    maxWidth: "900px", // Max width for better readability
  },
  heroTitle: {
    fontSize: "clamp(28px, 6vw, 48px)", // Responsive font size
    fontWeight: "700",
    color: "#e0e0e0",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    lineHeight: "1.2",
  },
  heroHighlight: {
    color: "#ff0000",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 10px #ff0000, 0 0 20px #8b0000",
  },
  heroSubtitle: {
    fontSize: "clamp(16px, 3vw, 20px)", // Responsive font size
    color: "#b0b0b0",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  heroButton: {
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    border: "2px solid #ff0000",
    padding: "clamp(12px, 2vw, 15px) clamp(24px, 4vw, 40px)", // Responsive padding
    fontSize: "clamp(14px, 2.5vw, 18px)", // Responsive font size
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(139, 0, 0, 0.4)",
  },
  message: {
    marginTop: "30px",
    padding: "clamp(15px, 3vw, 20px)", // Responsive padding
    background: "rgba(139, 0, 0, 0.2)",
    border: "1px solid #8b0000",
    borderRadius: "8px",
    animation: "fadeIn 0.5s ease",
  },
  messageText: {
    color: "#e0e0e0",
    fontSize: "clamp(14px, 2.5vw, 16px)", // Responsive font size
    lineHeight: "1.6",
  },
};
