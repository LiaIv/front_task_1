import { UserCard } from "../components/UserCard/UserCard";
import { Card } from "../components/ui/Card";
import styles from "../styles/homePage.module.css";

const features = [
  {
    title: "React Router",
    text: "Страницы приложения открываются без перезагрузки через клиентский роутинг.",
  },
  {
    title: "Redux Toolkit",
    text: "Имя пользователя и избранные фильмы хранятся в глобальном store.",
  },
  {
    title: "Кинопоиск API",
    text: "Поиск и фильтрация фильмов продолжают работать на отдельной странице.",
  },
];

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Домашнее задание 7</p>
          <h2 className={styles.title}>Маршруты, глобальное состояние и избранное</h2>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Card>

      <UserCard name="Роза" role="Студентка | Frontend" />
    </div>
  );
}
