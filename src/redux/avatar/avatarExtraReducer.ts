import { createAction, createEntityAdapter } from "@reduxjs/toolkit";
import { TExtraReducer } from "./types";
import { avatarState } from "../../models/avatar/avatarState";

export const moveForward = createAction<number>("moveForward");
export const moveDown = createAction<number>("moveDown");
export const moveUp = createAction<number>("moveUp");
export const moveBack = createAction<number>("moveBack");

export const avatarExtraReducer: TExtraReducer<typeof avatarState> = (
  builder
) => {
  builder.addCase(moveForward, (state, action) => {
    state = { ...state, right: state.right - action?.payload };
    return state;
  });
  builder.addCase(moveBack, (state, action) => {
    state = { ...state, right: state.right + action?.payload };
    return state;
  });
  builder.addCase(moveDown, (state, action) => {
    state = { ...state, top: state.top + action?.payload };
    return state;
  });
  builder.addCase(moveUp, (state, action) => {
    state = { ...state, top: state.top - action?.payload };
    return state;
  });
};
