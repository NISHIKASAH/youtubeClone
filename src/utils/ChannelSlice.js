import { createSlice } from "@reduxjs/toolkit";

const ChannelSlice = createSlice({
  name: "channel",
  initialState: {
    channeldata: [],
  },
  reducers: {
    addChannelDetails: (state, action) => {
      state.channeldata.push(action.payload);
    },
  },
});
export default ChannelSlice.reducer;
export const { addChannelDetails } = ChannelSlice.actions;
