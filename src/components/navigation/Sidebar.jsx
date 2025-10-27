"use client";

import { useState, useEffect } from "react";
import { navigationLinks, profileLinks } from "../../data/navigation";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "../../hooks/MediaQuery";

export default function Sidebar({ isOpen, onClose }) {
  const [showProfiles, setShowProfiles] = useState(false);
  const { pathname } = useLocation();

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
          ...styles.sidebar(isTablet),
          ...(isOpen ? styles.sidebarOpen : {}),
        }}
      >
        <div style={styles.logo}>
          <h2 style={styles.logoText}>TREE GROUP</h2>
          <p style={styles.logoSubtext}>Antiheroes Edition</p>
        </div>

        <nav style={styles.nav}>
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.navLink,
                ...(isActive(link.path) ? styles.navLinkActive : {}),
              }}
            >
              <span style={styles.navIcon}>{link.icon}</span>
              {link.label}
            </Link>
          ))}

          <div style={styles.profilesSection}>
            <button
              style={styles.profilesToggle}
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
                      ...styles.profileLink,
                      ...(isActive(link.path) ? styles.profileLinkActive : {}),
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
  sidebar: (isTablet) => ({
    position: "fixed",
    left: isTablet ? "0" : "-280px",
    top: 0,
    display: "flex",
    flexDirection: "column",
    width: "280px",
    height: "100vh",
    background: "linear-gradient(180deg, #0a0a0a 0%, #1a0a0a 100%)",
    borderRight: "3px solid #8b0000",
    paddingTop: isTablet ? "25px" : "80px",
    zIndex: 1000,
    boxShadow: "4px 0 20px rgba(139, 0, 0, 0.3)",
    transition: "left 0.3s ease", // Smooth transition
  }),
  sidebarOpen: {
    left: 0,
  },
  logo: {
    padding: "0 25px 25px",
    borderBottom: "2px solid #8b0000",
  },
  logoText: {
    fontSize: "clamp(24px, 5vw, 32px)", // Responsive font size
    fontWeight: "700",
    color: "#ff0000",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 10px #ff0000, 0 0 20px #8b0000",
    marginBottom: "5px",
  },
  logoSubtext: {
    fontSize: "clamp(10px, 2vw, 12px)", // Responsive font size
    color: "#888",
    fontStyle: "italic",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "15px",
    overflowY: "auto",
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px 15px",
    color: "#b0b0b0",
    textDecoration: "none",
    fontSize: "clamp(14px, 2.5vw, 16px)", // Responsive font size
    fontWeight: "500",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
  },
  navLinkActive: {
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    border: "1px solid #ff0000",
    boxShadow: "0 0 15px rgba(139, 0, 0, 0.5)",
  },
  navIcon: {
    fontSize: "clamp(16px, 3vw, 20px)", // Responsive icon size
  },
  profilesToggle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px 15px",
    color: "#b0b0b0",
    fontSize: "clamp(14px, 2.5vw, 16px)", // Responsive font size
    fontWeight: "500",
    background: "transparent",
    border: "1px solid transparent",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    transition: "all 0.3s ease",
  },
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
  profileLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 15px",
    color: "#888",
    textDecoration: "none",
    fontSize: "clamp(12px, 2vw, 14px)", // Responsive font size
    fontWeight: "500",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
  },
  profileLinkActive: {
    background: "rgba(139, 0, 0, 0.3)",
    color: "#ff6666",
    border: "1px solid #8b0000",
  },
};
