class Jellyfish_pink extends MovableObject {

    height = 80;
    width = 50;

    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = 1400;
        this.y = 50;
        this.speed = 0.5;

        this.animate();
    }

    animate() {
        this.moveUp();

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 300);
    }

}