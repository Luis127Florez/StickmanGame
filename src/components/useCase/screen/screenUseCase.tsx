import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { TAvatarProperties, TMovement } from "./types.d";
import { Avatar } from "../../../controllers/avatar/avatarController";
import { getImageChanger } from "../../../controllers/avatarFunctions/avatarExportImage";
import { debounce } from "../../../controllers/functions/debounce";

export const ScreenUseCase = () => {
  const [avatar] = useState(new Avatar());
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [avatarProperties, setAvatarProperties] = useState<TAvatarProperties>(
    avatar.getProperties()
  );
  const [avatarImg, setAvatarImg] = useState<StaticImageData>();

  useEffect(() => {
    const newImagen = getImageChanger({ newMovement: "ArrowRight5" });
    setAvatarImg(newImagen);

    setInterval(() => {
      avatar.moveAvatarToDown({ gravity: true });
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
      if (count >= 4) {
        clearInterval(intervalId);
      }
      count++;
    }, 100);
  };

  const calmDownAvatar = ({ waitTime }: { waitTime: number }) => {
    const id = debounce({
      func: () => {
        const newImagen = getImageChanger({
          newMovement: `${avatar.getPropertyCurrentMovement()}5`,
        });
        setAvatarImg(newImagen);
      },
      delay: waitTime,
      intervalId: intervalId,
    });

    setIntervalId(id);
  };

  const moveAvatarToUp = async (limit = 90) => {
    animateAvatar({ movement: `ArrowUp` });

    for (let index = 0; index < limit; index++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(resolve);
        }, 5);
      });

      avatar.moveToUp();

      setAvatarProperties(avatar.getProperties());
    }
    calmDownAvatar({ waitTime: 1000 });
  };

  const moveAvatarToRight = () => {
    animateAvatar({ movement: "ArrowRight" });
    avatar.moveAvatarToRight();
    setAvatarProperties(avatar.getProperties());
    calmDownAvatar({ waitTime: 700 });
  };

  const moveAvatarToLeft = () => {
    animateAvatar({ movement: "ArrowLeft" });
    avatar.moveAvatarToLeft();
    setAvatarProperties(avatar.getProperties());
    calmDownAvatar({ waitTime: 700 });
  };

  const moveAvatarToDown = () => {
    const newImagen = getImageChanger({ newMovement: "ArrowDown" });
    setAvatarImg(newImagen);
    avatar.moveAvatarToDown({ gravity: false });
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
