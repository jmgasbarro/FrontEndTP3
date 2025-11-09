"use client";

import { useState, useEffect } from "react";
import { navigationLinks, profileLinks } from "../../data/navigation";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "../../hooks/MediaQuery";
import { useTheme } from "../../hooks/useTheme";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export default function Sidebar({ isOpen, onClose }) {
  const [showProfiles, setShowProfiles] = useState(false);
  const [hovered, setHovered] = useState(null);
  const { pathname } = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const isActive = (path) => pathname === path;

  const isTablet = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isOpen && isTablet) {
      onClose();
    }
  }, [pathname, isOpen, isTablet, onClose]);

  return (
    <>
      {isOpen && <div style={styles.overlay} onClick={onClose} />}

      <aside
        style={{
          ...styles.sidebar(isTablet, isDark),
          ...(isOpen ? styles.sidebarOpen : {}),
        }}
      >
        <div style={styles.logo}>
          <h2 style={styles.logoText(isDark)}>TREE GROUP</h2>
          <p style={styles.logoSubtext(isDark)}>Antiheroes Edition</p>
        </div>

        <div style={styles.themeToggleContainer}>
          <button
            onClick={toggleTheme}
            style={styles.toggleTrack(isDark)}
            aria-label="Toggle theme"
            onMouseEnter={() => setHovered("theme")}
            onMouseLeave={() => setHovered(null)}
            role="switch"
            aria-checked={!isDark}
          >
            <span
              style={{
                ...styles.toggleKnob(isDark),
                ...(hovered === "theme" ? styles.toggleKnobHover(isDark) : {}),
              }}
            >
              {isDark ? <BsMoonFill size={25} /> : <BsSunFill size={25} />}
            </span>
          </button>
        </div>

        <nav style={styles.nav}>
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.navLink(isDark),
                ...(isActive(link.path) ? styles.navLinkActive(isDark) : {}),
                ...(hovered === link.path && !isActive(link.path)
                  ? styles.navLinkHover(isDark)
                  : {}),
              }}
              onMouseEnter={() => setHovered(link.path)}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={styles.navIcon}>{link.icon}</span>
              {link.label}
            </Link>
          ))}

          <div style={styles.profilesSection}>
            <button
              style={{
                ...styles.profilesToggle(isDark),
                ...(hovered === "profiles"
                  ? styles.profilesToggleHover(isDark)
                  : {}),
              }}
              onClick={() => setShowProfiles(!showProfiles)}
              onMouseEnter={() => setHovered("profiles")}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={styles.navIcon}>👥</span>
              Perfiles
              <span style={styles.arrow}>{showProfiles ? "▼" : "▶"}</span>
            </button>

            {showProfiles && (
              <div style={styles.profilesList}>
                {profileLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      ...styles.profileLink(isDark),
                      ...(isActive(link.path)
                        ? styles.profileLinkActive(isDark)
                        : {}),
                      ...(hovered === link.path && !isActive(link.path)
                        ? styles.profileLinkHover(isDark)
                        : {}),
                    }}
                    onMouseEnter={() => setHovered(link.path)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span style={styles.navIcon}>{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
    display: "block",
  },
  sidebar: (isTablet, isDark) => ({
    position: "fixed",
    left: isTablet ? "0" : "-280px",
    top: 0,
    display: "flex",
    flexDirection: "column",
    width: "280px",
    height: "100vh",
    background: isDark
      ? "linear-gradient(180deg, #0a0a0a 0%, #1a0a0a 100%)"
      : "linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)",
    borderRight: isDark ? "3px solid #8b0000" : "3px solid #d32f2f",
    paddingTop: isTablet ? "25px" : "80px",
    zIndex: 1000,
    boxShadow: isDark
      ? "4px 0 20px rgba(139, 0, 0, 0.3)"
      : "4px 0 20px rgba(0, 0, 0, 0.1)",
    transition: "left 0.3s ease, background 0.3s ease",
  }),
  sidebarOpen: {
    left: 0,
  },
  logo: {
    padding: "0 25px 25px",
    borderBottom: "2px solid var(--border-accent)",
  },
  logoText: (isDark) => ({
    fontSize: "clamp(24px, 5vw, 32px)",
    fontWeight: "700",
    color: isDark ? "#ff0000" : "#d32f2f",
    fontFamily: "Creepster, cursive",
    textShadow: isDark
      ? "0 0 10px #ff0000, 0 0 20px #8b0000"
      : "0 0 10px rgba(211, 47, 47, 0.3)",
    marginBottom: "5px",
    transition: "color 0.3s ease, text-shadow 0.3s ease",
  }),
  logoSubtext: (isDark) => ({
    fontSize: "clamp(10px, 2vw, 12px)",
    color: isDark ? "#888" : "#666",
    fontStyle: "italic",
    transition: "color 0.3s ease",
  }),
  themeToggleContainer: {
    padding: "15px 25px",
    borderBottom: "1px solid var(--border-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  themeLabel: (isDark) => ({
    fontSize: "14px",
    fontWeight: "600",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    transition: "color 0.3s ease",
  }),
  toggleTrack: (isDark) => ({
    position: "relative",
    width: "80px",
    height: "42px",
    background: isDark ? "#333" : "#ccc",
    borderRadius: "21px",
    border: isDark ? "1px solid #555" : "1px solid #bbb",
    cursor: "pointer",
    transition: "background 0.3s ease, border-color 0.3s ease",
  }),
  toggleKnob: (isDark) => ({
    position: "absolute",
    top: "2px",
    left: "2px",
    width: "36px",
    height: "36px",
    background: isDark
      ? "linear-gradient(135deg, #8b0000, #b30000)"
      : "linear-gradient(135deg, #d32f2f, #c62828)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px", // Tamaño del icono
    color: "#fff",
    transition:
      "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
    transform: isDark ? "translateX(37px)" : "translateX(0)",
  }),
  toggleKnobHover: (isDark) => ({
    boxShadow: isDark
      ? "0 0 15px rgba(255, 0, 0, 0.7)"
      : "0 0 15px rgba(211, 47, 47, 0.5)",
  }),
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "15px",
    overflowY: "auto",
  },
  navLink: (isDark) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px 15px",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    textDecoration: "none",
    fontSize: "clamp(14px, 2.5vw, 16px)",
    fontWeight: "500",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    transition: "all 0.2s ease-in-out",
  }),
  navLinkActive: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    color: "#fff",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: isDark ? "#ff0000" : "#d32f2f",
    boxShadow: isDark
      ? "0 0 15px rgba(139, 0, 0, 0.5)"
      : "0 2px 8px rgba(211, 47, 47, 0.3)",
  }),
  navLinkHover: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.2)" : "rgba(211, 47, 47, 0.05)",
    color: isDark ? "#ff6666" : "#b71c1c",
    borderColor: isDark ? "rgba(139, 0, 0, 0.5)" : "rgba(211, 47, 47, 0.2)",
  }),
  navIcon: {
    fontSize: "clamp(16px, 3vw, 20px)",
  },
  profilesSection: {},
  profilesToggle: (isDark) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px 15px",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    fontSize: "clamp(14px, 2.5vw, 16px)",
    fontWeight: "500",
    background: "transparent",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    transition: "all 0.2s ease-in-out",
  }),
  profilesToggleHover: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.2)" : "rgba(211, 47, 47, 0.05)",
    color: isDark ? "#ff6666" : "#b71c1c",
    borderColor: isDark ? "rgba(139, 0, 0, 0.5)" : "rgba(211, 47, 47, 0.2)",
  }),
  arrow: {
    marginLeft: "auto",
    fontSize: "12px",
  },
  profilesList: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    marginTop: "5px",
    paddingLeft: "15px",
  },
  profileLink: (isDark) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 15px",
    color: isDark ? "#888" : "#666",
    textDecoration: "none",
    fontSize: "clamp(12px, 2vw, 14px)",
    fontWeight: "500",
    borderRadius: "6px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    transition: "all 0.2s ease-in-out",
  }),
  profileLinkActive: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.3)" : "rgba(211, 47, 47, 0.1)",
    color: isDark ? "#ff6666" : "#d32f2f",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: isDark ? "#8b0000" : "#d32f2f",
  }),
  profileLinkHover: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.15)" : "rgba(211, 47, 47, 0.05)",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    borderColor: isDark ? "rgba(139, 0, 0, 0.3)" : "rgba(211, 47, 47, 0.1)",
  }),
};
