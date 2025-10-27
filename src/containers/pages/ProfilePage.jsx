"use client";

import { useParams, Navigate } from "react-router-dom";

// Importar perfiles personalizados
import ManuelProfile from "../../components/profile/manuel/ManuelProfile";
import JuanProfile from "../../components/profile/juan/JuanProfile";
import GermanProfile from "../../components/profile/german/GermanProfile";
import NicolasProfile from "../../components/profile/nicolas/NicolasProfile";

export default function ProfilePage() {
  const params = useParams();
  const memberId = params.id;

  // Renderizar perfil personalizado según el miembro
  if (memberId === 'manuel') {
    return <ManuelProfile />;
  }
  
  if (memberId === 'juan') {
    return <JuanProfile />;
  }
  
  if (memberId === 'german') {
    return <GermanProfile />;
  }
  
  if (memberId === 'nicolas') {
    return <NicolasProfile />;
  }

  // Si el ID no existe, redirigir al inicio
  return <Navigate to="/" replace />;
}
