import Rectangle from "./Rectangle.js";

export enum Direction {
    UP, DOWN, LEFT, RIGHT
};

export class Snake {
    constructor(body: Rectangle, speed: number, direction: Direction) {
        this.body = body;
        this.speed = speed;
        this.direction = direction;
    }

    update() {
        switch (this.direction) {
            case Direction.UP:
                this.body.y -= this.speed;
                break;
            case Direction.DOWN:
                this.body.y += this.speed;
                break;
            case Direction.LEFT:
                this.body.x -= this.speed;
                break;
            case Direction.RIGHT:
                this.body.x += this.speed;
                break;
        }
    }

    getRect() {
        return this.body;
    }

    body: Rectangle;
    speed: number;
    direction: Direction;
};