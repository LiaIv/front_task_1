import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const movieId = action.payload.id;

      if (state.ids.includes(movieId)) {
        state.ids = state.ids.filter((id) => id !== movieId);
      } else {
        state.ids.push(movieId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
