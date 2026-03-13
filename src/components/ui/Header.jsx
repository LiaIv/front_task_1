import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "../../styles/header.module.css";

const NAV_ITEMS = [
  { to: "/", label: "Главная", end: true },
  { to: "/posts", label: "Посты" },
  { to: "/movies", label: "Фильмы" },
  { to: "/profile", label: "Профиль" },
];

function getLinkClassName({ isActive, isPending, isTransitioning }) {
  return [
    styles.link,
    isActive ? styles.linkActive : "",
    isPending ? styles.linkPending : "",
    isTransitioning ? styles.linkTransitioning : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Header() {
  const userName = useSelector((state) => state.user.name);
  const favoritesCount = useSelector((state) => state.favorites.ids.length);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.brand}>
          <p className={styles.eyebrow}>React Router + Redux Toolkit</p>
          <h1 className={styles.title}>Домашнее задание 7</h1>
        </div>

        <div className={styles.meta}>
          <div className={styles.pill}>Пользователь: {userName}</div>
          <div className={styles.pill}>Избранное: {favoritesCount}</div>
        </div>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            viewTransition
            className={getLinkClassName}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
