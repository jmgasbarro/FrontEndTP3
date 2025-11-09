import SearchBar from "./SearchBar";
import UniverseFilter from "./UniverseFilter";
import { useTheme } from "../../hooks/useTheme";

export default function AntiHeroesControls({
  searchTerm,
  setSearchTerm,
  selectedUniverse,
  setSelectedUniverse,
  universes,
}) {
  const { isDark } = useTheme();

  return (
    <div style={styles.controls(isDark)}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isDark={isDark}
      />
      <UniverseFilter
        selectedUniverse={selectedUniverse}
        setSelectedUniverse={setSelectedUniverse}
        universes={universes}
        isDark={isDark}
      />
    </div>
  );
}

const styles = {
  controls: (isDark) => ({
    background: isDark
      ? "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)"
      : "#ffffff", // Fondo claro
    border: isDark ? "2px solid #333" : "2px solid #e0e0e0", // Borde claro
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "30px",
  }),
};
