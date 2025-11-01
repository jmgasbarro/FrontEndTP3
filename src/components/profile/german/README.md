# Perfil de Germán

##  Archivos en esta carpeta

- **GermanProfile.jsx**: Componente de perfil personalizado con animaciones y funcionalidades interactivas.
- **germanData.js**: Datos personales (bio, habilidades, películas, música, etc.) con niveles para animación de barras de habilidades.
- **germanStyles.js**: Estilos personalizados (colores, tamaños, layout, tarjetas, botones).
- **GermanAnimations.css**: Animaciones y efectos CSS para el componente:
  - Fade-in de secciones y header
  - Hover animado en tarjetas de películas y música
  - Barras de habilidades animadas
  - Hover en iconos de redes sociales
  - Lightbox para reproducir videos con miniaturas

##  Funcionalidades y mejoras implementadas

1. **Animaciones suaves**
   - Fade-in al cargar el perfil y secciones (`.fade-in-up`).
   - Efecto hover en tarjetas de películas y música (`.video-card-hover`).
   - Hover en iconos de redes sociales (`.social-hover`).

2. **Búsqueda y filtrado**
   - Input para buscar películas o música por título.
   - Filtrado dinámico mientras se escribe.

3. **Barras de progreso de habilidades**
   - Cada skill tiene un nivel (`level`) que se refleja en la barra animada.
   - Animación al cargar la página desde 0 hasta el porcentaje correspondiente.

4. **Galería de videos con Lightbox**
   - Miniaturas de películas y música generadas automáticamente desde YouTube.
   - Click en la tarjeta abre un lightbox con el video.
   - Se puede cerrar haciendo click o presionando la tecla `ESC`.

5. **Diseño responsive**
   - Ajuste automático del layout para tabletas y pantallas grandes.
   - Grid dinámico en la sección de películas y música.

6. **Mejoras de UX**
   - Transiciones suaves en elementos interactivos.
   - Indicadores visuales claros para secciones expandibles (películas y música).
   - Animaciones y efectos coherentes con la paleta de colores del perfil.

##  Dependencias

- React 18+
- Hook personalizado `useMediaQuery` para manejo de responsive.
- Iconos de Font Awesome para redes sociales (opcional, se pueden reemplazar por SVG).

##  Uso

1. Instalar dependencias:
   ```bash
   npm install





