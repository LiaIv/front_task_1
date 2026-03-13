import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/ui/Card";
import { setUserName } from "../store/slices/userSlice";
import styles from "../styles/profilePage.module.css";

export default function ProfilePage() {
  const storedName = useSelector((state) => state.user.name);
  const [inputValue, setInputValue] = useState(
    storedName === "Гость" ? "" : storedName,
  );
  const dispatch = useDispatch();

  const handleSaveName = () => {
    dispatch(setUserName(inputValue.trim()));
  };

  return (
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Redux Toolkit</p>
          <h2 className={styles.title}>Имя пользователя в глобальном store</h2>
        </div>

        <div className={styles.form}>
          <label className={styles.label} htmlFor="user-name">
            Имя пользователя
          </label>
          <input
            id="user-name"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Например, Розалия"
            className={styles.input}
          />
          <button type="button" className={styles.button} onClick={handleSaveName}>
            Сохранить имя
          </button>
        </div>

        <div className={styles.preview}>
          Сейчас в store: <strong>{storedName}</strong>
        </div>
      </div>
    </Card>
  );
}
