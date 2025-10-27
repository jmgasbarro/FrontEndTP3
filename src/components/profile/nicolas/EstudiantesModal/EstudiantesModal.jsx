"use client";

import { useState, useEffect } from "react";
import { estudiantesData } from "../nicolasData";
import { modalStyles, modalAnimations } from "./estudiantesModalStyles";

export default function EstudiantesModal({ isOpen, onClose }) {
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredClose, setHoveredClose] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleCardClick = (id) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose(); // Llama a la función del padre para cerrar el modal
    setHoveredClose(false); // **Establece el estado de hover en false**
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{modalAnimations}</style>
      <div style={modalStyles.overlay} onClick={handleBackdropClick}>
        <div style={modalStyles.content}>
          <button
            onClick={handleCloseClick}
            onMouseEnter={() => setHoveredClose(true)}
            onMouseLeave={() => setHoveredClose(false)}
            style={{
              ...modalStyles.closeButton,
              ...(hoveredClose ? modalStyles.closeButtonHover : ""),
            }}
            asdas={console.log(hoveredClose)}
          >
            <div style={modalStyles.closeButtonDiv}>×</div>
          </button>

          <div style={modalStyles.header}>
            <h2 style={modalStyles.title}>Hincha de {estudiantesData.name}</h2>
            <p style={modalStyles.subtitle}>{estudiantesData.founded}</p>
            <p style={modalStyles.description}>{estudiantesData.description}</p>
            <p style={modalStyles.hint}>
              💡 <strong>Toca las estrellas</strong> para conocer más detalles
              sobre cada título
            </p>
          </div>

          <div style={modalStyles.starsGrid}>
            {estudiantesData.stars.map((star) => {
              const isFlipped = flippedCards.has(star.id);
              const isHovered = hoveredCard === star.id;

              return (
                <div
                  key={star.id}
                  style={{
                    ...modalStyles.starContainer,
                    ...(window.innerWidth >= 401 && window.innerWidth <= 900
                      ? { flex: "0 0 calc(50% - 0.75rem)", minWidth: "200px" }
                      : {}),
                    ...(window.innerWidth >= 901 && window.innerWidth <= 1200
                      ? { flex: "0 0 calc(33.333% - 1rem)", minWidth: "220px" }
                      : {}),
                    ...(window.innerWidth >= 1201
                      ? { flex: "0 0 calc(25% - 1.125rem)", minWidth: "240px" }
                      : {}),
                  }}
                >
                  <div
                    style={modalStyles.card(isFlipped)}
                    onClick={() => handleCardClick(star.id)}
                    onMouseEnter={() => setHoveredCard(star.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Front of Card */}
                    <div
                      style={{
                        ...modalStyles.cardFace,
                        ...modalStyles.cardFront,
                        ...(isHovered && !isFlipped
                          ? modalStyles.cardFrontHover
                          : {}),
                      }}
                    >
                      <div style={modalStyles.starIcon}>⭐</div>
                      <div style={modalStyles.year}>{star.year}</div>
                      <div style={modalStyles.titleText}>{star.title}</div>
                    </div>

                    {/* Back of Card */}
                    <div
                      style={{
                        ...modalStyles.cardFace,
                        ...modalStyles.cardBack,
                      }}
                    >
                      <div style={modalStyles.backYear}>{star.year}</div>
                      <div style={modalStyles.backTitle}>{star.title}</div>
                      <div style={modalStyles.backDescription}>
                        {star.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
