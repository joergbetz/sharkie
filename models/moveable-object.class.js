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
    acceleration = 0.00;
    energy = 100;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        rigth: 0
    };

    applyGravity() {
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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Pufferfish || this instanceof Jellyfish_green || this instanceof Jellyfish_lila || this instanceof Jellyfish_pink) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

    }

    isColliding (obj) {
        return  (this.x + this.width - this.offset.right) >= obj.x && 
            (this.x + this.offset.left) <= (obj.x + obj.width) && 
            (this.y + this.height - this.offset.bottom) >= obj.y &&
            (this.y + this.offset.top) <= (obj.y + obj.height) 
    };

    hit() {
        this.energy -= 5;
        if (this.energy < 0){
            this.energy = 0;
        };
    }

    isDead() {
        return this.energy == 0;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveUp() {
        setInterval(() => {
            if (this.y < level1.level_start_y) {
                this.goUp = false;
            }
            if (this.y > level1.level_end_y) {
                this.goUp = true;
            }
            if (this.goUp) {
                this.y -= this.speed;
            } else {
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