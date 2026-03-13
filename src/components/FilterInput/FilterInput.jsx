import styles from "../../styles/inputField.module.css";

export function FilterInput({ value, onChange, options }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>Фильтр по жанру</span>
      <input
        type="text"
        list="genre-options"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Например, драма"
        className={styles.input}
      />
      <datalist id="genre-options">
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </label>
  );
}
