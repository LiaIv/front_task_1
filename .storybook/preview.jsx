import { configureStore } from "@reduxjs/toolkit";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { favoritesReducer } from "../src/store/slices/favoritesSlice";
import { userReducer } from "../src/store/slices/userSlice";
import { theme } from "../src/theme";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story, context) => {
      const store = configureStore({
        reducer: {
          user: userReducer,
          favorites: favoritesReducer,
        },
        preloadedState: context.parameters.preloadedState,
      });

      return (
        <Provider store={store}>
          <MemoryRouter initialEntries={[context.parameters.initialRoute || "/"]}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div style={{ minHeight: "100vh", padding: 24, background: "#07111f" }}>
                <Story />
              </div>
            </ThemeProvider>
          </MemoryRouter>
        </Provider>
      );
    },
  ],
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
