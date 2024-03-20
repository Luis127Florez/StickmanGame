import { checkDevouring } from "../avatarFunctions/avatarCheckDevouring";
import { TMovement } from "../avatarFunctions/types.d";

export class Avatar {
  private static instance: Avatar;
  private left: number;
  private top: number;
  private right: number;
  private bottom: number;
  private name: string;
  private life: number;
  private currentMovement: TMovement;

  constructor() {
    this.right = 416;
    this.top = 400;
    this.left = 0;
    this.bottom = 0;
    this.name = "";
    this.life = 0;
    this.currentMovement = "ArrowRight";
  }

  moveAvatarToRight() {
    const { isDevouring, typesDevouring } = checkDevouring(document);

    const typeDevouring = typesDevouring.find((type) => type === "right");

    if (isDevouring && typeDevouring) return;

    this.currentMovement = "ArrowRight";

    this.right -= 4;
  }

  moveAvatarToLeft() {
    const { isDevouring, typesDevouring } = checkDevouring(document);

    const typeDevouring = typesDevouring.find((type) => type === "left");

    if (isDevouring && typeDevouring) return;

    this.currentMovement = "ArrowLeft";

    this.right += 4;
  }

  moveToUp() {
    const { isDevouring, typesDevouring } = checkDevouring(document);

    const typeDevouring = typesDevouring.find((type) => type === "top");

    if (isDevouring && typeDevouring) return;

    this.currentMovement = "ArrowUp";

    this.top -= 2;
  }

  moveAvatarToDown() {
    const { isDevouring, typesDevouring } = checkDevouring(document);

    const typeDevouring = typesDevouring.find((type) => type === "bottom");

    if (isDevouring && typeDevouring) return;

    this.currentMovement = "ArrowDown";

    this.top += 2;
  }

  getPropertyLeft() {
    return this.left;
  }

  getPropertyTop() {
    return this.top;
  }

  getPropertyRight() {
    return this.right;
  }

  getPropertyBottom() {
    return this.bottom;
  }

  getPropertyName() {
    return this.name;
  }

  getPropertyLife() {
    return this.life;
  }

  getPropertyCurrentMovement() {
    return this.currentMovement;
  }

  getProperties() {
    return {
      right: this.right,
      top: this.top,
      left: this.left,
      bottom: this.bottom,
      name: this.name,
      life: this.life,
      currentMovement: this.currentMovement,
    };
  }

  public getInstance(): Avatar {
    if (!Avatar.instance) {
      Avatar.instance = new Avatar();
    }

    return Avatar.instance;
  }

  setPropertyLeft(left: number) {
    this.left = left;
  }

  setPropertyTop(top: number) {
    this.top = top;
  }

  setPropertyRight(right: number) {
    this.right = right;
  }

  setPropertyBottom(bottom: number) {
    this.bottom = bottom;
  }

  setPropertyName(name: string) {
    this.name = name;
  }

  setPropertyLife(life: number) {
    this.life = life;
  }

  setCurrentMovement(currentMovement: TMovement) {
    this.currentMovement = currentMovement;
  }
}
