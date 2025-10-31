"use client";

import { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function ImageLightbox({ image, onClose }) {
  const { isDark } = useTheme();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!image) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.lightbox} onClick={(e) => e.stopPropagation()}>
        <button
          style={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>
        <img
          src={image.image || "/placeholder.svg"}
          alt={image.name}
          style={styles.image}
        />
        <div style={styles.info(isDark)}>
          <h2 style={styles.name(isDark)}>{image.name}</h2>
          <p style={styles.realName(isDark)}>{image.realName}</p>
          <p style={styles.description(isDark)}>{image.description}</p>
          <div style={styles.powersSection}>
            <h3 style={styles.powersTitle(isDark)}>Poderes:</h3>
            <div style={styles.powers}>
              {image.powers.map((power, index) => (
                <span key={index} style={styles.powerTag(isDark)}>
                  {power}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
    animation: "fadeInModal 0.3s ease",
  },
  lightbox: {
    position: "relative",
    maxWidth: "900px",
    width: "100%",
    maxHeight: "90vh",
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    borderRadius: "12px 0px 0px 12px",
    overflow: "auto",
    animation: "zoomIn 0.3s ease",
    border: "2px solid #8b0000",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "rgba(139, 0, 0, 0.9)",
    color: "#fff",
    border: "2px solid #ff0000",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "24px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    zIndex: 10,
  },
  image: {
    width: "100%",
    height: "auto",
    maxHeight: "500px",
    objectFit: "cover",
    display: "block",
  },
  info: (isDark) => ({
    padding: "30px",
    background: isDark ? "#1a1a1a" : "#ffffff",
  }),
  name: (isDark) => ({
    fontSize: "32px",
    color: isDark ? "#ff0000" : "#d32f2f",
    marginBottom: "8px",
    fontWeight: "700",
  }),
  realName: (isDark) => ({
    fontSize: "18px",
    color: isDark ? "#888" : "#666",
    marginBottom: "20px",
    fontStyle: "italic",
  }),
  description: (isDark) => ({
    fontSize: "16px",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    lineHeight: "1.6",
    marginBottom: "25px",
  }),
  powersSection: {
    borderTop: "1px solid #333",
    paddingTop: "20px",
  },
  powersTitle: (isDark) => ({
    fontSize: "18px",
    color: isDark ? "#ff6666" : "#d32f2f",
    marginBottom: "15px",
    fontWeight: "600",
  }),
  powers: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  powerTag: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.3)" : "rgba(211, 47, 47, 0.1)",
    color: isDark ? "#ff6666" : "#d32f2f",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "14px",
    border: isDark ? "1px solid #8b0000" : "1px solid #d32f2f",
  }),
};
