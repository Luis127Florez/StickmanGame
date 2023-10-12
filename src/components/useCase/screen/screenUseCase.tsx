import { useDispatch, useSelector } from "react-redux";
import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import { avatarState } from "../../../redux/states";
import avatarUp from "../../../../public/img/arriba.png";
import avatarBack from "../../../../public/img/atras.png";
import avatarForward from "../../../../public/img/adelante.png";
import avatarDown from "../../../../public/img/abajo.png";
import { StaticImageData } from "next/image";
import {
  moveBack,
  moveDown,
  moveForward,
  moveUp,
} from "../../../redux/avatar/avatarExtraReducer";
import { checkDevouring } from "../../../controllers/avatar/avatarFunctions";
import { TFCheckDevouring } from "../../types/screenTypes/screenTypes";

export const ScreenUseCase = () => {
  const dispatch = useDispatch();
  const avatarProperties = useSelector(avatarState);
  const [avatar, setAvatar] = useState<StaticImageData>();
  const [isAvatarInAir, setIsAvatarInAir] = useState<boolean>();
  useEffect(() => {
    setInterval(() => {
      const { isDevouring, typesDevouring } = checkDevouring(document);

      const typeDevouring = typesDevouring.find((type) => type === "bottom");

      if (isDevouring && typeDevouring) return;

      dispatch(moveDown(1));
    }, 15);
  }, []);

  const moveAvatarToUp = async () => {
    setIsAvatarInAir(true);
    console.log(isAvatarInAir, "(๑•̀ㅂ•́)و✧");
    if (isAvatarInAir === true) return;
    console.log(isAvatarInAir, "|ヾ(⌐■_■)ノ♪");
    console.log(isAvatarInAir, "(～￣▽￣)～");

    setAvatar(avatarUp);

    const idSetUp = setInterval(() => {
      const { isDevouring, typesDevouring } = checkDevouring(document);
      const typeDevouring = typesDevouring.find((type) => type === "top");
      if (isDevouring && typeDevouring) return;
      dispatch(moveUp(2));
    }, 5);

    await new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(idSetUp);
        resolve(resolve);
      }, 500);
    });
  };

  const moveAvatarToRight = ({
    isDevouring,
    typesDevouring,
  }: TFCheckDevouring) => {
    setAvatar(avatarForward);
    const typeDevouring = typesDevouring.find((type) => type === "right");
    if (isDevouring && typeDevouring) {
      return;
    }
    dispatch(moveForward(4));
  };

  const moveAvatarToLeft = ({
    isDevouring,
    typesDevouring,
  }: TFCheckDevouring) => {
    setAvatar(avatarBack);
    const typeDevouring = typesDevouring.find((type) => type === "left");
    if (isDevouring && typeDevouring) {
      return;
    }
    dispatch(moveBack(4));
  };

  const moveAvatarToDown = ({
    isDevouring,
    typesDevouring,
  }: TFCheckDevouring) => {
    setAvatar(avatarDown);
    const typeDevouring = typesDevouring.find((type) => type === "bottom");
    if (isDevouring && typeDevouring) {
      return;
    }
    dispatch(moveDown(4));
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        const checkedDevouring = checkDevouring(document);
        const codeValue = event.code;
        switch (codeValue) {
          case "ArrowUp":
            moveAvatarToUp();
            break;
          case "ArrowRight":
            moveAvatarToRight(checkedDevouring);
            break;
          case "ArrowLeft":
            moveAvatarToLeft(checkedDevouring);
            break;
          case "ArrowDown":
            moveAvatarToDown(checkedDevouring);
            break;
          default:
            break;
        }
      },
      false
    );
  }, []);

  return <ScreenView avatar={avatar} avatarProperties={avatarProperties} />;
};
