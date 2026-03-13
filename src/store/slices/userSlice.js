import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Гость",
  },
  reducers: {
    setUserName(state, action) {
      state.name = action.payload || "Гость";
    },
  },
});

export const { setUserName } = userSlice.actions;
export const userReducer = userSlice.reducer;
