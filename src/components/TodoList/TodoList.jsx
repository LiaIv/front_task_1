import { useState } from "react";
import { Card } from "../ui/Card";
import styles from "../../styles/todoList.module.css";

export function TodoList({ title, initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [showCompleted, setShowCompleted] = useState(true);

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleAddTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        text: `Новая задача №${prevTasks.length + 1}`,
        completed: false,
      },
    ]);
  };

  const visibleTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);

  return (
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>
              Динамический список с условным рендерингом
            </p>
          </div>

          <div className={styles.actions}>
            <button className={styles.secondaryButton} onClick={handleAddTask}>
              Добавить задачу
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => setShowCompleted((prev) => !prev)}
            >
              {showCompleted ? "Скрыть выполненные" : "Показать все"}
            </button>
          </div>
        </div>

        {visibleTasks.length > 0 ? (
          <div className={styles.list}>
            {visibleTasks.map((task) => (
              <button
                key={task.id}
                className={`${styles.item} ${
                  task.completed ? styles.itemCompleted : ""
                }`}
                onClick={() => handleToggleTask(task.id)}
              >
                <span>{task.text}</span>
                <span>{task.completed ? "Готово" : "В работе"}</span>
              </button>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>
            Все выполненные задачи скрыты. Нажми "Показать все".
          </p>
        )}
      </div>
    </Card>
  );
}
