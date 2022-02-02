import shipImage from "./images/shipp.png";
import { Entity } from "./Entity";

export class Ship extends Entity {
  constructor() {
    super({ tag: "img" });
    this.el.src = shipImage;
    document.body.appendChild(this.el);

    this.el.className = "ship";
    this.SPEED = 8;
    this.SHIP_IMAGE_WIDTH = 100;
    this.canFire = true;

    this.setX(window.innerWidth / 2);
    this.setY(window.innerHeight - 150);
  }

  moveRight() {
    this.setX(this.x + this.SPEED);
  }

  moveLeft() {
    this.setX(this.x - this.SPEED);
  }

  fire({ createBullet }) {
    if (this.canFire) {
    }
    this.canFire = false;
    createBullet({
      x: this.x + this.SHIP_IMAGE_WIDTH / 2,
      y: this.y
    });
    setTimeout(() => {
      this.canFire = true;
    }, 500);
  }
}
