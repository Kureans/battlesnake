import {CanvasManager} from "./CanvasManager.js";
import GameState from "./GameState.js";
import Rectangle from "./Rectangle.js";
import { Direction } from "./Snake.js";

function initListeners(manager: CanvasManager, gameState: GameState) {
    manager.canvas.addEventListener("keydown", (event) => {
        if (event.key == "ArrowDown") {
            gameState.snake1.direction = Direction.DOWN;
        }
        else if (event.key == "ArrowUp") {
            gameState.snake1.direction = Direction.UP;
        }
        else if (event.key == "ArrowLeft") {
            gameState.snake1.direction = Direction.LEFT;
        }
        else if (event.key == "ArrowRight") {
            gameState.snake1.direction = Direction.RIGHT;
        }
    })
}

try {
    const manager = new CanvasManager();
    const gameState = new GameState(manager.canvas.width, manager.canvas.height);
    initListeners(manager, gameState);
    (() => {
        function main() {
            window.requestAnimationFrame(main);
            manager.clearCanvas();
            gameState.update();
            manager.draw(gameState.getDrawableObjects());
        }

        main();
    })();
} catch (error) {
    console.log(error);
}
