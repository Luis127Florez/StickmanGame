import { createAction } from "@reduxjs/toolkit";
import { TExtraReducer } from "./types";
import { avatarState } from "../../models/avatar/avatarState";

export const incrementBy = createAction('incrementBy')


export const avatarExtraReducer: TExtraReducer< typeof avatarState> = (builder)  => {
    builder.addCase (incrementBy, (state, action) => {
        console.log(state, action , '௹௹');
        return state
    })
};