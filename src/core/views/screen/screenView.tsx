import Image from "next/image";
import ButtonPlayImg from "../../../../public/textures/img/boton-de-play.png";
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
