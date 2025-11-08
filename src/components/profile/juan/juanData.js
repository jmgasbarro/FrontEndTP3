// src/components/profile/juan/juanData.js

export const juanData = {
  name: "Juan Dualibe",
  role: "Full Stack Developer",
  location: "Córdoba, Argentina",
  age: "33 años",
  image: "/juan/juan.png",
  bio: "Desarrollador Full Stack con experiencia en tecnologías modernas. Me apasiona crear aplicaciones web escalables y eficientes, con especial enfoque en la experiencia del usuario y las mejores prácticas de desarrollo.",

  // 🆕 Skills sin iconos, solo nombres
  skills: [
    {
      name: "JavaScript",
      level: 90,
    },
    {
      name: "React",
      level: 70,
    },
    {
      name: "Java",
      level: 100,
    },
    {
      name: "Spring Framework",
      level: 90,
    },
    {
      name: "Docker",
      level: 100,
    },
    {
      name: "Apache Kafka",
      level: 90,
    },
    {
      name: "PostgreSQL",
      level: 100,
    },
    {
      name: "MongoDB",
      level: 90,
    },
  ],

  movies: [
    {
      title: "The Godfather (1972)",
      spanishTitle: "El Padrino",
      image: "/juan/El-Padrino.png",
      description:
        "Un clásico del cine dirigido por Francis Ford Coppola, que narra la historia de la familia mafiosa Corleone.",
      trailer: "https://www.youtube.com/embed/UaVTIH8mujA?controls=1",
    },
    {
      title: "Inception (2010)",
      spanishTitle: "El Origen",
      image: "/juan/Inception.png",
      description:
        "Dirigida por Christopher Nolan, una película de ciencia ficción sobre el robo de secretos a través de los sueños.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0?controls=1",
    },
    {
      title: "Inland Empire (2006)",
      spanishTitle: "Inland Empire",
      image: "/juan/Inland-Empire.jpeg",
      description:
        "Una obra experimental de David Lynch que explora la realidad y la percepción.",
      trailer: "https://www.youtube.com/embed/kS2v-icgBj4?controls=1",
    },
  ],

  albums: [
    {
      title: "The Bends (1995)",
      artist: "Radiohead",
      fullTitle: "Radiohead - The Bends",
      image: "/juan/radiohead-the-bends.jpg",
      description:
        "El segundo álbum de Radiohead, una obra maestra del rock alternativo de los 90.",
      playlist: "https://open.spotify.com/embed/album/35UJLpClj5EDrhpNIi4DFg",
    },
    {
      title: "Strung Out In Heaven (1998)",
      artist: "The Brian Jonestown Massacre",
      fullTitle: "Brian Jonestown Massacre - Strung Out In Heaven",
      image: "/juan/brian-jonestown-massacre.jpg",
      description:
        "Un álbum psicodélico de The Brian Jonestown Massacre, lleno de energía retro.",
      playlist: "https://open.spotify.com/embed/album/7seUcTqq2JR2u4XycWiD7f",
    },
    {
      title: "Monster (1994)",
      artist: "R.E.M",
      fullTitle: "R.E.M - Monster",
      image: "/juan/REM.webp",
      description:
        "Un álbum rock alternativo de R.E.M, cargado de guitarras crudas y vibrante energía.",
      playlist: "https://open.spotify.com/embed/album/17mS71JVgCCYLVdVcG0aUT",
    },
  ],

  // 🆕 INICIO DE LA NUEVA SECCIÓN DE PROYECTOS
  projects: [
    {
      title: "Proyecto 1: App de E-commerce",
      image: "/juan/ecommerce.png", // Asegúrate de tener esta imagen en tu carpeta 'public/juan'
      description:
        "Sitio e-commerce de una tienda de mascotas construido con HTML, CSS y JavaScript puro (vainilla).",
      repoLink: "https://github.com/juandualibe/E-commerce-CherryM", // Link al repositorio
      deployLink: "https://cherry-market.netlify.app/"
    },
    {
      title: "Proyecto 2: Blog Personal",
      image: "/juan/iptv.png",
      description:
        "Reproductor de listas IPTV desarrollado para desktop con ElectronJs",
      repoLink: "https://github.com/juandualibe/Reproductor-iptv-electronjs",
    },
    {
      title: "Proyecto 3: Herramienta de Visualización",
      image: "/juan/gestor.png",
      description:
        "Gestor de cuenta corriente (en desarrollo) con react js, node, express y mongoDB",
      repoLink: "https://github.com/juandualibe/cherry-market-v2",
      deployLink: "https://cherry-market-v2.vercel.app/"
    },
  ],
  // 🆕 FIN DE LA NUEVA SECCIÓN DE PROYECTOS

  contact: {
    phone: "+54 351 3197708",
    email: "juandualibe@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-dualibe-476a46335/",
    github: "https://github.com/juandualibe",
  },
};
