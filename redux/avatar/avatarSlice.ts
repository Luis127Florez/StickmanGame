import { createSlice } from "@reduxjs/toolkit";
import { Avatar } from "../../models/avatar/avatarState";
import { avatarExtraReducer } from "./avatarExtraReducer";


export const avatarReducer = createSlice({
  name: "avatar",
  initialState: new Avatar(),
  reducers: {},
  extraReducers: avatarExtraReducer,
});


export default avatarReducer.reducer;

