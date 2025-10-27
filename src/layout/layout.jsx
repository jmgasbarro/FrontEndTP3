"use client";

import Sidebar from "../components/navigation/Sidebar.jsx";
import Footer from "../components/navigation/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "../hooks/MediaQuery.js";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <div className="app-shell">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={styles.mobileMenuButton(isTablet)}
        aria-label="Toggle menu"
      >
        <span style={styles.hamburger}>{isSidebarOpen ? "X" : "☰"}</span>
      </button>

      <main className="app-content">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

const styles = {
  mobileMenuButton: (isTablet) => ({
    position: "fixed",
    top: "1rem",
    left: "1rem",
    zIndex: 1001,
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    border: "2px solid #ff0000",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(139, 0, 0, 0.4)",
    display: isTablet ? "none" : "block",
  }),
  hamburger: {
    display: "block",
    lineHeight: 1,
    width: "20px",
  },
};
