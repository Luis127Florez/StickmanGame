import avatarUp1 from "../../../public/img/arriba1.png";
import avatarUp2 from "../../../public/img/arriba2.png";
import avatarUp3 from "../../../public/img/arriba3.png";
import avatarUp4 from "../../../public/img/arriba4.png";
import avatarUp5 from "../../../public/img/arriba5.png";
import avatarBack from "../../../public/img/atras.png";
import avatarForward1 from "../../../public/img/adelante1.png";
import avatarForward2 from "../../../public/img/adelante2.png";
import avatarForward3 from "../../../public/img/adelante3.png";
import avatarForward4 from "../../../public/img/adelante4.png";
import avatarForward5 from "../../../public/img/adelante5.png";
import avatarDown from "../../../public/img/abajo.png";
import { TGetImageChanger } from "./types";

export const getImageChanger: TGetImageChanger = ({
  newMovement,
  currentMovement,
}) => {
  if (newMovement === "ArrowDown") {
    return avatarDown;
  }

  if (newMovement === "ArrowLeft") {
    return avatarBack;
  }

  if (newMovement === "ArrowUp1") {
    return avatarUp1;
  }

  if (newMovement === "ArrowUp2") {
    return avatarUp2;
  }

  if (newMovement === "ArrowUp3") {
    return avatarUp3;
  }

  if (newMovement === "ArrowUp4") {
    return avatarUp4;
  }

  if (newMovement === "ArrowUp5") {
    return avatarUp5;
  }

  if (newMovement === "ArrowRight1") {
    return avatarForward1;
  }

  if (newMovement === "ArrowRight2") {
    return avatarForward2;
  }

  if (newMovement === "ArrowRight3") {
    return avatarForward3;
  }

  if (newMovement === "ArrowRight4") {
    return avatarForward4;
  }

  if (newMovement === "ArrowRight5") {
    return avatarForward5;
  }

  return avatarForward1;
};
