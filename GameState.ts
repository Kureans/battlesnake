import { Drawable } from "./CanvasManager.js";
import Rectangle from "./Rectangle.js";
import { Snake, Direction } from "./Snake.js";

export default class GameState {
    constructor(canvasWidth: number, canvasHeight: number) {
        this.isRunning = false;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.visited = new Array(Math.floor(canvasWidth/10)).fill(false).map(_ => new Array(Math.floor(canvasHeight/10)).fill(false));
        this.snake1 = new Snake(Math.floor(canvasWidth * 0.1), Math.floor(canvasHeight * 0.1), 1, 10, Direction.RIGHT);
        // this.snake2 = new Snake(new Rectangle(canvasWidth * 0.9 - 30, canvasHeight * 0.9, 30, 10), 5, Direction.LEFT);
        this.apple = new Rectangle(canvasWidth * 0.5, canvasHeight * 0.5, 10, 10);
    }

    update() {
        this.isRunning = this.snake1.update(this.canvasWidth, this.canvasHeight, this.visited);
        // this.snake2.update(this.canvasWidth, this.canvasHeight);
    }

    reset() {
        this.snake1 = new Snake(Math.floor(this.canvasWidth * 0.1), Math.floor(this.canvasHeight * 0.1), 1, 10, Direction.RIGHT);
        this.apple = new Rectangle(this.canvasWidth * 0.5, this.canvasHeight * 0.5, 10, 10);
        this.visited = new Array(Math.floor(this.canvasWidth/10)).fill(false).map(_ => new Array(Math.floor(this.canvasHeight/10)).fill(false));
    }

    getDrawableObjects(): Drawable[] {
        return [this.snake1, this.apple];
    }

    snake1: Snake;
    // snake2: Snake;
    apple: Rectangle;
    canvasWidth: number;
    canvasHeight: number;
    isRunning: boolean;
    visited: boolean[][];
}