import { useState } from "react";
import { Card } from "../ui/Card";
import styles from "../../styles/userCard.module.css";

export function UserCard({ name, role }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const stats = [
    { label: "Задач закрыто", value: "7" },
    { label: "Кофе выпито", value: "почти бесконечно" },
    { label: "Статус", value: "сдаю ДЗ" },
    { label: "Лайков", value: likes },
  ];

  return (
    <Card>
      {/* Задание 2.3: фоновое изображение через background-image */}
      <div style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 140,
        borderRadius: "12px 12px 0 0",
        margin: "-16px -16px 0 -16px"
      }} />

      <div className={styles.wrapper}>
        {/* Задание 2.3: изображение через <img> */}
        <img
          src="https://i.pravatar.cc/120?img=47"
          alt={`Аватар ${name}`}
          className={styles.avatar}
        />
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.role}>{role}</div>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statLabel}>{s.label}</span>
              <strong>{s.value}</strong>
            </div>
          ))}
        </div>

        <button className={styles.likeButton} onClick={handleLike}>
          ❤️ Нравится
        </button>
      </div>
    </Card>
  );
}