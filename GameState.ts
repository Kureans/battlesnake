import { Drawable } from "./CanvasManager.js";
import Rectangle from "./Rectangle.js";
import { Snake, Direction } from "./Snake.js";

export default class GameState {
    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.snake1 = new Snake(new Rectangle(canvasWidth * 0.1, canvasHeight * 0.1, 30, 10), 5, Direction.RIGHT);
        this.snake2 = new Snake(new Rectangle(canvasWidth * 0.9 - 30, canvasHeight * 0.9, 30, 10), 5, Direction.LEFT);
        this.apple = new Rectangle(canvasWidth * 0.5, canvasHeight * 0.5, 10, 10);
    }

    update() {
        this.snake1.update(this.canvasWidth, this.canvasHeight);
        this.snake2.update(this.canvasWidth, this.canvasHeight);
    }

    getDrawableObjects(): Drawable[] {
        return [this.snake1, this.snake2, this.apple];
    }

    snake1: Snake;
    snake2: Snake;
    apple: Rectangle;
    canvasWidth: number;
    canvasHeight: number;
}