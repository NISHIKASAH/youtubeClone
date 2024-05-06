import { createSlice } from "@reduxjs/toolkit";
import { Live_CHAT_COUNT } from "./constant";

const LiveChatSlice = createSlice({
  name: "chat",
  initialState: {
    messagedata: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messagedata.splice(Live_CHAT_COUNT, 1);

      state.messagedata.push(action.payload);
    },
  },
});

export default LiveChatSlice.reducer;
export const { addMessage } = LiveChatSlice.actions;
