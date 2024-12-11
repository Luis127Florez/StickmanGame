import { TMovement } from "../../../game/systems/types";
export type TMovement = "ArrowUp" | "ArrowRight" | "ArrowLeft" | "ArrowDown";

export type TAvatarProperties = {
  left: number;
  top: number;
  right: number;
  bottom: number;
  currentMovement: TMovement;
};
