import { StaticImageData } from "next/image";

type TMovement = 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowRightAnaimate';

export type TParamGetImageChanger = {
    newMovement: string ;
    currentMovement?: string;
};

export type TGetImageChanger = (param: TParamGetImageChanger) => StaticImageData;