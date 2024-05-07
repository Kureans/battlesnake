import {CanvasManager} from "./CanvasManager.js";
import GameState from "./GameState.js";
import { Direction } from "./Snake.js";

function initListeners(manager: CanvasManager, gameState: GameState) {
    manager.canvas.addEventListener("keydown", (event) => {
        const currentDirection = gameState.snake1.direction;
        if (event.key == "ArrowDown") {
            if (currentDirection != Direction.UP)
                gameState.snake1.direction = Direction.DOWN;
        }
        else if (event.key == "ArrowUp") {
            if (currentDirection != Direction.DOWN)
                gameState.snake1.direction = Direction.UP;
        }
        else if (event.key == "ArrowLeft") {
            if (currentDirection != Direction.RIGHT)
                gameState.snake1.direction = Direction.LEFT;
        }
        else if (event.key == "ArrowRight") {
            if (currentDirection != Direction.LEFT)
                gameState.snake1.direction = Direction.RIGHT;
        }
        else if (event.key == " ") {
            gameState.isRunning = !gameState.isRunning;
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
            if (!gameState.isRunning) {
                manager.clearCanvas();
                gameState.reset();
                return;
            }
            gameState.update();
            manager.draw(gameState.getDrawableObjects());
        }

        main();
    })();
} catch (error) {
    console.log(error);
}
