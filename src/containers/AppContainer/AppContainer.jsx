import { KinopoiskExplorer } from "../../components/KinopoiskExplorer/KinopoiskExplorer";
import { PostsFeed } from "../../components/PostsFeed/PostsFeed";
import { UserCard } from "../../components/UserCard/UserCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { Header } from "../../components/ui/Header";

export function AppContainer() {
  return (
    <PageLayout>
      <Header
        title="Домашнее задание 5"
        subtitle="Работа с REST API, обработка ошибок, поиск и фильтрация фильмов"
      />
      <UserCard name="Роза" role="Студентка | Frontend" />
      <PostsFeed />
      <KinopoiskExplorer />
    </PageLayout>
  );
}
