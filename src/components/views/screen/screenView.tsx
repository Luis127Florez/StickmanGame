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

    console.log(avatarRight, screenRight);
    
    if (avatarRight >= screenRight) {
      return { devouring: true, type: "right" };
    }
    if (avatarLeft <= screenLeft) {
      return { devouring: true, type: "left" };
    }

    return { devouring: false, type: "" };
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        const devouring = checkDevouring();
        console.log(devouring);

        const codeValue = event.code;
        switch (codeValue) {
          case "ArrowUp":
            setAvatar(avatarUp);
            if (devouring?.devouring && devouring?.type === "top") {
              break;
            }
            dispatch(moveUp(4));
            break;
          case "ArrowRight":
            setAvatar(avatarForward);
            if (devouring?.devouring && devouring?.type === "right") {
              break;
            }
            dispatch(moveForward(4));
            break;
          case "ArrowLeft":
            setAvatar(avatarBack);
            if (devouring?.devouring && devouring?.type === "left") {
              break;
            }
            dispatch(moveBack(4));
            break;
          case "ArrowDown":
            setAvatar(avatarDown);
            if (devouring?.devouring && devouring?.type === "bottom") {
              break;
            }
            dispatch(moveDown(4));
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
