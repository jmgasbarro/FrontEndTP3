// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout.jsx";
import HomePage from "../containers/pages/HomePage.jsx";
import AntiHeroesPage from "../containers/pages/AntiHeroesPage.jsx";
import ApiDataPage from "../containers/pages/ApiDataPage.jsx";
import BitacoraPage from "../containers/pages/BitacoraPage.jsx";
import ProfilePage from "../containers/pages/ProfilePage.jsx";
import DiagramsPage from "../containers/pages/DiagramsPage.jsx";
// ...otras páginas

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/bitacora" element={<BitacoraPage />} />
        <Route path="/antiheroes" element={<AntiHeroesPage />} />
        <Route path="/api-data" element={<ApiDataPage />} />
        <Route path="/diagrams" element={<DiagramsPage />} />
        {/* resto de rutas */}
      </Route>
    </Routes>
  );
}
