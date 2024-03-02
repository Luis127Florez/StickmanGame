import {
  TFCheckDevouring,
  TTypesDevouring,
} from "../../components/types/screenTypes/screenTypes";

export const checkDevouring = (document: Document): TFCheckDevouring => {
  const screenDocument = document.getElementById("screen");
  const screenCoordinates = screenDocument?.getBoundingClientRect();

  const avatarDocument = document.getElementById("avatar");
  const avatarCoordinates = avatarDocument?.getBoundingClientRect();

  const screenBottom = Math.round(screenCoordinates?.bottom || 0);
  const screenRight = Math.round(screenCoordinates?.right || 0);
  const screenLeft = Math.round(screenCoordinates?.left || 0);
  const screenTop = Math.round(screenCoordinates?.top || 0);

  const avatarBottom = Math.round(avatarCoordinates?.bottom || 0);
  const avatarRight = Math.round(avatarCoordinates?.right || 0);
  const avatarLeft = Math.round(avatarCoordinates?.left || 0);
  const avatarTop = Math.round(avatarCoordinates?.top || 0);

  let typesDevouring: TTypesDevouring[] = [];
  let isDevouring = false;

  if (avatarBottom >= screenBottom) {
    isDevouring = true;
    typesDevouring = [...typesDevouring, "bottom"];
  }

  if (avatarTop <= screenTop) {
    isDevouring = true;
    typesDevouring = [...typesDevouring, "top"];
  }

  if (avatarRight >= screenRight) {
    isDevouring = true;
    typesDevouring = [...typesDevouring, "right"];
  }

  if (avatarLeft <= screenLeft) {
    isDevouring = true;
    typesDevouring = [...typesDevouring, "left"];
  }

  return { isDevouring, typesDevouring };
};

export const gravity = (measures: { height: number; floor: number }) => {
  
};
