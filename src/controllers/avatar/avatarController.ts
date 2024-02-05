import { checkDevouring } from "./avatarFunctions";

export class Avatar {
  private static instance: Avatar;
  private left: number;
  private top: number;
  private right: number;
  private bottom: number;
  private name: string;
  private life: number;

  constructor() {
    this.right = 416;
    this.top = 462;
    this.left = 0;
    this.bottom = 0;
    this.name = "";
    this.life = 0;
  }

  moveAvatarToRight() {
    const { isDevouring, typesDevouring } = checkDevouring(document);

    const typeDevouring = typesDevouring.find((type) => type === "right");

    if (isDevouring && typeDevouring) return;

    this.right -= 4;
  }

  moveAvatarToLeft() {
    const { isDevouring, typesDevouring } = checkDevouring(document);

    const typeDevouring = typesDevouring.find((type) => type === "left");

    if (isDevouring && typeDevouring) return;

    this.right += 4;
  }

  async moveToUp(jumpLevel: number = 1) {
    let limit = 0;
    if (jumpLevel === 1) {
      limit = 70;
    }
    if (jumpLevel === 2) {
      limit = 100;
    }
    for (let index = 0; index < limit; index++) {
      const { isDevouring, typesDevouring } = checkDevouring(document);

      const typeDevouring = typesDevouring.find((type) => type === "top");

      if (isDevouring && typeDevouring) return;

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(resolve);
        }, 10);
      });

      this.top -= 2;
    }
  }

  moveAvatarToDown() {
    const { isDevouring, typesDevouring } = checkDevouring(document);

    const typeDevouring = typesDevouring.find((type) => type === "bottom");

    if (isDevouring && typeDevouring) return;

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

  getProperties() {
    return {
      right: this.right,
      top: this.top,
      left: this.left,
      bottom: this.bottom,
      name: this.name,
      life: this.life,
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
}
