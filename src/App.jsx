import "./styles/global.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage";

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function loadPage(loader) {
  const [module] = await Promise.all([loader(), wait(180)]);
  return { Component: module.default };
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index lazy={() => loadPage(() => import("./pages/HomePage"))} />
      <Route path="posts" lazy={() => loadPage(() => import("./pages/PostsPage"))} />
      <Route path="movies" lazy={() => loadPage(() => import("./pages/MoviesPage"))} />
      <Route path="profile" lazy={() => loadPage(() => import("./pages/ProfilePage"))} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
