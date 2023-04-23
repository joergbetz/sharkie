class BackgroundObject extends MovableObject {
    width = 720;
    x = 0;

    constructor(imagePath){
        super().loadImage(imagePath);
    }

}