"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "../../../hooks/MediaQuery";
import { germanData } from "./germanData";
import { germanStyles as styles } from "./germanStyles";
import "./GermanAnimations.css";

export default function GermanProfile() {
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const isTablet = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    // Animar barras de progreso
    const bars = document.querySelectorAll(".skill-progress");
    bars.forEach((bar, i) => {
      setTimeout(() => {
        bar.style.width = `${germanData.skills[i].level}%`;
      }, 100);
    });

    // Cerrar lightbox con tecla ESC
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filteredMovies = germanData.movies.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredMusic = germanData.music.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getThumbnail = (url) => {
    const id = url.split("/embed/")[1];
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header */}
      <section style={styles.header}>
        <div style={styles.headerContent(isTablet)}>
          <img
            src={germanData.image || "/placeholder.svg"}
            alt={germanData.name}
            style={styles.profileImage}
            className="fade-in-up"
          />
          <div style={{ flex: 1 }}>
            <h1 style={styles.name} className="fade-in-up">{germanData.name}</h1>
            <p style={styles.role}>{germanData.role}</p>
          </div>
        </div>
      </section>

      {/* Info */}
      <section style={styles.info}>
        <div style={{ margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }} className="fade-in-up">
            <h2 style={styles.sectionTitle}>Sobre mí</h2>
            <p style={styles.bio}>{germanData.bio}</p>
          </div>

          {/* Habilidades */}
          <div style={{ marginBottom: "40px" }} className="fade-in-up">
            <h2 style={styles.sectionTitle}>Habilidades</h2>
            {germanData.skills.map((skill, index) => (
              <div key={index} style={styles.skillBarContainer}>
                <div style={styles.skillLabel}>{skill.name}</div>
                <div style={styles.skillBar}>
                  <div className="skill-progress"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movies & Music */}
      <section style={styles.sections}>
        <div style={{ margin: "0 auto", display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Buscador */}
          <input
            type="text"
            placeholder="Buscar película o música..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #8b0000",
              background: "#1a0a1a",
              color: "#fff",
              marginBottom: "20px",
            }}
          />

          {/* Películas */}
          <div style={styles.section}>
            <button
              style={styles.toggleButton}
              onClick={() => setShowMovies(!showMovies)}
            >
              <span style={styles.buttonText}>Películas Favoritas</span>
              <span style={styles.arrow}>{showMovies ? "▼" : "▶"}</span>
            </button>
            {showMovies && (
              <div style={styles.videoGrid}>
                {filteredMovies.map((movie, index) => (
                  <div
                    key={index}
                    style={styles.videoCard}
                    className={hoveredVideo === index ? "video-card-hover" : ""}
                    onMouseEnter={() => setHoveredVideo(index)}
                    onMouseLeave={() => setHoveredVideo(null)}
                    onClick={() => setSelectedVideo(movie.url)}
                  >
                    <h3 style={styles.videoTitle}>{movie.title}</h3>
                    <img
                      src={getThumbnail(movie.url)}
                      alt={movie.title}
                      className="thumbnail"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Música */}
          <div style={styles.section}>
            <button
              style={styles.toggleButton}
              onClick={() => setShowMusic(!showMusic)}
            >
              <span style={styles.buttonText}>Música Favorita</span>
              <span style={styles.arrow}>{showMusic ? "▼" : "▶"}</span>
            </button>
            {showMusic && (
              <div style={styles.videoGrid}>
                {filteredMusic.map((song, index) => (
                  <div
                    key={index}
                    style={styles.videoCard}
                    className={hoveredVideo === index ? "video-card-hover" : ""}
                    onMouseEnter={() => setHoveredVideo(index)}
                    onMouseLeave={() => setHoveredVideo(null)}
                    onClick={() => setSelectedVideo(song.url)}
                  >
                    <h3 style={styles.videoTitle}>{song.title}</h3>
                    <img
                      src={getThumbnail(song.url)}
                      alt={song.title}
                      className="thumbnail"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedVideo && (
        <div className="lightbox" onClick={() => setSelectedVideo(null)}>
          <iframe src={selectedVideo} frameBorder="0" allowFullScreen></iframe>
        </div>
      )}

      {/* Redes sociales con imágenes locales */}
      <section style={{ textAlign: "center", marginTop: "60px" }}>
        <h2 style={styles.sectionTitle}>Conectá conmigo</h2>
        <div className="socials" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a
            href="https://github.com/germanberisso"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img src="/ger/github.png" alt="GitHub" style={{ width: "40px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/german-sergio-rodriguez"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img src="/ger/linkedin.png" alt="LinkedIn" style={{ width: "40px" }} />
          </a>
        </div>
      </section>
    </div>
  );
}