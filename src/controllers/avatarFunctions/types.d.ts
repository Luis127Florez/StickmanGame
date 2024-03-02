import { StaticImageData } from "next/image";

type TMovement = 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowRightAnaimate';

export type TParamGetImageChanger = {
    newMovement: TMovement;
    currentMovement?: string;
};

export type TGetImageChanger = (param: TParamGetImageChanger) => StaticImageData;