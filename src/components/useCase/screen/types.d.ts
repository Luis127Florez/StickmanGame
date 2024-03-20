import { TMovement } from "../../../controllers/avatarFunctions/types.d";

export type TAvatarProperties = {
    left: number;
    top: number;
    right: number;
    bottom: number;
    currentMovement: string
};

export type TMovement = "ArrowUp" | "ArrowRight" | "ArrowLeft" | "ArrowDown";