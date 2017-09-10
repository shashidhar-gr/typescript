import { LikeComponent } from './like';

let likeComponent = new LikeComponent(0, false);

likeComponent.onClick();

console.log(likeComponent.isSelected);
console.log(likeComponent.likesCont);

likeComponent.onClick();

console.log(likeComponent.isSelected);
console.log(likeComponent.likesCont);