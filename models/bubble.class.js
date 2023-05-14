class Bubble extends MovableObject {

    width = 50;
    height = 50;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x + world.camera_x;
        this.y = y;
        this.shoot();
    };



    shoot() {
        setInterval(() => {
            if (world.shootLeft) {
                this.x -= 10;
            } else {
                this.x += 10;
            }
        }, 50)
    };
}