import { Avatar } from "../../../controllers/avatar/avatarController";

export type TTypesDevouring = "left" | "right" | "top" | "bottom";

export type TCScreen = {
  avatarImg: StaticImageData | undefined;
  avatar: Avatar;
};


export type TFCheckDevouring = { isDevouring: boolean; typesDevouring: TTypesDevouring[] };
