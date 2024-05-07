import { Drawable } from "./CanvasManager.js";
import Rectangle from "./Rectangle.js";

export enum Direction {
    UP, DOWN, LEFT, RIGHT
};

export class Snake implements Drawable {
    constructor(startX: number, startY: number, length: number, speed: number, direction: Direction) {
        this.body = Array<Rectangle>(length);
        this.speed = speed;
        this.length = length;
        this.direction = direction;
        for (let i = 0; i < length; i++) {
            //starts gg right, head idx == length-1
            this.body[i] = new Rectangle(startX + i*10, startY, 10, 10);
        }
    }

    update(maxCanvasWidth: number, maxCanvasHeight: number, visited: boolean[][]): boolean {
        const blockHeight = 10;
        const blockWidth = 10;
        switch (this.direction) {
            case Direction.UP:
                this.body.push(new Rectangle(this.body[this.length-1].x, Math.max(this.body[this.length-1].y-this.speed, 0), 10, 10));
                break;
            case Direction.DOWN:
                this.body.push(new Rectangle(this.body[this.length-1].x, Math.min(this.body[this.length-1].y+this.speed,  maxCanvasHeight-blockHeight), 10, 10));
                break;
            case Direction.LEFT:
                this.body.push(new Rectangle(Math.max(this.body[this.length-1].x-this.speed, 0), this.body[this.length-1].y, 10, 10))
                break;
            case Direction.RIGHT:
                this.body.push(new Rectangle(Math.min(this.body[this.length-1].x+this.speed, maxCanvasWidth-blockWidth), this.body[this.length-1].y, 10, 10))
                break;
        }
        this.length++;
        const new_x = Math.floor(this.body[this.length-1].x / 10);
        const new_y = Math.floor(this.body[this.length-1].y / 10);
        // console.log(`Head Coordinates Raw-> x: ${this.body[this.length-1].x}, y: ${this.body[this.length-1].y}`);
        console.log(`Head Coordinates Floored-> x: ${new_x}, y: ${new_y}`);
        // console.log(`Visited Size: ${visited.length} ${visited[0].length}`)
        if (visited[new_x][new_y]) {
            console.log("Visited!");
            return false;
        } else {
            console.log("Not Visited");
            visited[new_x][new_y] = true;
            return true;
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        for (let i = 0; i < this.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, this.body[i].width, this.body[i].height);
        }
    }

    body: Rectangle[];
    length: number;
    speed: number;
    direction: Direction;
};