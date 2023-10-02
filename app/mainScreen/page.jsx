import Image from "next/image";
import ButtonPlayImg from "../../public/img/boton-de-play.png";
import styles from "./styles.css";

export default function MainScreen() {
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
    </div>
  );
}
