export function PageLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#e6e6e6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}>
      <div style={{ width: "100%", maxWidth: 520 }}>
        {children}
      </div>
    </div>
  );
}
