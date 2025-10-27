// src/components/api-data/ApiDataContent.jsx

import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import ComicsGrid from "./ComicsGrid";
import Pagination from "./Pagination";

export default function ApiDataContent({
  comics,
  loading,
  error,
  page,
  totalPaginas, // <--- 1. ¡AHORA RECIBE EL DATO!
  handlePrevPage,
  handleNextPage,
  fetchComics,
}) {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} fetchComics={fetchComics} />;
  }
  
  return (
    <>
      <ComicsGrid comics={comics} />

      {/* Solo muestra la paginación si hay más de una página */}
      {totalPaginas > 1 && (
        <Pagination
          page={page}
          totalPaginas={totalPaginas} // <--- 2. ¡Y AHORA SE LO PASA AL COMPONENTE HIJO!
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      )}
    </>
  );
}