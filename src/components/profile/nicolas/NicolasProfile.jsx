"use client";

import { useState } from "react";
import { useMediaQuery } from "../../../hooks/MediaQuery";
import { nicolasData } from "./nicolasData";
import { nicolasStyles as styles, nicolasAnimations } from "./nicolasStyles";
import EstudiantesModal from "./EstudiantesModal/EstudiantesModal";
import SkillProgressBar from "../../shared/SkillProgressBar";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { useTheme } from "../../../hooks/useTheme";
import SocialButton from "../../shared/SocialButton";

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

const getSocialIcon = (name) => {
  switch (name) {
    case "LinkedIn":
      return <ImLinkedin />;
    case "GitHub":
      return <ImGithub />;
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
  const { isDark } = useTheme();

  return (
    <div style={{ minHeight: "100vh" }}>
      <style>{nicolasAnimations}</style>

      {/* Header Section */}
      <section style={styles.header(isDark)}>
        <div style={styles.particlesContainer}>
          {[...Array(20)].map((_, i) => (
            <div key={i} style={styles.particle(i, isDark)} />
          ))}
        </div>
        <div style={styles.headerContent(isTablet)}>
          <img
            src={nicolasData.image || "/placeholder.svg"}
            alt={nicolasData.name}
            style={styles.profileImage(isDark)}
          />
          <div style={{ flex: 1 }}>
            <h1 style={styles.name(isDark)}>{nicolasData.name}</h1>
            <p style={styles.role(isDark)}>{nicolasData.role}</p>
            <p style={styles.secondaryData}>{nicolasData.location}</p>
            <p style={styles.secondaryData}>{nicolasData.age}</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              {nicolasData.socialMedias.map((media, index) => (
                <SocialButton
                  key={index}
                  icon={getSocialIcon(media.name)}
                  label={media.name}
                  url={media.url}
                  color={media.color}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={styles.info}>
        <div style={{ margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle(isDark)}>Sobre mí</h2>
            <p style={styles.bio}>{nicolasData.bio}</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle(isDark)}>Habilidades</h2>
            <div style={styles.skills}>
              {nicolasData.skills.map((skill, index) => (
                <SkillProgressBar
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                />
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
          <div style={styles.section(isDark)}>
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
                  ...styles.buttonText(isDark),
                  ...(hoveredButton === "movies"
                    ? styles.buttonTextHover(isDark)
                    : {}),
                }}
              >
                Películas y Series Favoritas
              </span>
              <span
                style={{
                  ...styles.arrow(isDark),
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
                        ...styles.link(isDark),
                        ...(hoveredLink === `movie-${index}`
                          ? styles.linkHover(isDark)
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
          <div style={styles.section(isDark)}>
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
                  ...styles.buttonText(isDark),
                  ...(hoveredButton === "music"
                    ? styles.buttonTextHover(isDark)
                    : {}),
                }}
              >
                Música Favorita
              </span>
              <span
                style={{
                  ...styles.arrow(isDark),
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
                        ...styles.link(isDark),
                        ...(hoveredLink === `music-${index}`
                          ? styles.linkHover(isDark)
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

          {/* Club */}
          <div style={styles.section(isDark)}>
            <button
              style={{
                ...styles.clubToggleButton(isDark),
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
                    ...styles.clubButtonText(isDark),
                    ...(hoveredButton === "club"
                      ? styles.clubButtonTextHover(isDark)
                      : {}),
                  }}
                >
                  Club
                </span>
                <span style={styles.clubBadge(isDark)}>Ver Campeonatos</span>
              </div>
              <span
                style={{
                  ...styles.arrow(isDark),
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
        isDark={isDark}
      />
    </div>
  );
}
