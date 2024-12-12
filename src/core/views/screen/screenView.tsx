import Image from "next/image";
import ButtonPlayImg from "../../../../public/textures/img/boton-de-play.png";
import EnemyOne from "../../../../public/textures/img/enemyLevelOne.png";
import { TCScreen } from "../../types/screenTypes/screenTypes";
import "./styles.css";

export const ScreenView = () => {
  return (
    <div className="container">
      <div id="screen" className="screen"></div>
      <div id="control" className="control">
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
