import { Outlet } from "react-router-dom";
import { PageLayout } from "./PageLayout";
import { Header } from "../ui/Header";

export function AppLayout() {
  return (
    <PageLayout>
      <Header />
      <main>
        <Outlet />
      </main>
    </PageLayout>
  );
}
