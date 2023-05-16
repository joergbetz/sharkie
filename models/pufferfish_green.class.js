class Pufferfish_green extends MovableObject {

    height = 85;
    width = 50;
    pufferfishGreenDead = false;

    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png'
    ]

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 500 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.y = 350;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeftPufferGreen();
        }, 1000 / 60);


        setInterval(() => {
            if (!this.pufferfishGreenDead) {
                this.playAnimation(this.IMAGES_SWIMMING);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 300);
    }
}