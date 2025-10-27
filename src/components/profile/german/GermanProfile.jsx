"use client";

import { useState } from "react";
import { useMediaQuery } from "../../../hooks/MediaQuery";
import { germanData } from "./germanData";
import { germanStyles as styles } from "./germanStyles";

export default function GermanProfile() {
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header */}
      <section style={styles.header}>
        <div style={styles.headerContent(isTablet)}>
          <img
            src={germanData.image || "/placeholder.svg"}
            alt={germanData.name}
            style={styles.profileImage}
          />
          <div style={{ flex: 1 }}>
            <h1 style={styles.name}>{germanData.name}</h1>
            <p style={styles.role}>{germanData.role}</p>
          </div>
        </div>
      </section>

      {/* Info */}
      <section style={styles.info}>
        <div style={{ margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle}>Sobre mí</h2>
            <p style={styles.bio}>{germanData.bio}</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle}>Habilidades</h2>
            <div style={styles.skills}>
              {germanData.skills.map((skill, index) => (
                <span key={index} style={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Movies & Music */}
      <section style={styles.sections}>
        <div style={{ margin: "0 auto", display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Películas */}
          <div style={styles.section}>
            <button style={styles.toggleButton} onClick={() => setShowMovies(!showMovies)}>
              <span style={styles.buttonText}>Películas Favoritas</span>
              <span style={styles.arrow}>{showMovies ? "▼" : "▶"}</span>
            </button>
            {showMovies && (
              <div style={styles.videoGrid}>
                {germanData.movies.map((movie, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.videoCard,
                      ...(hoveredVideo === index ? styles.videoCardHover : {}),
                    }}
                    onMouseEnter={() => setHoveredVideo(index)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <h3 style={styles.videoTitle}>{movie.title}</h3>
                    <iframe
                      width="100%"
                      height="200"
                      src={movie.url}
                      title={movie.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={styles.videoFrame}
                    ></iframe>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Música */}
          <div style={styles.section}>
            <button style={styles.toggleButton} onClick={() => setShowMusic(!showMusic)}>
              <span style={styles.buttonText}>Música Favorita</span>
              <span style={styles.arrow}>{showMusic ? "▼" : "▶"}</span>
            </button>
            {showMusic && (
              <div style={styles.videoGrid}>
                {germanData.music.map((song, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.videoCard,
                      ...(hoveredVideo === index ? styles.videoCardHover : {}),
                    }}
                    onMouseEnter={() => setHoveredVideo(index)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <h3 style={styles.videoTitle}>{song.title}</h3>
                    <iframe
                      width="100%"
                      height="200"
                      src={song.url}
                      title={song.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={styles.videoFrame}
                    ></iframe>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}