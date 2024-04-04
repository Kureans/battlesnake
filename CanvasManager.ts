import Rectangle from "./Rectangle.js";

interface DrawableRect {

}

export default class CanvasManager {
    constructor() {
        const canvasOrNull = document.getElementById("canvas") as HTMLCanvasElement|null;

        if (canvasOrNull == null) {
            throw new Error("Canvas not available");
        }

        this.canvas = canvasOrNull;
        this.canvas.width = window.innerWidth * 0.9;
        this.canvas.height = window.innerHeight * 0.9;


        const contextOrNull = this.canvas.getContext("2d");

        if (contextOrNull == null) {
            throw new Error("Rendering Context not available");
        }

        this.ctx = contextOrNull;
    }

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawRect(rect: Rectangle) {
        this.ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }

    drawStartRect(startRect: Rectangle) {
        this.ctx.fillRect(startRect.x, startRect.y, startRect.width, startRect.height);
    }

    moveRectLeft(oldRect: Rectangle) {
        this.ctx.clearRect(oldRect.x, oldRect.y, oldRect.width, oldRect.height);
        this.ctx.fillRect(oldRect.x - 10, oldRect.y, oldRect.width, oldRect.height);
    }

    moveRectRight(oldRect: Rectangle) {
        this.ctx.clearRect(oldRect.x, oldRect.y, oldRect.width, oldRect.height);
        this.ctx.fillRect(oldRect.x + 10, oldRect.y, oldRect.width, oldRect.height);
    }
}