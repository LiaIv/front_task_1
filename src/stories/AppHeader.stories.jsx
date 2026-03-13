import { Header } from "../components/ui/Header";

export default {
  title: "UI/Header",
  component: Header,
  parameters: {
    initialRoute: "/movies",
    preloadedState: {
      user: { name: "Розалия" },
      favorites: { ids: [1, 2, 3] },
    },
  },
};

export const Default = {};
