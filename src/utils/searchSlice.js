import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addSearchChache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;
export const { addSearchChache } = searchSlice.actions;
