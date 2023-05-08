class Bubble extends MovableObject {

    width = 50;
    height = 50;

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x,
            this.y = y;
        this.shoot();
    };

    

    shoot() {
        setInterval(() => {
            this.x += 10;
            if (this.x > world.character.x + 200) {
                this.shootActive = false;
                console.log(this.shootActive);
            }
        }, 50)
    };

    /* shoot() {
        this.x += 10;
        if (this.x > world.character.x + 200) {
            clearInterval(this.stopID);
        }
    };

    stopID = setInterval(this.shoot, 50); */
}