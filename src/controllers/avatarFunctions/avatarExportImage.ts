import avatarUp from "../../../public/img/arriba.png";
import avatarBack from "../../../public/img/atras.png";
import avatarForward1 from "../../../public/img/adelante1.png";
import avatarForward2 from "../../../public/img/adelante2.png";
import avatarForward3 from "../../../public/img/adelante3.png";
import avatarForward4 from "../../../public/img/adelante4.png";
import avatarDown from "../../../public/img/abajo.png";
import { TGetImageChanger } from "./types";

export const getImageChanger: TGetImageChanger = ({ newMovement, currentMovement }) => {
    if (newMovement === 'ArrowDown') {
        return avatarDown;
    }

    if (newMovement === 'ArrowLeft') {
        return avatarBack;
    }

    if (newMovement === 'ArrowUp') {
        return avatarUp;
    }

    if (newMovement === 'ArrowRight1') {
        return avatarForward1;
    }

    if (newMovement === 'ArrowRight2') {
        return avatarForward2;
    }

    if (newMovement === 'ArrowRight3') {
        return avatarForward3;
    }

    if (newMovement === 'ArrowRight4') {
        return avatarForward4;
    }

    return avatarForward1;

};