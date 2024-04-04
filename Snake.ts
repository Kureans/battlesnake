import { Drawable } from "./CanvasManager.js";
import Rectangle from "./Rectangle.js";

export enum Direction {
    UP, DOWN, LEFT, RIGHT
};

export class Snake implements Drawable {
    constructor(body: Rectangle, speed: number, direction: Direction) {
        this.body = body;
        this.speed = speed;
        this.direction = direction;
    }

    update(maxCanvasWidth: number, maxCanvasHeight: number) {
        switch (this.direction) {
            case Direction.UP:
                this.body.y = Math.max(this.body.y-this.speed, 0);
                break;
            case Direction.DOWN:
                this.body.y = Math.min(this.body.y+this.speed, maxCanvasHeight-this.body.height);
                break;
            case Direction.LEFT:
                this.body.x = Math.max(this.body.x-this.speed, 0);
                break;
            case Direction.RIGHT:
                this.body.x = Math.min(this.body.x+this.speed, maxCanvasWidth-this.body.width);
                break;
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(this.body.x, this.body.y, this.body.width, this.body.height);
    }

    getRect() {
        return this.body;
    }

    body: Rectangle;
    speed: number;
    direction: Direction;
};