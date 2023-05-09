class Bubble extends MovableObject {

    width = 50;
    height = 50;

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x,
        this.y = y;
        console.log ('bubble-x:'+this.x);
        console.log('bubble-y:'+this.y)
        this.shoot();
    };



    shoot() {
        setInterval(() => {
            this.x += 10;
        }, 50)
    };
}