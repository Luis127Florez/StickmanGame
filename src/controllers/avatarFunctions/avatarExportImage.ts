import avatarUpRight1 from "../../../public/img/arribaRight1.png";
import avatarUpRight2 from "../../../public/img/arribaRight2.png";
import avatarUpRight3 from "../../../public/img/arribaRight3.png";
import avatarUpRight4 from "../../../public/img/arribaRight4.png";
import avatarUpRight5 from "../../../public/img/arribaRight5.png";
import avatarUpLeft1 from "../../../public/img/arribaLeft1.png";
import avatarUpLeft2 from "../../../public/img/arribaLeft2.png";
import avatarUpLeft3 from "../../../public/img/arribaLeft3.png";
import avatarUpLeft4 from "../../../public/img/arribaLeft4.png";
import avatarUpLeft5 from "../../../public/img/arribaLeft5.png";
import avatarBack1 from "../../../public/img/atras1.png";
import avatarBack2 from "../../../public/img/atras2.png";
import avatarBack3 from "../../../public/img/atras3.png";
import avatarBack4 from "../../../public/img/atras4.png";
import avatarBack5 from "../../../public/img/atras5.png";
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

  if (newMovement === "ArrowLeft1") {
    return avatarBack1;
  }

  if (newMovement === "ArrowLeft2") {
    return avatarBack2;
  }

  if (newMovement === "ArrowLeft3") {
    return avatarBack3;
  }

  if (newMovement === "ArrowLeft4") {
    return avatarBack4;
  }

  if (newMovement === "ArrowLeft5") {
    return avatarBack5;
  }

  if (newMovement === "ArrowUp1") {
    return avatarUpRight1;
  }

  if (newMovement === "ArrowUp2") {
    return avatarUpRight2;
  }

  if (newMovement === "ArrowUp3") {
    return avatarUpRight3;
  }

  if (newMovement === "ArrowUp4") {
    return avatarUpRight4;
  }

  if (newMovement === "ArrowUp5") {
    return avatarUpRight5;
  }


  if (newMovement === "ArrowUpArrowRight1") {
    return avatarUpRight1;
  }

  if (newMovement === "ArrowUpArrowRight2") {
    return avatarUpRight2;
  }

  if (newMovement === "ArrowUpArrowRight3") {
    return avatarUpRight3;
  }

  if (newMovement === "ArrowUpArrowRight4") {
    return avatarUpRight4;
  }

  if (newMovement === "ArrowUpArrowRight5") {
    return avatarUpRight5;
  }

  if (newMovement === "ArrowUpArrowLeft1") {
    return avatarUpLeft1;
  }

  if (newMovement === "ArrowUpArrowLeft2") {
    return avatarUpLeft2;
  }

  if (newMovement === "ArrowUpArrowLeft3") {
    return avatarUpLeft3;
  }

  if (newMovement === "ArrowUpArrowLeft4") {
    return avatarUpLeft4;
  }

  if (newMovement === "ArrowUpArrowLeft5") {
    return avatarUpLeft5;
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
