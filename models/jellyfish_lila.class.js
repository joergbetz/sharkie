class Jellyfish_lila extends MovableObject {

    height = 80;
    width = 50;

    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 500;
        this.y = 50;
        this.speed = 0.5;
        setTimeout(() => {
            this.animate(); 
        }, 1000);
        
    }

    animate() {
        this.moveUpJellyLila();
        
        setInterval(() => {
            if (!world.jellyfishLilaDead) {
                this.playAnimation(this.IMAGES_SWIMMING);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 300);
    }

}

