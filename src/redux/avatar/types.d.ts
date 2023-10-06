import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { NoInfer } from "react-redux";

export type TExtraReducer<State> = (builder: ActionReducerMapBuilder<NoInfer<State>>) => void;
