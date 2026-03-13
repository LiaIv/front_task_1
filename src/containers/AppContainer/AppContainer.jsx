import { useState } from "react";
import { LifecycleDemo } from "../../components/LifecycleDemo/LifecycleDemo";
import { TodoList } from "../../components/TodoList/TodoList";
import { UserCard } from "../../components/UserCard/UserCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { Header } from "../../components/ui/Header";

export function AppContainer() {
  const [showLifecycleDemo, setShowLifecycleDemo] = useState(true);

  const initialTasks = [
    { id: "task-1", text: "Сделать глобальные стили", completed: true },
    { id: "task-2", text: "Проверить CSS-модули", completed: true },
    { id: "task-3", text: "Доделать рендеринг списка", completed: false },
  ];

  return (
    <PageLayout>
      <Header title="Домашнее задание 3" />
      <UserCard name="Роза" role="Студентка | DevOps" />
      <TodoList title="Список задач по React" initialTasks={initialTasks} />

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setShowLifecycleDemo((prev) => !prev)}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#111827",
            color: "#e2e8f0",
            cursor: "pointer",
          }}
        >
          {showLifecycleDemo
            ? "Скрыть демонстрацию useEffect"
            : "Показать демонстрацию useEffect"}
        </button>

        {showLifecycleDemo ? (
          <LifecycleDemo />
        ) : (
          <p style={{ color: "#94a3b8", marginTop: 12 }}>
            Компонент скрыт. В консоли должен появиться лог размонтирования.
          </p>
        )}
      </div>
    </PageLayout>
  );
}
