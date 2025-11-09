// src/components/profile/juan/JuanProfile.jsx
"use client";

import { useState } from "react";
import { useMediaQuery } from "../../../hooks/MediaQuery";
import { juanData } from "./juanData";
import { juanStyles as styles } from "./juanStyles";
import SkillProgressBar from "../../shared/SkillProgressBar";

export default function JuanProfile() {
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null); // Para iconos sociales
  const [hoveredElement, setHoveredElement] = useState(null); // 🆕 NUEVO ESTADO PARA BRILLO
  const isTablet = useMediaQuery("(min-width: 768px)");

  const openModal = (item, type) => {
    setModalData({ ...item, type });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header Section con imagen de fondo + partículas */}
      <section style={styles.header}>
        {/* ... (código de overlay y partículas sin cambios) ... */}
        <div style={styles.backgroundImage} />
        <div style={styles.overlay} />
        <div style={styles.particlesContainer}>
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.particle,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Contenido del header */}
        <div style={styles.headerContent(isTablet)}>
          <img
            src={juanData.image}
            alt={juanData.name}
            // ⬇️ INICIO CAMBIOS DE HOVER (IMAGEN) ⬇️
            style={{
              ...styles.profileImage,
              ...(hoveredElement === "profileImage"
                ? styles.profileImageHover
                : {}),
            }}
            onMouseEnter={() => setHoveredElement("profileImage")}
            onMouseLeave={() => setHoveredElement(null)}
            // ⬆️ FIN CAMBIOS DE HOVER (IMAGEN) ⬆️
          />
          <div
            style={{
              flex: 1,
              textAlign: isTablet ? "left" : "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <h1 style={styles.name}>{juanData.name}</h1>
            <p style={styles.role}>{juanData.role}</p>
            <p style={styles.location}>{juanData.location}</p>
            <p style={styles.age}>{juanData.age}</p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={styles.info}>
        {/* ... (código de Bio y Skills sin cambios) ... */}
        <div style={{ margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle}>Sobre mí</h2>
            <p style={styles.bio}>{juanData.bio}</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle}>Habilidades</h2>
            <div style={styles.skillsContainer}>
              {juanData.skills.map((skill, index) => (
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

      {/* Movies, Music and Contact Section */}
      <section style={styles.sections}>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {/* Movies */}
          <div style={styles.section}>
            <button
              style={styles.toggleButton}
              onClick={() => setShowMovies(!showMovies)}
            >
              {/* ⬇️ INICIO CAMBIOS DE HOVER (TEXTO BOTÓN) ⬇️ */}
              <span
                style={{
                  ...styles.buttonText,
                  ...(hoveredElement === "movies"
                    ? styles.buttonTextHover
                    : {}),
                }}
                onMouseEnter={() => setHoveredElement("movies")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                🎬 Películas Favoritas
              </span>
              {/* ⬆️ FIN CAMBIOS DE HOVER (TEXTO BOTÓN) ⬆️ */}
              <span style={styles.arrow}>{showMovies ? "▼" : "▶"}</span>
            </button>
            {showMovies && (
              // ... (código gridContainer sin cambios) ...
              <div style={styles.gridContainer}>
                {juanData.movies.map((movie, index) => (
                  <div
                    key={index}
                    style={styles.card}
                    onClick={() => openModal(movie, "movie")}
                  >
                    <img
                      src={movie.image}
                      alt={movie.spanishTitle}
                      style={styles.cardImage}
                    />
                    <p style={styles.cardTitle}>{movie.spanishTitle}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Music/Albums */}
          <div style={styles.section}>
            <button
              style={styles.toggleButton}
              onClick={() => setShowMusic(!showMusic)}
            >
              {/* ⬇️ INICIO CAMBIOS DE HOVER (TEXTO BOTÓN) ⬇️ */}
              <span
                style={{
                  ...styles.buttonText,
                  ...(hoveredElement === "music" ? styles.buttonTextHover : {}),
                }}
                onMouseEnter={() => setHoveredElement("music")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                🎵 Discos Favoritos
              </span>
              {/* ⬆️ FIN CAMBIOS DE HOVER (TEXTO BOTÓN) ⬆️ */}
              <span style={styles.arrow}>{showMusic ? "▼" : "▶"}</span>
            </button>
            {showMusic && (
              // ... (código gridContainer sin cambios) ...
              <div style={styles.gridContainer}>
                {juanData.albums.map((album, index) => (
                  <div
                    key={index}
                    style={styles.card}
                    onClick={() => openModal(album, "album")}
                  >
                    <img
                      src={album.image}
                      alt={album.fullTitle}
                      style={styles.cardImage}
                    />
                    <p style={styles.cardTitle}>{album.fullTitle}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Proyectos */}
          <div style={styles.section}>
            <button
              style={styles.toggleButton}
              onClick={() => setShowProjects(!showProjects)}
            >
              {/* ⬇️ INICIO CAMBIOS DE HOVER (TEXTO BOTÓN) ⬇️ */}
              <span
                style={{
                  ...styles.buttonText,
                  ...(hoveredElement === "projects"
                    ? styles.buttonTextHover
                    : {}),
                }}
                onMouseEnter={() => setHoveredElement("projects")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                📁 Proyectos
              </span>
              {/* ⬆️ FIN CAMBIOS DE HOVER (TEXTO BOTÓN) ⬆️ */}
              <span style={styles.arrow}>{showProjects ? "▼" : "▶"}</span>
            </button>
            {showProjects && (
              // ... (código gridContainer sin cambios) ...
              <div style={styles.gridContainer}>
                {juanData.projects.map((project, index) => (
                  <div
                    key={index}
                    style={styles.card}
                    onClick={() => openModal(project, "project")}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={styles.cardImage}
                    />
                    <p style={styles.cardTitle}>{project.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Contact */}
          <div style={styles.section}>
            <button
              style={styles.toggleButton}
              onClick={() => setShowContact(!showContact)}
            >
              {/* ⬇️ INICIO CAMBIOS DE HOVER (TEXTO BOTÓN) ⬇️ */}
              <span
                style={{
                  ...styles.buttonText,
                  ...(hoveredElement === "contact"
                    ? styles.buttonTextHover
                    : {}),
                }}
                onMouseEnter={() => setHoveredElement("contact")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                📧 Contacto
              </span>
              {/* ⬆️ FIN CAMBIOS DE HOVER (TEXTO BOTÓN) ⬆️ */}
              <span style={styles.arrow}>{showContact ? "▼" : "▶"}</span>
            </button>
            {showContact && (
              // ... (código de contacto e iconos sociales sin cambios) ...
              <>
                <ul style={styles.contactList}>
                  <li style={styles.contactItem}>
                    <strong>Teléfono:</strong>{" "}
                    <a
                      href={`tel:${juanData.contact.phone}`}
                      style={styles.contactLink}
                    >
                      {juanData.contact.phone}
                    </a>
                  </li>
                  <li style={styles.contactItem}>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${juanData.contact.email}`}
                      style={styles.contactLink}
                    >
                      {juanData.contact.email}
                    </a>
                  </li>
                </ul>
                <div style={styles.socialIconsContainer}>
                  <a
                    href={juanData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.socialIconLink,
                      ...(hoveredIcon === "linkedin"
                        ? styles.socialIconLinkHover
                        : {}),
                    }}
                    onMouseEnter={() => setHoveredIcon("linkedin")}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.705-.52-1.248-1.342-1.248-.822 0-1.359.543-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a
                    href={juanData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.socialIconLink,
                      ...(hoveredIcon === "github"
                        ? styles.socialIconLinkHover
                        : {}),
                    }}
                    onMouseEnter={() => setHoveredIcon("github")}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalData && (
        // ... (código del modal sin cambios) ...
        <div style={styles.modal} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeModal}>
              ✕
            </button>
            <img
              src={modalData.image}
              alt={modalData.title}
              style={styles.modalImage}
            />
            <h3 style={styles.modalTitle}>{modalData.title}</h3>
            <p style={styles.modalDescription}>{modalData.description}</p>
            {modalData.type === "movie" && modalData.trailer && (
              <div style={styles.mediaContainer}>
                <h4 style={styles.mediaTitle}>Tráiler:</h4>
                <iframe
                  src={modalData.trailer}
                  width="100%"
                  height="315"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={styles.iframe}
                ></iframe>
              </div>
            )}
            {modalData.type === "album" && modalData.playlist && (
              <div style={styles.mediaContainer}>
                <h4 style={styles.mediaTitle}>Lista de reproducción:</h4>
                <iframe
                  src={modalData.playlist}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={styles.iframe}
                ></iframe>
              </div>
            )}
            {modalData.type === "project" && (
              <div style={styles.mediaContainer}>
                {modalData.repoLink && (
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={styles.mediaTitle}>Repositorio en GitHub:</h4>
                    <a
                      href={modalData.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...styles.contactLink,
                        fontSize: "16px",
                        wordBreak: "break-all",
                      }}
                    >
                      {modalData.repoLink}
                    </a>
                  </div>
                )}
                {modalData.deployLink && (
                  <div>
                    <h4 style={styles.mediaTitle}>Ver App Desplegada:</h4>
                    <a
                      href={modalData.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...styles.contactLink,
                        fontSize: "16px",
                        fontWeight: "bold",
                        wordBreak: "break-all",
                      }}
                    >
                      {modalData.deployLink}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
