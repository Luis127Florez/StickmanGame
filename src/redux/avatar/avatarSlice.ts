import { createSlice } from "@reduxjs/toolkit";
import { Avatar } from "../../models/avatar/avatarState";
import { avatarExtraReducer } from "./avatarExtraReducer";

export const avatarReducer = createSlice({
  name: "avatar",
  initialState: {
    ...new Avatar(),
    left: 333,
    top: 434,
    right: 392,
    bottom: 481,
  },
  reducers: {},
  extraReducers: avatarExtraReducer,
});

export default avatarReducer.reducer;
