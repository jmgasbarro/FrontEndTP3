import TeamCard from "./TeamCard";

const teamMembers = [
  {
    id: "german",
    name: "Germán",
    role: "Full Stack Developer",
    image:
      "/ger/german_perfil.png",
    description: "Experto en Python, Pascal e IA",
  },
  {
    id: "juan",
    name: "Juan",
    role: "Full Stack Developer",
    image:
      "/juan/juan.png",
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
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop",
    description: "Líder y organizador del equipo",
  },
];

export default function TeamSection() {
  return (
    <section style={styles.team}>
      <h2 style={styles.teamTitle}>Nuestro Equipo</h2>
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
    padding: "60px 40px",
    margin: "0 auto",
  },
  teamTitle: {
    fontSize: "42px",
    color: "#ff0000",
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 10px #ff0000",
  },
  teamDescription: {
    fontSize: "18px",
    color: "#b0b0b0",
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
