import { Drawable } from "./CanvasManager";

export default class Rectangle implements Drawable {
    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getRect() {
        return this;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    x: number;
    y: number;
    width: number;
    height: number;
}