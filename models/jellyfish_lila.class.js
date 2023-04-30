class Jellyfish_lila extends MovableObject {

    height = 80;
    width = 50;

    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = 500;
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

