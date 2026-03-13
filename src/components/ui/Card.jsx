export function Card({ children }) {
  return (
    <section
      style={{
        background: "rgba(46, 57, 81, 0.92)",
        border: "1px solid rgba(79, 101, 140, 0.35)",
        borderRadius: 22,
        padding: 22,
        boxShadow: "0 18px 48px rgba(0, 0, 0, 0.24)",
        backdropFilter: "blur(10px)",
      }}
    >
      {children}
    </section>
  );
}
