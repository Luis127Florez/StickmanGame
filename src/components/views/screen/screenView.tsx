import Image from "next/image";
import ButtonPlayImg from "../../../../public/img/boton-de-play.png";
import { TCScreen } from "../../types/screenTypes/screenTypes";
import "./styles.css";

export const ScreenView = ({ avatarImg, avatar }: TCScreen) => {
  return (
    <div className="container">
      <div id="screen" className="screen">
        <div id="enemySquare">
          <h1>0 _ 0</h1>
        </div>
        {avatarImg && (
          <Image
            style={{
              position: "absolute",
              right: avatar?.getPropertyRight(),
              top: avatar?.getPropertyTop(),
            }}
            id="avatar"
            width={59}
            height={59}
            src={avatarImg}
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
