export default class Rectangle {
    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getRect() {
        return this;
    }

    x: number;
    y: number;
    width: number;
    height: number;
}