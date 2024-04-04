export interface Drawable {
    draw(ctx: CanvasRenderingContext2D): void
}

export class CanvasManager {
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

    draw(objects: Drawable[]) {
        objects.forEach(obj => {
            obj.draw(this.ctx);
        });
    }
}