import Image from "next/image";
import React from "react";
import ButtonPlayImg from "../../../../public/img/boton-de-play.png";
import { TCScreen } from "../../types/screenTypes/screenTypes";

export const ScreenView = ({avatar, avatarProperties}: TCScreen) => {
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
