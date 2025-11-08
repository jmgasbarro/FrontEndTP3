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
        {/* Imagen de fondo con efecto parallax */}
        <div style={styles.backgroundImage} />

        {/* Overlay oscuro para mejorar legibilidad */}
        <div style={styles.overlay} />

        {/* Partículas animadas de fondo */}
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
            style={styles.profileImage}
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
        <div style={{ margin: "0 auto" }}>
          {/* Bio */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle}>Sobre mí</h2>
            <p style={styles.bio}>{juanData.bio}</p>
          </div>

          {/* Skills - Sin iconos, solo badges */}
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
              <span style={styles.buttonText}>🎬 Películas Favoritas</span>
              <span style={styles.arrow}>{showMovies ? "▼" : "▶"}</span>
            </button>
            {showMovies && (
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
              <span style={styles.buttonText}>🎵 Discos Favoritos</span>
              <span style={styles.arrow}>{showMusic ? "▼" : "▶"}</span>
            </button>
            {showMusic && (
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
          {/* 🆕 INICIO SECCIÓN PROYECTOS */}         {" "}
          <div style={styles.section}>
                       {" "}
            <button
              style={styles.toggleButton}
              onClick={() => setShowProjects(!showProjects)}
            >
                            <span style={styles.buttonText}>📁 Proyectos</span> 
                         {" "}
              <span style={styles.arrow}>{showProjects ? "▼" : "▶"}</span>     
                   {" "}
            </button>
                       {" "}
            {showProjects && (
              <div style={styles.gridContainer}>
                               {" "}
                {juanData.projects.map((project, index) => (
                  <div
                    key={index}
                    style={styles.card}
                    onClick={() => openModal(project, "project")} // 🆕 Nuevo 'type'
                  >
                                       {" "}
                    <img
                      src={project.image}
                      alt={project.title}
                      style={styles.cardImage}
                    />
                                       {" "}
                    <p style={styles.cardTitle}>{project.title}</p>             
                       {" "}
                  </div>
                ))}
                             {" "}
              </div>
            )}
                     {" "}
          </div>
                    {/* 🆕 FIN SECCIÓN PROYECTOS */}
          {/* Contact */}
          <div style={styles.section}>
            <button
              style={styles.toggleButton}
              onClick={() => setShowContact(!showContact)}
            >
              <span style={styles.buttonText}>📧 Contacto</span>
              <span style={styles.arrow}>{showContact ? "▼" : "▶"}</span>
            </button>
            {showContact && (
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
                <li style={styles.contactItem}>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href={juanData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactLink}
                  >
                    linkedin.com/in/juan-dualibe
                  </a>
                </li>
                <li style={styles.contactItem}>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href={juanData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactLink}
                  >
                    github.com/juandualibe
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalData && (
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
            {/* 🆕 INICIO BLOQUE PARA PROYECTOS (MODIFICADO) */}
            {modalData.type === "project" && (
              <div style={styles.mediaContainer}>
                
                {/* Link al Repositorio (si existe) */}
                {modalData.repoLink && (
                  <div style={{ marginBottom: "20px" }}> {/* Añadí un margen para separar los links */}
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

                {/* Link al Despliegue (si existe) */}
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
                        fontWeight: "bold", // Un poco más de énfasis
                        wordBreak: "break-all",
                      }}
                    >
                      {modalData.deployLink}
                    </a>
                  </div>
                )}

              </div>
            )}
            {/* 🆕 FIN BLOQUE PARA PROYECTOS */}
          </div>
        </div>
      )}
    </div>
  );
}
