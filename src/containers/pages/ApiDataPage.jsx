"use client";

import ApiDataHeader from "../../components/api-data/ApiDataHeader";
import ApiDataContent from "../../components/api-data/ApiDataContent";
import { useApiData } from "../../components/api-data/useApiData";

export default function ApiDataPage() {
  const {
    comics,
    loading,
    error,
    page,
    totalPaginas, // <--- 1. RECIBE EL VALOR DESDE EL HOOK
    handlePrevPage,
    handleNextPage,
    fetchComics,
  } = useApiData();

  return (
    <div style={styles.container}>
      <section style={styles.content}>
        <ApiDataHeader page={page} />
        <ApiDataContent
          comics={comics}
          loading={loading}
          error={error}
          page={page}
          totalPaginas={totalPaginas} // <--- 2. PÁSALO COMO PROP A ApiDataContent
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          fetchComics={fetchComics}
        />
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
  },
  content: {
    margin: "0 auto",
    padding: "60px 40px",
  },
};