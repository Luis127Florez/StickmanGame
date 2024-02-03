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
<<<<<<< HEAD
import { TFCheckDevouring } from "../../types/screenTypes/screenTypes";
=======
>>>>>>> 21d8f0b6dcb7144343867f0753930ef0e845d8db
import { useDispatch, useSelector } from "react-redux";

export const ScreenUseCase = () => {
  const dispatch = useDispatch();
  const avatarProperties = useSelector(avatarState);
  const [avatar, setAvatar] = useState<StaticImageData>();
<<<<<<< HEAD
  const [isAvatarInAir, setIsAvatarInAir] = useState<boolean>();

  const jump = async (jumpLevel: number = 1) => {
    let limit = 0;
    if (jumpLevel === 1) {
      limit = 70;
    }
    if (jumpLevel === 2) {
      limit = 100;
    }
    for (let index = 0; index < limit; index++) {
      const { isDevouring, typesDevouring } = checkDevouring(document);
      const typeDevouring = typesDevouring.find((type) => type === "top");
      if (isDevouring && typeDevouring) return;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(resolve);
        }, 10);
      });
      dispatch(moveUp(2));
    }
  };
=======
>>>>>>> 21d8f0b6dcb7144343867f0753930ef0e845d8db

  useEffect(() => {
    setInterval(() => {
      const { isDevouring, typesDevouring } = checkDevouring(document);

      const typeDevouring = typesDevouring.find((type) => type === "bottom");

      if (isDevouring && typeDevouring) return;

      dispatch(moveDown(1));
    }, 15);
    
    setInterval(() => {
      console.log('pasoooo');
    }, 500);
  }, []);

<<<<<<< HEAD

=======
>>>>>>> 21d8f0b6dcb7144343867f0753930ef0e845d8db
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
