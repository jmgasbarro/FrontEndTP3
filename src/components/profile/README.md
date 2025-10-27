# Perfiles del Equipo

Esta carpeta contiene los perfiles personalizados de cada miembro del equipo.

## 📁 Estructura

Cada miembro tiene su propia carpeta independiente:

```
profile/
├── german/
│   ├── GermanProfile.jsx    # Componente del perfil
│   ├── germanData.js         # Datos personales
│   ├── germanStyles.js       # Estilos personalizados
│   └── README.md             # Guía de personalización
├── juan/
│   ├── JuanProfile.jsx
│   ├── juanData.js
│   ├── juanStyles.js
│   └── README.md
├── manuel/
│   ├── ManuelProfile.jsx
│   ├── manuelData.js
│   ├── manuelStyles.js
│   └── README.md
└── nicolas/
    ├── NicolasProfile.jsx
    ├── nicolasData.js
    ├── nicolasStyles.js
    └── README.md
```

## 🎨 Personalización

Cada miembro puede modificar libremente los archivos de su propia carpeta:

- **`*Data.js`**: Información personal, habilidades, películas, música
- **`*Styles.js`**: Colores, tamaños, fuentes, diseño
- **`*Profile.jsx`**: Estructura del perfil, agregar nuevas secciones

## 🚀 Ventajas

- ✅ **Independencia total**: Cada uno trabaja en su carpeta sin conflictos
- ✅ **Control de versiones limpio**: Git puede hacer merge automático
- ✅ **Creatividad libre**: Cada perfil puede ser completamente único
- ✅ **Fácil mantenimiento**: Todo relacionado con un perfil está en un solo lugar

## 📝 Notas

Los perfiles están registrados en `src/containers/pages/ProfilePage.jsx`.
Si no existe un perfil para un ID específico, se redirige automáticamente al inicio.
