export function Card({ children }) {
  return (
    <section
      style={{
        background: "#2e3951",
        border: "1px solid #223046",
        borderRadius: 16,
        padding: 16,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
      }}
    >
      {children}
    </section>
  );
}
