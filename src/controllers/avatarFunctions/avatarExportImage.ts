import avatarUp from "../../../public/img/arriba.png";
import avatarBack from "../../../public/img/atras.png";
import avatarForward from "../../../public/img/adelante.png";
import avatarForwardAnimare from "../../../public/img/adelanteAnimate.png";
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

    if(newMovement === 'ArrowRight') {
        if(currentMovement === 'ArrowRightAnaimate') {
            return avatarForwardAnimare;
        }
        return avatarForward;
    }

    return avatarForward;

};