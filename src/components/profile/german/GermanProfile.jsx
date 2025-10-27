"use client";

import { useState } from "react";
import { useMediaQuery } from "../../../hooks/MediaQuery";
import { germanData } from "./germanData";
import { germanStyles as styles } from "./germanStyles";

export default function GermanProfile() {
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header Section */}
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

      {/* Info Section */}
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
                {germanData.movies.map((movie, index) => (
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
                {germanData.music.map((song, index) => (
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
