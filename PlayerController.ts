import { CanvasManager } from "./CanvasManager";

export enum Input {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    SPACE,
    NONE
}

export class PlayerController {
    constructor(manager: CanvasManager) {
        this.lastInput = Input.NONE;
        manager.canvas.addEventListener("keydown", (event) => {
            if (event.key == "ArrowDown") {
                this.lastInput = Input.DOWN;
            }
            else if (event.key == "ArrowUp") {
                this.lastInput = Input.UP;
            }
            else if (event.key == "ArrowLeft") {
                this.lastInput = Input.LEFT;
            }
            else if (event.key == "ArrowRight") {
                this.lastInput = Input.RIGHT;
            }
            else if (event.key == " ") {
                this.lastInput = Input.SPACE;
            }
        })
    }

    lastInput: Input

    getLastInput(): Input {
        return this.lastInput;
    }
}