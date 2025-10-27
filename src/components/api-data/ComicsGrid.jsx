import ComicCard from "./ComicCard";

export default function ComicsGrid({ comics }) {
  return (
    <div style={styles.grid}>
      {comics.map((comic) => (
        <ComicCard key={comic.id} comic={comic} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
  },
};
