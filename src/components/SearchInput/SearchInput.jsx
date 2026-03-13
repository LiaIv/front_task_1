import styles from "../../styles/inputField.module.css";

export function SearchInput({ value, onChange }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>Поиск фильма</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Например, Интерстеллар"
        className={styles.input}
      />
    </label>
  );
}
