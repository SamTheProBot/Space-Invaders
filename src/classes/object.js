import { canvasHeight, canvasWidth, ctx } from '../store/canvasProperty';

export class GameObject {
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.type = '';
    this.dead = false;
    this.img = new Image();
    this.img.src = '';
    this.height = 50;
    this.width = 50;
  }

  draw(img) {
    this.img = img;
    ctx.drawImage(
      this.img,
      this.positionX - this.width / 2,
      this.positionY,
      this.width,
      this.height
    );
  }

  collisionBoundries() {
    return {
      top: this.positionY,
      left: this.positionX - this.width / 2,
      bottom: this.positionY + this.height,
      right: this.positionX + this.width / 2,
    };
  }
}
