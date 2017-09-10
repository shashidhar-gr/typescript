"use strict";
exports.__esModule = true;
var LikeComponent = (function () {
    function LikeComponent(_likesCont, _isSelected) {
        this._likesCont = _likesCont;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        this._likesCont += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "likesCont", {
        get: function () {
            return this._likesCont;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
