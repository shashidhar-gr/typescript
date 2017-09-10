"use strict";
exports.__esModule = true;
var Point = (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("Draw");
    };
    Point.prototype.getDistance = function () {
        console.log("GetDistance");
    };
    return Point;
}());
exports.Point = Point;
