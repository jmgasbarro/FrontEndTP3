"use client";

import { useState } from "react";
import { useMediaQuery } from "../../../hooks/MediaQuery";
import { nicolasData } from "./nicolasData";
import { nicolasStyles as styles } from "./nicolasStyles";

export default function NicolasProfile() {
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <section style={styles.header}>
        <div style={styles.headerContent(isTablet)}>
          <img
            src={nicolasData.image || "/placeholder.svg"}
            alt={nicolasData.name}
            style={styles.profileImage}
          />
          <div style={{ flex: 1 }}>
            <h1 style={styles.name}>{nicolasData.name}</h1>
            <p style={styles.role}>{nicolasData.role}</p>
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

      {/* Movies and Music Section */}
      <section style={styles.sections}>
        <div style={{ margin: "0 auto", display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Movies */}
          <div style={styles.section}>
            <button
              style={styles.toggleButton}
              onClick={() => setShowMovies(!showMovies)}
            >
              <span style={styles.buttonText}>Películas Favoritas</span>
              <span style={styles.arrow}>{showMovies ? "▼" : "▶"}</span>
            </button>
            {showMovies && (
              <ul style={styles.list}>
                {nicolasData.movies.map((movie, index) => (
                  <li key={index} style={styles.listItem}>
                    <a
                      href={movie.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.link}
                    >
                      {movie.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Music */}
          <div style={styles.section}>
            <button
              style={styles.toggleButton}
              onClick={() => setShowMusic(!showMusic)}
            >
              <span style={styles.buttonText}>Música Favorita</span>
              <span style={styles.arrow}>{showMusic ? "▼" : "▶"}</span>
            </button>
            {showMusic && (
              <ul style={styles.list}>
                {nicolasData.music.map((song, index) => (
                  <li key={index} style={styles.listItem}>
                    <a
                      href={song.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.link}
                    >
                      {song.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
