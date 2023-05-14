class PoisonBubble extends MovableObject {

    width = 50;
    height = 50;

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.poisonShoot();
    };



    poisonShoot() {
        setInterval(() => {
            if (world.shootLeft) {
                this.x -= 10;
            } else {
                this.x += 10;
            }
        }, 50)
    };
}