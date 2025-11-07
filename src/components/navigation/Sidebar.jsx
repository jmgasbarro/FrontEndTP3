"use client";

import { useState, useEffect } from "react";
import { navigationLinks, profileLinks } from "../../data/navigation";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "../../hooks/MediaQuery";
import { useTheme } from "../../hooks/useTheme";

export default function Sidebar({ isOpen, onClose }) {
  const [showProfiles, setShowProfiles] = useState(false);
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
            style={styles.themeToggle(isDark)}
            aria-label="Toggle theme"
          >
            <span style={styles.themeIcon}>{isDark ? "☀️" : "🌙"}</span>
            <span style={styles.themeText}>
              Cambiar a {isDark ? "Modo Claro" : "Modo Oscuro"}
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
              }}
            >
              <span style={styles.navIcon}>{link.icon}</span>
              {link.label}
            </Link>
          ))}

          <div style={styles.profilesSection}>
            <button
              style={styles.profilesToggle(isDark)}
              onClick={() => setShowProfiles(!showProfiles)}
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
                    }}
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
  },
  themeToggle: (isDark) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 15px",
    width: "100%",
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    border: isDark ? "1px solid #ff0000" : "1px solid #d32f2f",
    boxShadow: isDark
      ? "0 0 15px rgba(139, 0, 0, 0.5)"
      : "0 2px 8px rgba(211, 47, 47, 0.3)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }),
  themeIcon: {
    fontSize: "18px",
  },
  themeText: {
    flex: 1,
    textAlign: "left",
  },
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
    border: "1px solid transparent",
  }),
  navLinkActive: (isDark) => ({
    background: isDark
      ? "linear-gradient(90deg, #8b0000 0%, #b30000 100%)"
      : "linear-gradient(90deg, #d32f2f 0%, #c62828 100%)",
    color: "#fff",
    border: isDark ? "1px solid #ff0000" : "1px solid #d32f2f",
    boxShadow: isDark
      ? "0 0 15px rgba(139, 0, 0, 0.5)"
      : "0 2px 8px rgba(211, 47, 47, 0.3)",
  }),
  navIcon: {
    fontSize: "clamp(16px, 3vw, 20px)",
  },
  profilesToggle: (isDark) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px 15px",
    color: isDark ? "#b0b0b0" : "#4a4a4a",
    fontSize: "clamp(14px, 2.5vw, 16px)",
    fontWeight: "500",
    background: "transparent",
    border: "1px solid transparent",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    transition: "all 0.3s ease",
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
    transition: "all 0.3s ease",
    border: "1px solid transparent",
  }),
  profileLinkActive: (isDark) => ({
    background: isDark ? "rgba(139, 0, 0, 0.3)" : "rgba(211, 47, 47, 0.1)",
    color: isDark ? "#ff6666" : "#d32f2f",
    border: isDark ? "1px solid #8b0000" : "1px solid #d32f2f",
  }),
};
