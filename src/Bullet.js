import { Entity } from "./Entity";

export class Bullet extends Entity {
  constructor() {
    super({ className: "bullet" });
    this.SPEED = 8;

    this.setX(window.innerWidth / 2);
    this.setY(window.innerHeight - 150);
  }
}
