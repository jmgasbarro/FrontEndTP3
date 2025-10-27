"use client";

import { useState } from "react";
import Sidebar from "../../components/navigation/Sidebar";
import DiagramsHeader from "../../components/diagrams/DiagramsHeader";
import DiagramsTabs from "../../components/diagrams/DiagramsTabs";
import ComponentTreeDiagram from "../../components/diagrams/ComponentTreeDiagram";
import FolderStructureDiagram from "../../components/diagrams/FolderStructureDiagram";
import Footer from "../../components/navigation/Footer";

export default function DiagramsPage() {
  const [activeTab, setActiveTab] = useState("component");

  return (
    <div style={styles.container}>
      <section style={styles.content}>
        <DiagramsHeader />
        <DiagramsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "component" && <ComponentTreeDiagram />}
        {activeTab === "folder" && <FolderStructureDiagram />}
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
  },
  content: {
    margin: "0 auto",
    padding: "60px 40px",
  },
};
