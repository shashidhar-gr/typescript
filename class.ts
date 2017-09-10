class Point {

    constructor(private _x?: number, private _y?: number) {
    }

    set x (value: number) {
        if (value < 0)
            throw new Error("Value of x cannot be less than 0");
        this._x = value;    
    }

    get x() {
        return this._x;
    }

    draw() {
        console.log("Draw");
    }

    getDistance() {
        console.log("GetDistance");
    }
}

var point = new Point(1, 2);
console.log(point.x);
point.x = 10;
console.log(point.x);
point.draw();
