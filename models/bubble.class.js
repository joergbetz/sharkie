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
    /* this.x = x;
    this.y = y; */
    /* this.speedY = 30; */
    setInterval(()=>{
        this.x += 10;
    },50)

}
}