"use client";

import HeroSection from "../../components/home/HeroSection";
import TeamSection from "../../components/home/TeamSection";

export default function HomePage() {
  return (
    <div style={styles.container}>
      <HeroSection />
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
