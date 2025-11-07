"use client";

import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const projects = [
  {
    id: 1,
    title: "Antiheroes SPA",
    description:
      "Single Page Application con React para explorar antiheroes del universo Marvel y DC",
    image: "/antiheroes-app-interface.jpg",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "API Integration",
    description:
      "Integración con APIs externas para mostrar datos dinámicos de comics",
    image: "/api-integration-dashboard.jpg",
    tech: ["REST API", "React", "Fetch"],
  },
  {
    id: 3,
    title: "Responsive Design",
    description:
      "Diseño completamente responsive adaptado a todos los dispositivos",
    image: "/responsive-web-design.png",
    tech: ["CSS", "Media Queries", "Flexbox"],
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isDark } = useTheme();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <div style={styles.carousel}>
      <h2 style={styles.title(isDark)}>Proyectos Destacados</h2>

      <div style={styles.carouselContainer}>
        <button
          onClick={prevSlide}
          style={styles.navButton(isDark, "left")}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div style={styles.slideContainer}>
          <div style={styles.slide(isDark)}>
            <img
              src={currentProject.image || "/placeholder.svg"}
              alt={currentProject.title}
              style={styles.image}
            />
            <div style={styles.content}>
              <h3 style={styles.projectTitle(isDark)}>
                {currentProject.title}
              </h3>
              <p style={styles.description(isDark)}>
                {currentProject.description}
              </p>
              <div style={styles.techStack}>
                {currentProject.tech.map((tech, index) => (
                  <span key={index} style={styles.techBadge(isDark)}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          style={styles.navButton(isDark, "right")}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <div style={styles.dots}>
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              ...styles.dot(isDark),
              ...(index === currentIndex ? styles.dotActive(isDark) : {}),
            }}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  carousel: {
    padding: "0 20px",
    maxWidth: "1200px",
    margin: "60px auto",
  },
  title: (isDark) => ({
    fontSize: "42px",
    color: isDark ? "#ff0000" : "#d32f2f",
    textAlign: "center",
    marginBottom: "40px",
    fontFamily: "Creepster, cursive",
    textShadow: isDark ? "0 0 10px #ff0000" : "0 0 10px rgba(211, 47, 47, 0.3)",
    transition: "color 0.3s ease, text-shadow 0.3s ease",
  }),
  carouselContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  navButton: (isDark, position) => ({
    position: "absolute",
    [position]: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "32px",
    cursor: "pointer",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    zIndex: 10,
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  }),
  slideContainer: {
    flex: 1,
    overflow: "hidden",
  },
  slide: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)"
      : "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
    borderRadius: "12px",
    overflow: "hidden",
    border: isDark ? "2px solid #333" : "2px solid #e0e0e0",
    boxShadow: isDark
      ? "0 8px 30px rgba(0, 0, 0, 0.5)"
      : "0 8px 30px rgba(0, 0, 0, 0.1)",
    animation: "scaleIn 0.5s ease",
    transition: "background 0.3s ease, border-color 0.3s ease",
  }),
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  content: {
    padding: "30px",
  },
  projectTitle: (isDark) => ({
    fontSize: "28px",
    color: isDark ? "#ff0000" : "#d32f2f",
    marginBottom: "15px",
    fontWeight: "700",
    transition: "color 0.3s ease",
  }),
  description: (isDark) => ({
    fontSize: "16px",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    lineHeight: "1.6",
    marginBottom: "20px",
    transition: "color 0.3s ease",
  }),
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  techBadge: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.3)" : "rgba(211, 47, 47, 0.1)",
    color: isDark ? "#ff6666" : "#d32f2f",
    padding: "6px 14px",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "600",
    border: isDark ? "1px solid #8b0000" : "1px solid #d32f2f",
    transition: "all 0.3s ease",
  }),
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "30px",
  },
  dot: (isDark) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: isDark ? "#333" : "#e0e0e0",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }),
  dotActive: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #ff0000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #f44336 100%)",
    width: "30px",
    borderRadius: "6px",
  }),
};
