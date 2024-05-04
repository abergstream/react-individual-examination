import { configureStore, createSlice } from "@reduxjs/toolkit";
const theme = localStorage.getItem("theme");
const themeToggle = createSlice({
  name: "theme",
  initialState: {
    mode: theme ? theme : "light",
  },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const store = configureStore({
  reducer: {
    theme: themeToggle.reducer,
  },
});

export const { toggleTheme } = themeToggle.actions;
