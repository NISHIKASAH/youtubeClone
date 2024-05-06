import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    changeMenuState: true,
  },
  reducers: {
    togglemenu: (state) => {
      state.changeMenuState = !state.changeMenuState;
    },
    addChangeMenuState: (state) => {
      state.changeMenuState = false;
    },
  },
});

export default menuSlice.reducer;
export const { addChangeMenuState, togglemenu } = menuSlice.actions;
