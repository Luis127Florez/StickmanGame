import Image from "next/image";
import ButtonPlayImg from "../../../public/img/boton-de-play.png";
import { incrementBy } from "../../../redux/avatar/avatarExtraReducer";

export const ScreenView = () => {
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
          <button onClick={()=>incrementBy()}></button>
        </div>
      );
};
