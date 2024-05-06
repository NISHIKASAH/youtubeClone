import { configureStore } from "@reduxjs/toolkit";
import menuSliceReducer from "./menuSlice";
import searchSliceReducer from "./searchSlice";
import LiveChatSliceReducer from "./LiveChatSlice";
import ChannelSliceReducer from "./ChannelSlice";

const appStore = configureStore({
  reducer: {
    menu: menuSliceReducer,
    cache: searchSliceReducer,
    chat: LiveChatSliceReducer,
    channel: ChannelSliceReducer,
  },
});
export default appStore;
