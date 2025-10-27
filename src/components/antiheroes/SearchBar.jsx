"use client";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar por nombre o descripción..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
    </div>
  );
}

const styles = {
  searchContainer: {
    marginBottom: "25px",
  },
  searchInput: {
    width: "100%",
    padding: "15px 20px",
    fontSize: "16px",
    background: "#0a0a0a",
    border: "2px solid #8b0000",
    borderRadius: "8px",
    color: "#e0e0e0",
    outline: "none",
    transition: "all 0.3s ease",
  },
};
