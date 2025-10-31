"use client";

import HeroSection from "../../components/home/HeroSection";
import TeamSection from "../../components/home/TeamSection";
import ProjectCarousel from "../../components/shared/ProjectCarousel";

export default function HomePage() {
  return (
    <div style={styles.container}>
      <HeroSection />
      <ProjectCarousel />
      <TeamSection />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
  },
};
