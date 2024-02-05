import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import avatarUp from "../../../../public/img/arriba.png";
import avatarBack from "../../../../public/img/atras.png";
import avatarForward from "../../../../public/img/adelante.png";
import avatarDown from "../../../../public/img/abajo.png";
import { StaticImageData } from "next/image";
import { checkDevouring } from "../../../controllers/avatar/avatarFunctions";
import { Avatar } from "../../../controllers/avatar/avatarController";

export const ScreenUseCase = () => {
  const [avatar, setAvatar] = useState(new Avatar());
  const [avatarImg, setAvatarImg] = useState<StaticImageData>();

  useEffect(() => {
    setInterval(() => {
      const { isDevouring, typesDevouring } = checkDevouring(document);

      const typeDevouring = typesDevouring.find((type) => type === "bottom");

      if (isDevouring && typeDevouring) return;

      avatar.moveAvatarToDown();
    }, 15);

    setInterval(() => {
      console.log('pasoooo');
    }, 500);
  }, []);

  const moveAvatarToUp = () => {
    setAvatarImg(avatarUp);
    avatar.moveToUp();
  };

  const moveAvatarToRight = () => {
    setAvatarImg(avatarForward);
    avatar.moveAvatarToRight();
  };

  const moveAvatarToLeft = () => {
    setAvatarImg(avatarBack);
    avatar.moveAvatarToLeft();
  };

  const moveAvatarToDown = () => {
    setAvatarImg(avatarDown);
    avatar.moveAvatarToDown();
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

  return <ScreenView avatarImg={avatarImg} avatar={avatar} />;
};
