import { PageLayout } from "./components/PageLayout";
import { Header } from "./components/Header";
import { UserCard } from "./components/UserCard";

export default function App() {
  return (
    <PageLayout>
      <Header title="ДЗ 2: 3 props + children" />
      <UserCard name="Роза" role="Студентка | DevOps" />
    </PageLayout>
  );
}
