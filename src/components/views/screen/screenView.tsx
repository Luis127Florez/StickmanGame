"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import ButtonPlayImg from "../../../../public/img/boton-de-play.png";
import avatarUp from "../../../../public/img/arriba.png";
import avatarBack from "../../../../public/img/atras.png";
import avatarForward from "../../../../public/img/adelante.png";
import avatarDown from "../../../../public/img/abajo.png";
import {
  moveBack,
  moveDown,
  moveForward,
  moveUp,
} from "../../../redux/avatar/avatarExtraReducer";
import { useDispatch, useSelector } from "react-redux";
import { avatarState } from "../../../redux/states";

export const ScreenView = () => {
  const dispatch = useDispatch();
  const avatarProperties = useSelector(avatarState);
  const [avatar, setAvatar] = useState<StaticImageData>();

  const checkDevouring = (): { devouring: boolean; type: string } => {
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

    if (avatarBottom >= screenBottom) {
      return { devouring: true, type: "bottom" };
    }
    if (avatarTop <= screenTop) {
      return { devouring: true, type: "top" };
    }
    if (avatarRight >= screenRight) {
      return { devouring: true, type: "Right" };
    }
    if (avatarLeft <= screenLeft) {
      return { devouring: true, type: "Left" };
    }

    return { devouring: false, type: "" };
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        const keyValue = event.key;
        const codeValue = event.code;
        switch (codeValue) {
          case "ArrowUp":
            const checkUp = checkDevouring();
            setAvatar(avatarUp);
            if (!checkUp.devouring) {
              dispatch(moveUp(2));
            }
            break;
          case "ArrowRight":
            const checkRight = checkDevouring();
            setAvatar(avatarForward);
            if (!checkRight.devouring) {
              dispatch(moveForward(2));
            }
            break;
          case "ArrowLeft":
            console.log(checkDevouring(), "○( ＾皿＾)っ Hehehe…");

            setAvatar(avatarBack);
            dispatch(moveBack(2));
            break;
          case "ArrowDown":
            console.log(checkDevouring(), "○( ＾皿＾)っ Hehehe…");

            setAvatar(avatarDown);
            dispatch(moveDown(2));
            break;

          default:
            break;
        }
      },
      false
    );
  }, []);

  return (
    <div className="container">
      <div id="screen" className="screen">
        {avatar && (
          <Image
            style={{
              position: "absolute",
              right: avatarProperties?.right,
              top: avatarProperties?.top,
            }}
            id="avatar"
            width={59}
            height={59}
            src={avatar}
            alt=""
          />
        )}
      </div>
      <div className="control">
        <Image
          id="playButton"
          width={59}
          height={59}
          src={ButtonPlayImg}
          alt=""
        />
      </div>
    </div>
  );
};
