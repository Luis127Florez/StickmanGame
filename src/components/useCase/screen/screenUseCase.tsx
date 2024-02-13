import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import avatarUp from "../../../../public/img/arriba.png";
import avatarBack from "../../../../public/img/atras.png";
import avatarForward from "../../../../public/img/adelante.png";
import avatarDown from "../../../../public/img/abajo.png";
import { StaticImageData } from "next/image";
import { Avatar } from "../../../controllers/avatar/avatarController";
import { TAvatarProperties } from "./types";

export const ScreenUseCase = () => {
  const [avatar] = useState(new Avatar());
  const [avatarProperties, setAvatarProperties] = useState<TAvatarProperties>(avatar.getProperties());
  const [avatarImg, setAvatarImg] = useState<StaticImageData>();

  useEffect(() => {
    setInterval(() => {
      avatar.moveAvatarToDown();
      setAvatarProperties(avatar.getProperties());
    }, 15);
  }, []);

  console.log(avatarProperties, '<><>>>>>>');

  const moveAvatarToUp = async (limit = 90) => {
    setAvatarImg(avatarUp);

    for (let index = 0; index < limit; index++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(resolve);
        }, 5);
      });

      avatar.moveToUp();

      setAvatarProperties(avatar.getProperties());
    }
  };

  const moveAvatarToRight =  () => {
    setAvatarImg(avatarForward);
    avatar.moveAvatarToRight();
    setAvatarProperties(avatar.getProperties());
  };

  const moveAvatarToLeft = () => {
    setAvatarImg(avatarBack);
    avatar.moveAvatarToLeft();
    setAvatarProperties(avatar.getProperties());
  };

  const moveAvatarToDown = () => {
    setAvatarImg(avatarDown);
    avatar.moveAvatarToDown();
    setAvatarProperties(avatar.getProperties());
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

  return <ScreenView avatarImg={avatarImg} avatarProperties={avatarProperties} />;
};
