export function PageLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#e6e6e6",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 24px",
      }}>
      <div
        style={{
          width: "100%",
          maxWidth: 1080,
          display: "grid",
          gap: 20,
        }}
      >
        {children}
      </div>
    </div>
  );
}
