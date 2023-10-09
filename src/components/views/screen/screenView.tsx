"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import ButtonPlayImg from "../../../../public/img/boton-de-play.png";
import avatarUp from "../../../../public/img/arriba.png";
import avatarBack from "../../../../public/img/atras.png";
import avatarForward from "../../../../public/img/adelante.png";
import avatarDown from "../../../../public/img/abajo.png";
import { moveForward } from "../../../redux/avatar/avatarExtraReducer";
import { useDispatch, useSelector } from "react-redux";
import { avatarState } from "../../../redux/states";

export const ScreenView = () => {
  const dispatch = useDispatch();

  const avatarProperties = useSelector(avatarState);
  console.log(avatarProperties, 'ヾ(⌐■_■)ノ♪ヾ(⌐■_■)ノ♪');

  const [avatar, setAvatar] = useState<StaticImageData>();

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        const keyValue = event.key;
        const codeValue = event.code;
        switch (codeValue) {
          case "ArrowUp":
            setAvatar(avatarUp);
            break;
          case "ArrowRight":
            setAvatar(avatarForward);
            break;
          case "ArrowLeft":
            setAvatar(avatarBack);
            break;
          case "ArrowDown":
            setAvatar(avatarDown);
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
          <Image id="playButton" width={59} height={59} src={avatar} alt="" />
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
      <button
        onClick={() => {
          console.log("asd");
          dispatch(moveForward(2));
        }}
      >
        dispara
      </button>
    </div>
  );
};
