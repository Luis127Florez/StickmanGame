"use client";

import Image from "next/image";
import ButtonPlayImg from "../../../public/img/boton-de-play.png";
import { incrementBy } from "../../../redux/avatar/avatarExtraReducer";
import { useDispatch } from "react-redux";

export const ScreenView = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div id="screen" className="screen"></div>
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
          dispatch(incrementBy());
        }}
      >
        dispara
      </button>
    </div>
  );
};
