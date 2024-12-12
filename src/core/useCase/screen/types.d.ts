import { TMovement } from "../../../game/systems/types";
export type TMovement =
  | "Jump"
  | "Yes"
  | "No"
  | "Wave"
  | "Punch"
  | "ThumbsUp"
  | "Idle"
  | "Walking"
  | "Running"
  | "Dance"
  | "Death"
  | "Sitting"
  | "Standing";

export type TAvatarProperties = {
  left: number;
  top: number;
  right: number;
  bottom: number;
  currentMovement: TMovement;
};
