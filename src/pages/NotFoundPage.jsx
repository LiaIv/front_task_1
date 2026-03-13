import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";

export default function NotFoundPage() {
  return (
    <Card>
      <h2 style={{ marginTop: 0 }}>Страница не найдена</h2>
      <p style={{ color: "#cbd5e1" }}>
        Такой страницы в приложении нет. Можно вернуться на главную.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          marginTop: 8,
          padding: "10px 16px",
          borderRadius: 999,
          background: "#2563eb",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        На главную
      </Link>
    </Card>
  );
}
