import Image from "next/image";
import ButtonPlayImg from "../../../../public/img/boton-de-play.png";
import EnemyOne from "../../../../public/img/enemyLevelOne.png";
import { TCScreen } from "../../types/screenTypes/screenTypes";
import "./styles.css";

export const ScreenView = ({ avatarImg, avatarProperties }: TCScreen) => {
  return (
    <div className="container">
      <div id="screen" className="screen">
        {avatarImg && (
          <Image
            style={{
              position: "absolute",
              right: avatarProperties?.right,
              top: avatarProperties?.top,
            }}
            id="avatar"
            width={59}
            height={59}
            src={avatarImg}
            alt=""
          />
        )}

        <Image
          style={{
            position: "absolute",
          }}
          id="enemyOne"
          src={EnemyOne}
          width={59}
          height={59}
          alt=""
        />
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
