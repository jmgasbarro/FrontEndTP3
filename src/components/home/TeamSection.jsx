import { useTheme } from "../../hooks/useTheme";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    id: "german",
    name: "Germán",
    role: "Full Stack Developer",
    image: "/ger/german_perfil.png",
    description: "Experto en Python, Pascal e IA",
  },
  {
    id: "juan",
    name: "Juan",
    role: "Full Stack Developer",
    image: "/juan/juan.png",
    description: "Desarrollador versátil y creativo",
  },
  {
    id: "manuel",
    name: "Manuel",
    role: "Backend Developer",
    image: "/manuel/manuel_img_perfil.png",
    description: "Especialista en arquitectura backend",
  },
  {
    id: "nicolas",
    name: "Nicolás",
    role: "Project Manager",
    image: "/nicolas/nicolas-perfil.png",
    description: "Líder y organizador del equipo",
  },
];

export default function TeamSection() {
  const { isDark } = useTheme();
  return (
    <section style={styles.team}>
      <h2 style={styles.teamTitle(isDark)}>Nuestro Equipo</h2>
      <p style={styles.teamDescription}>
        Somos estudiantes de Frontend trabajando en el desarrollo de una SPA con
        React. Nuestro objetivo es crear un sitio organizado, responsive y con
        interactividad moderna.
      </p>

      <div style={styles.grid}>
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  team: {
    padding: "0 40px",
    margin: "60px auto",
  },
  teamTitle: (isDark) => ({
    fontSize: "42px",
    color: isDark ? "#ff0000" : "#d32f2f",
    textAlign: "center",
    marginBottom: "15px",
    fontFamily: "Creepster, cursive",
    textShadow: isDark ? "0 0 10px #ff0000" : "0 0 10px rgba(211, 47, 47, 0.3)",
    transition: "color 0.3s ease, text-shadow 0.3s ease",
  }),
  teamDescription: {
    fontSize: "18px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 50px",
    lineHeight: "1.6",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  },
};
