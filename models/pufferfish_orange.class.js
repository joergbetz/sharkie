class Pufferfish_orange extends MovableObject {

    height = 85;
    width = 50;

    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png'
    ]

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 500 + Math.random() * 500;
        this.speed = 0.15 + Math.random() *0.25;
        this.y = 350;
        setTimeout(() => {
            this.animate();
        }, 1000);
        
    }

    animate() {
        setInterval(() => {
            this.moveLeftPufferOrange();
        }, 1000 / 60);
        
        
        setInterval(() => {
            if (!world.pufferfishOrangeDead) {
                this.playAnimation(this.IMAGES_SWIMMING);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
            
        }, 300);
    }
}