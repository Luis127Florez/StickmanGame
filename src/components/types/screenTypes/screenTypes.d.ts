import { Avatar } from "../../../controllers/avatar/avatarController";
import { TAvatarProperties } from "../../useCase/screen/types";

export type TTypesDevouring = "left" | "right" | "top" | "bottom";

export type TCScreen = {
  avatarImg: StaticImageData | undefined;
  avatarProperties: TAvatarProperties;
};


export type TFCheckDevouring = { isDevouring: boolean; typesDevouring: TTypesDevouring[] };
