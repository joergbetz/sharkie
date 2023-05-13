class PoisonVessels extends MovableObject {
    width = 50;
    height = 50;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}