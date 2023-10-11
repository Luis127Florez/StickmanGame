import { Avatar } from "../../../models/avatar/avatarState";
export type TTypesDevouring = "left" | "right" | "top" | "bottom";

export type TCScreen = {
  avatar: StaticImageData | undefined;
  avatarProperties: Avatar;
};


export type TFCheckDevouring = { isDevouring: boolean; typesDevouring: TTypesDevouring[] };
