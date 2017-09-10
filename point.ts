export class Point {
    
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log("Draw");
    }

    getDistance() {
        console.log("GetDistance");
    }
}