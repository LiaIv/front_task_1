import { useState, useEffect } from "react";

export function LifecycleDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("MOUNT: компонент смонтирован");

    return () => {
      console.log("UNMOUNT: компонент размонтирован");
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log(`🔄 UPDATE: count = ${count}`);
    }
  }, [count]);

  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1f2a44",
        borderRadius: 12,
        padding: 16,
        marginTop: 12,
        textAlign: "center",
      }}
    >
      <p style={{ marginBottom: 8 }}>
        Счётчик: <strong>{count}</strong>
      </p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          padding: "8px 20px",
          borderRadius: 8,
          border: "none",
          background: "#4f46e5",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        +1
      </button>
      <p style={{ fontSize: 13, opacity: 0.5, marginTop: 8 }}>
        Открой консоль (F12) — там логи
      </p>
    </div>
  );
}
