import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./slices/favoritesSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
  },
});
