import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { TAvatarProperties, TMovement } from "./types.d";
import { Avatar } from "../../../controllers/avatar/avatarController";
import { getImageChanger } from "../../../controllers/avatarFunctions/avatarExportImage";
import { debounce } from "../../../controllers/functions/debounce";

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
      const newImage = getImageChanger({
        newMovement: `${movement}${count}`,
      });
      setAvatarImg(newImage);
      if (count === 4) {
        clearInterval(intervalId);
      }
      count++;
    }, 100);
  };

  const moveAvatarToUp = async (limit = 90) => {
    animateAvatar({ movement: "ArrowUp" });

    for (let index = 0; index < limit; index++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(resolve);
        }, 5);
      });

      avatar.moveToUp();

      setAvatarProperties(avatar.getProperties());
    }
    debounce(calmDownAvatar, 500);
  };

  const moveAvatarToRight = () => {
    animateAvatar({ movement: "ArrowRight" });
    avatar.moveAvatarToRight();
    setAvatarProperties(avatar.getProperties());
    debounce(calmDownAvatar, 500);
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

  const calmDownAvatar = () => {
    console.log("calmDownAvatar, (^///^)(^///^)(^///^)");
    const newImagen = getImageChanger({
      newMovement: `${avatar.getPropertyCurrentMovement()}5`,
    });
    setAvatarImg(newImagen);
  };

/*   useEffect(() => {
    console.log("calmDownAvatar, (^///^)(^///^)(^///^)");
    debounce(calmDownAvatar, 500);
  }, [avatarImg]); */

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
