import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { TAvatarProperties, TMovement } from "./types.d";
import { Avatar } from "../../../controllers/avatar/avatarController";
import { getImageChanger } from "../../../controllers/avatarFunctions/avatarExportImage";

export const ScreenUseCase = () => {
  const [avatar] = useState(new Avatar());
  const [avatarProperties, setAvatarProperties] = useState<TAvatarProperties>(
    avatar.getProperties()
  );
  const [avatarImg, setAvatarImg] = useState<StaticImageData>();

  useEffect(() => {
    const newImagen = getImageChanger({ newMovement: "ArrowRight" });
    setAvatarImg(newImagen);

    setInterval(() => {
      avatar.moveAvatarToDown();
      setAvatarProperties(avatar.getProperties());
    }, 15);
  }, []);

  const animateAvatar = ({ movement }: { movement: TMovement }) => {
    let count = 1;
    const intervalId = setInterval(() => {
      const newImagen = getImageChanger({
        newMovement: `${movement}${count}`,
        currentMovement: avatarProperties.currentMovement,
      });
      setAvatarImg(newImagen);
      if (count === 4) {
        clearInterval(intervalId);
      }
      count++;
    }, 100);
  };

  const moveAvatarToUp = async (limit = 90) => {
    const newImagen = getImageChanger({ newMovement: "ArrowUp" });
    setAvatarImg(newImagen);

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
  console.log(avatarImg, "d=====(￣▽￣*)bd=====(￣▽￣*)bd=====(￣▽￣*)b");

  let asd = undefined;

  const moveAvatarToRight = () => {
    animateAvatar({ movement: "ArrowRight" });
    avatar.moveAvatarToRight();
    setAvatarProperties(avatar.getProperties());
  };

  const moveAvatarToLeft = () => {
    const newImagen = getImageChanger({ newMovement: "ArrowLeft" });
    setAvatarImg(newImagen);
    avatar.moveAvatarToLeft();
    setAvatarProperties(avatar.getProperties());
  };

  const moveAvatarToDown = () => {
    const newImagen = getImageChanger({ newMovement: "ArrowDown" });
    setAvatarImg(newImagen);
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

  return (
    <ScreenView avatarImg={avatarImg} avatarProperties={avatarProperties} />
  );
};
