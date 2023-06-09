class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    goUp = false;
    speedY = 0;
    acceleration = 0.00;
    energy = 100;
    lastHit = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
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

    isColliding(obj) {
        return (this.x + this.width - this.offset.right) >= obj.x &&
            (this.x + this.offset.left) <= (obj.x + obj.width) &&
            (this.y + this.height - this.offset.bottom) >= obj.y &&
            (this.y + this.offset.top) <= (obj.y + obj.height)
    };

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        return timepassed < 500;
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

    moveLeftPufferGreen() {
        if (!level1.pufferfishes[0].pufferfishGreenDead) {
            this.pufferMoveControl()
        } else {
            this.kickOut();
        }
    }

    moveLeftPufferOrange() {
        if (!level1.pufferfishes[1].pufferfishOrangeDead) {
            this.pufferMoveControl()
        } else {
            this.kickOut();
        }
    }

    moveLeftPufferRed() {
        if (!level1.pufferfishes[2].pufferfishRedDead) {
            this.pufferMoveControl()
        } else {
            this.kickOut();
        }
    }

    pufferMoveControl(){
        this.x -= this.speed;
    }

    kickOut() {
        this.x -= this.speed * 30;
        this.y -= this.speed * 50;
    }

    moveUpJellyLila() {
        setInterval(() => {
            if (!level1.jellyfishes[0].jellyfishLilaDead) {
                this.jellyMoveControl()
            } else {
                this.flyOut();
            }
        }, 1000 / 60);
    }

    moveUpJellyGreen() {
        setInterval(() => {
            if (!level1.jellyfishes[1].jellyfishGreenDead) {
                this.jellyMoveControl()
            } else {
                this.flyOut();
            }
        }, 1000 / 60);
    }

    moveUpJellyPink() {
        setInterval(() => {
            if (!level1.jellyfishes[2].jellyfishPinkDead) {
                this.jellyMoveControl();
            } else {
                this.flyOut();
            }
        }, 1000 / 60);
    }

    jellyMoveControl() {
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
    }

    flyOut() {
        this.y -= this.speed * 15;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}