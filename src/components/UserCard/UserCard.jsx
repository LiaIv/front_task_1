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
      <div className={styles.hero} />

      <div className={styles.wrapper}>
        <div className={styles.profileRow}>
          <img
            src="https://i.pravatar.cc/120?img=47"
            alt={`Аватар ${name}`}
            className={styles.avatar}
          />
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.role}>{role}</div>
          </div>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statLabel}>{s.label}</span>
              <strong>{s.value}</strong>
            </div>
          ))}
        </div>

        <button type="button" className={styles.likeButton} onClick={handleLike}>
          ❤️ Нравится
        </button>
      </div>
    </Card>
  );
}
