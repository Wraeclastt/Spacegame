import { Ship } from "./Ship";
import { Bullet } from "./Bullet";

const keys = {
  a: false,
  d: false,
  [" "]: false
};

document.addEventListener("keydown", (event) => {
  keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
  keys[event.key] = false;
});

const ship = new Ship();
const bullets = [];

const createBullet = ({ x, y }) => {
  bullets.push(
    new Bullet({
      x,
      y
    })
  );
};

const update = () => {
  if (keys["d"] && ship.x < window.innerWidth - ship.SHIP_IMAGE_WIDTH) {
    ship.moveRight();
  } else if (keys["a"] && ship.x > 0) {
    ship.moveLeft();
  }

  if (keys[" "]) {
    ship.fire({
      createBullet
    });
  }
};
setInterval(update, 20);
