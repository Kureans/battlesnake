import CanvasManager from "./CanvasManager.js";
import GameState from "./GameState.js";
import Rectangle from "./Rectangle.js";

function initListeners(manager: CanvasManager, rect: Rectangle) {
    window.addEventListener("load", () => manager.drawStartRect(rect));
    manager.canvas.addEventListener("keydown", (event) => {
        if (event.key == "ArrowDown") {

        }
        else if (event.key == "ArrowUp") {

        }
        else if (event.key == "ArrowLeft") {
            manager.moveRectLeft(rect);
            rect.x -= 10;
        }
        else if (event.key == "ArrowRight") {
            manager.moveRectRight(rect);
            rect.x += 10;
        }
    })
}

try {
    const manager = new CanvasManager();
    const startRect = new Rectangle(50, 50, 20, 60);
    const gameState = new GameState(manager.canvas.width, manager.canvas.height);
    initListeners(manager, startRect);
    (() => {
        function main() {
            window.requestAnimationFrame(main);
            //clear canvas
            manager.clearCanvas();
            //get input
            gameState.update();
            //transform inputs into drawing
            gameState.getDrawableObjects().forEach((obj) => {
                manager.drawRect(obj.getRect());
            });
        }

        main();
    })();
} catch (error) {
    console.log(error);
}
