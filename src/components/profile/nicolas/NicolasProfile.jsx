"use client";

import { useState } from "react";
import { useMediaQuery } from "../../../hooks/MediaQuery";
import { nicolasData } from "./nicolasData";
import { nicolasStyles as styles, nicolasAnimations } from "./nicolasStyles";
import EstudiantesModal from "./EstudiantesModal/EstudiantesModal";

const getIcon = (type) => {
  switch (type) {
    case "movie":
      return "🎬";
    case "series":
      return "🎥";
    case "music":
      return "🎵";
    default:
      return "";
  }
};

export default function NicolasProfile() {
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <div style={{ minHeight: "100vh" }}>
      <style>{nicolasAnimations}</style>

      {/* Header Section */}
      <section style={styles.header}>
        <div style={styles.particlesContainer}>
          {[...Array(20)].map((_, i) => (
            <div key={i} style={styles.particle(i)} />
          ))}
        </div>
        <div style={styles.headerContent(isTablet)}>
          <img
            src={nicolasData.image || "/placeholder.svg"}
            alt={nicolasData.name}
            style={styles.profileImage}
          />
          <div style={{ flex: 1 }}>
            <h1 style={styles.name}>{nicolasData.name}</h1>
            <p style={styles.role}>{nicolasData.role}</p>
            <p style={styles.secondaryData}>{nicolasData.location}</p>
            <p style={styles.secondaryData}>{nicolasData.age}</p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={styles.info}>
        <div style={{ margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle}>Sobre mí</h2>
            <p style={styles.bio}>{nicolasData.bio}</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle}>Habilidades</h2>
            <div style={styles.skills}>
              {nicolasData.skills.map((skill, index) => (
                <span key={index} style={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Movies, Music and Club Section */}
      <section style={styles.sections}>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          {/* Movies */}
          <div style={styles.section}>
            <button
              style={{
                ...styles.toggleButton,
                ...(hoveredButton === "movies" ? styles.toggleButtonHover : {}),
              }}
              onClick={() => setShowMovies(!showMovies)}
              onMouseEnter={() => setHoveredButton("movies")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span
                style={{
                  ...styles.buttonText,
                  ...(hoveredButton === "movies" ? styles.buttonTextHover : {}),
                }}
              >
                Películas y Series Favoritas
              </span>
              <span
                style={{
                  ...styles.arrow,
                  ...(hoveredButton === "movies" ? styles.arrowHover : {}),
                }}
              >
                {showMovies ? "▼" : "▶"}
              </span>
            </button>
            <div style={styles.expandable(showMovies)}>
              <ul style={styles.list}>
                {nicolasData.movies.map((movie, index) => (
                  <li key={index} style={styles.listItem}>
                    <a
                      href={movie.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...styles.link,
                        ...(hoveredLink === `movie-${index}`
                          ? styles.linkHover
                          : {}),
                      }}
                      onMouseEnter={() => setHoveredLink(`movie-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span
                        style={{
                          ...styles.linkIcon,
                          ...(hoveredLink === `movie-${index}`
                            ? styles.linkIconHover
                            : {}),
                        }}
                      >
                        {getIcon(movie.type)}
                      </span>
                      {movie.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Music */}
          <div style={styles.section}>
            <button
              style={{
                ...styles.toggleButton,
                ...(hoveredButton === "music" ? styles.toggleButtonHover : {}),
              }}
              onClick={() => setShowMusic(!showMusic)}
              onMouseEnter={() => setHoveredButton("music")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span
                style={{
                  ...styles.buttonText,
                  ...(hoveredButton === "music" ? styles.buttonTextHover : {}),
                }}
              >
                Música Favorita
              </span>
              <span
                style={{
                  ...styles.arrow,
                  ...(hoveredButton === "music" ? styles.arrowHover : {}),
                }}
              >
                {showMusic ? "▼" : "▶"}
              </span>
            </button>
            <div style={styles.expandable(showMusic)}>
              <ul style={styles.list}>
                {nicolasData.music.map((song, index) => (
                  <li key={index} style={styles.listItem}>
                    <a
                      href={song.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...styles.link,
                        ...(hoveredLink === `music-${index}`
                          ? styles.linkHover
                          : {}),
                      }}
                      onMouseEnter={() => setHoveredLink(`music-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span
                        style={{
                          ...styles.linkIcon,
                          ...(hoveredLink === `music-${index}`
                            ? styles.linkIconHover
                            : {}),
                        }}
                      >
                        {getIcon(song.type)}
                      </span>
                      {song.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={styles.section}>
            <button
              style={{
                ...styles.clubToggleButton,
                ...(hoveredButton === "club"
                  ? styles.clubToggleButtonHover
                  : {}),
              }}
              onClick={() => setShowModal(true)}
              onMouseEnter={() => setHoveredButton("club")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div style={styles.clubButtonContent}>
                <span
                  style={{
                    ...styles.clubButtonText,
                    ...(hoveredButton === "club"
                      ? styles.clubButtonTextHover
                      : {}),
                  }}
                >
                  Club
                </span>
                <span style={styles.clubBadge}>Ver Campeonatos</span>
              </div>
              <span
                style={{
                  ...styles.arrow,
                  ...(hoveredButton === "club" ? styles.arrowHover : {}),
                }}
              >
                ▶
              </span>
            </button>
          </div>
        </div>
      </section>

      <EstudiantesModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
