export class LikeComponent {
    constructor(private _likesCont: number, private _isSelected: boolean) {
    }

    onClick() {
        this._likesCont += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    }

    get isSelected() {
        return this._isSelected;
    }

    get likesCont() {
        return this._likesCont;
    }
}
