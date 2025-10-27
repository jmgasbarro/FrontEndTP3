"use client";

import BitacoraContent from "../../components/bitacora/BitacoraContent";

export default function BitacoraPage() {
  return (
    <div style={styles.container}>
      <BitacoraContent />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
  },
};
