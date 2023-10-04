import { configureStore } from "@reduxjs/toolkit";
import avatarReducer from "./avatar/avatarSlice";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    avatar: avatarReducer,
  },
});
