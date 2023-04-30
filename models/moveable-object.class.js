class MovableObject {
    x = 120;
    y = 400;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    goUp = false;
    speedY = 0;
    acceleration = 0.01;

    applyGravity(){
        setInterval(() => {
            if (this.isNotOnGround()) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
            }
        }, 1000 / 25);
    }

    isNotOnGround() {
        return this.y < 240;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    moveRight() {
        console.log('Moving-rigth');

    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    moveUp() {
        setInterval(() => {
            if (this.y < level1.level_start_y) {
                this.goUp = false;
            }
            if (this.y > level1.level_end_y){
                this.goUp = true;
            }
            if (this.goUp){
                this.y -= this.speed;
            }else{
                this.y += this.speed;
            }
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}