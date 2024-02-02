import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import { avatarState } from "../../../redux/states";
import avatarUp from "../../../../public/img/arriba.png";
import avatarBack from "../../../../public/img/atras.png";
import avatarForward from "../../../../public/img/adelante.png";
import avatarDown from "../../../../public/img/abajo.png";
import { StaticImageData } from "next/image";
import { moveDown } from "../../../redux/avatar/avatarExtraReducer";
import { checkDevouring } from "../../../controllers/avatar/avatarFunctions";
import { useDispatch, useSelector } from "react-redux";

export const ScreenUseCase = () => {
  const dispatch = useDispatch();
  const avatarProperties = useSelector(avatarState);
  const [avatar, setAvatar] = useState<StaticImageData>();

  useEffect(() => {
    setInterval(() => {
      const { isDevouring, typesDevouring } = checkDevouring(document);

      const typeDevouring = typesDevouring.find((type) => type === "bottom");

      if (isDevouring && typeDevouring) return;

      dispatch(moveDown(1));
    }, 15);
  }, []);

  const moveAvatarToUp = () => {
    setAvatar(avatarUp);
  };

  const moveAvatarToRight = () => {
    setAvatar(avatarForward);
  };

  const moveAvatarToLeft = () => {
    setAvatar(avatarBack);
  };

  const moveAvatarToDown = () => {
    setAvatar(avatarDown);
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        const codeValue = event.code;

        if (codeValue === "ArrowUp") {
          moveAvatarToUp();
        }

        if (codeValue === "ArrowRight") {
          moveAvatarToRight();
        }

        if (codeValue === "ArrowLeft") {
          moveAvatarToLeft();
        }

        if (codeValue === "ArrowDown") {
          moveAvatarToDown();
        }
      },
      false
    );
  }, []);

  return <ScreenView avatar={avatar} avatarProperties={avatarProperties} />;
};
