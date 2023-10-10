import { createAction, createEntityAdapter } from "@reduxjs/toolkit";
import { TExtraReducer } from "./types";
import { avatarState } from "../../models/avatar/avatarState";

export const moveForward = createAction<number>("moveForward");

export const avatarExtraReducer: TExtraReducer<typeof avatarState> = (
  builder
) => {
  builder.addCase(moveForward, (state, action) => {
    state = { ...state, right: state.right + action?.payload };
    return state;
  });
};
