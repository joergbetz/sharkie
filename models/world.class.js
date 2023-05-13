class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoins = new StatusBarCoins();
    statusBarPoisson = new StatusBarPoisson();
    bubbles = [];
    poisonBubbles = [];
    shootLeft = false;
    collision;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkBubbleShoot();
            this.checkPoisonBubbleShoot();
        }, 200);
    }

    checkBubbleShoot() {

        if (this.character.bubbleShoot) {
            let bubble = new Bubble(this.character.x + 150, this.character.y + 150);
            this.bubbles.push(bubble);
            this.character.bubbleShoot = false;
            this.removeBubbleAfterFewSeconds(bubble);
            this.checkShootDirection();
        };
    }

    checkPoisonBubbleShoot() {

        if (this.character.poisonBubbleShoot) {
            let poisonBubble = new PoisonBubble(this.character.x + 150, this.character.y + 150);
            this.poisonBubbles.push(poisonBubble);
            this.character.poisonBubbleShoot = false;
            this.removePoisonBubbleAfterFewSeconds(poisonBubble);
            this.checkShootDirection();
        };
    }

    checkShootDirection() {
        if (this.character.otherDirection) {
            this.shootLeft = true;
        } else {
            this.shootLeft = false;
        }
    }

    removeBubbleAfterFewSeconds(bubble) {
        setTimeout(() => {
            this.bubbles.splice(bubble, 1);
        }, 1500);
    }

    removePoisonBubbleAfterFewSeconds(poisonBubble) {
        setTimeout(() => {
            this.poisonBubbles.splice(poisonBubble, 1);
        }, 1500);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.checkEnemy(enemy);
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            };
        });
    }

    checkEnemy(enemy) {
        if (enemy.height == 80) {
            this.collision = 'jellyfish'
        };
        if (enemy.height == 85) {
            this.collision = 'pufferfish';
        }
        if (enemy.height == 400) {
            this.collision = 'endboss';
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisonVessels);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarPoisson);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonBubbles);
        /* this.ctx.translate(+this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0); */

        //Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
}