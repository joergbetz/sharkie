class Pufferfish extends MovableObject{

    height = 80;
    width = 50;
    
    constructor(){
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');

        this.x = 200 + Math.random() * 500;
        this.y = 250;
        this.animate();
    }
    
    animate() {
        setInterval(() => {
            this.x -= 0.25;
        },1000 / 60);
    }
   
}