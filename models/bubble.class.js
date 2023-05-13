class Bubble extends MovableObject {

    width = 50;
    height = 50;

    offset = {
        top: 130,
        bottom: 70,
        left: 40,
        right: 40
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