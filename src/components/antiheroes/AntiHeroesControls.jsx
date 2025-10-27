import SearchBar from "./SearchBar";
import UniverseFilter from "./UniverseFilter";

export default function AntiHeroesControls({
  searchTerm,
  setSearchTerm,
  selectedUniverse,
  setSelectedUniverse,
  universes,
}) {
  return (
    <div style={styles.controls}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UniverseFilter
        selectedUniverse={selectedUniverse}
        setSelectedUniverse={setSelectedUniverse}
        universes={universes}
      />
    </div>
  );
}

const styles = {
  controls: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "30px",
  },
};
