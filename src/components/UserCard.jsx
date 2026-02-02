import { Card } from "./Card";

export function UserCard({ name, role }) {
  const stats = [
    { label: "Задач закрыто", value: "7" },
    { label: "Кофе выпито", value: "почти бесконечно" },
    { label: "Статус", value: "сдаю ДЗ" },
  ];

  return (
    <Card>
      <div style={{ display: "grid", gap: 12 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{name}</div>
          <div style={{ opacity: 0.8 }}>{role}</div>
        </div>

        <div style={{ display: "grid", gap: 10 }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 12,
                background: "#0f172a",
                border: "1px solid #1f2a44", }}>
              <span style={{ opacity: 0.85 }}>{s.label}</span>
              <strong>{s.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
