export function Header({ title, subtitle }) {
  return (
    <header style={{ marginBottom: 16 }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>{title}</h1>
      {subtitle ? (
        <p style={{ margin: "8px 0 0", color: "#a5b4fc" }}>{subtitle}</p>
      ) : null}
    </header>
  );
}
