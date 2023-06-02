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
    statusBarEndboss = new StatusBarEndboss();
    bubbles = [];
    poisonBubbles = [];
    shootLeft = false;
    collision;
    pufferfishDeadAnimation = false;
    /* coinCollecting_sound = new Audio('audio/collecting.mp3');
    poisonVesselCollecting_sound = new Audio('audio/biting.mp3'); */
    xOffset;
   

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
            this.checkCollisionsPufferfishes();
            this.checkCollisionsJellyfishes();
            this.checkCollisionsEndbosses();
            this.checkBubbleShoot();
            this.checkPoisonBubbleShoot();
            this.characterHasCollectedCoin();
            this.characterHasCollectedPoisonVessel();
            this.checkBubbleCollision();
            this.checkFinslalCollision();
            this.checkPoisonBubbleCollision();
        }, 200);
    }

    getX_Offset() {
        if (this.character.otherDirection) {
            this.xOffset = 0;
        } else {
            this.xOffset = 190;
        };
    }

    checkBubbleShoot() {

        if (this.character.bubbleShoot) {
            this.getX_Offset();
            let bubble = new Bubble(this.character.x + this.xOffset, this.character.y + this.character.height / 2);
            this.bubbles.push(bubble);
            this.character.bubbleShoot = false;
            this.removeBubbleAfterFewSeconds(bubble);
            this.checkShootDirection();
        };
    }

    checkPoisonBubbleShoot() {

        if (this.character.poisonBubbleShoot) {
            this.statusBarPoisson.collectedPoisonVessels -= 1;
            this.statusBarPoisson.setPercentage(this.statusBarPoisson.collectedPoisonVessels);
            this.getX_Offset();
            let poisonBubble = new PoisonBubble(this.character.x + this.xOffset, this.character.y + this.character.height / 2);
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
        }, 1000);
    }

    removePoisonBubbleAfterFewSeconds(poisonBubble) {
        setTimeout(() => {
            this.poisonBubbles.splice(poisonBubble, 1);
        }, 1000);
    }

    checkCollisionsPufferfishes() {
        this.level.pufferfishes.forEach((pufferfish) => {
            if (this.character.isColliding(pufferfish) && !this.character.finSlap) {
                this.collision = 'pufferfish';
                this.collisionConsequences();
            };
        });
    }

    checkCollisionsJellyfishes() {
        this.level.jellyfishes.forEach((jellyfish) => {
            if (this.character.isColliding(jellyfish)) {
                this.collision = 'jellyfish';
                this.collisionConsequences();
            };
        })
    }

    checkCollisionsEndbosses() {
        this.level.endbosses.forEach((endboss) => {
            if (this.character.isColliding(endboss) && !level1.endbosses[0].endbossDead) {
                this.collision = 'endboss';
                this.collisionConsequences();
            };
        })
    }

    collisionConsequences() {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
    }

    checkBubbleCollision() {
        this.level.jellyfishes.forEach((jellyfish) => {
            this.bubbles.forEach((bubble) => {
                if (bubble.isColliding(jellyfish)) {
                    this.bubbles.splice(bubble, 1);
                    let index = level1.jellyfishes.indexOf(jellyfish);
                    this.jellyfishIsDead(index);
                }
            })
        });
    }

    jellyfishIsDead(index) {
        switch (index) {
            case 0:
                level1.jellyfishes[index].jellyfishLilaDead = true;
                break;
            case 1:
                level1.jellyfishes[index].jellyfishGreenDead = true;
                break;
            case 2:
                level1.jellyfishes[index].jellyfishPinkDead = true;
                break;
        }
    }

    checkPoisonBubbleCollision() {
        this.level.endbosses.forEach((endboss) => {
            this.poisonBubbles.forEach((poisonBubble) => {
                if (poisonBubble.isColliding(endboss)) {
                    this.poisonBubbles.splice(poisonBubble, 1);
                    this.checkEnergyEndboss();
                }
            })
        });
    }

    checkEnergyEndboss() {
        this.statusBarEndboss.percentageEndboss -= 20;
        this.statusBarEndboss.setPercentage(this.statusBarEndboss.percentageEndboss);
        this.showStatusBarEndboss();
        if (this.statusBarEndboss.percentageEndboss == 0) {
            level1.endbosses[0].endbossDead = true;
        } else if (this.statusBarEndboss.percentageEndboss < 40) {
            level1.endbosses[0].endbossIsHurt = true;
        }
    }

    showStatusBarEndboss() {
        this.statusBarEndboss.x = 500;
        this.statusBarEndboss.y = 40;
    }

    checkFinslalCollision() {
        this.level.pufferfishes.forEach((pufferfish) => {
            if (this.character.finSlap && this.character.isColliding(pufferfish)) {
                let index = level1.pufferfishes.indexOf(pufferfish);
                this.pufferfishIsDead(index);
            }
        });

    }

    pufferfishIsDead(index) {
        switch (index) {
            case 0:
                level1.pufferfishes[index].pufferfishGreenDead = true;
                break;
            case 1:
                level1.pufferfishes[index].pufferfishOrangeDead = true;
                break;
            case 2:
                level1.pufferfishes[index].pufferfishRedDead = true;
                break;
        }
    }


    characterHasCollectedCoin() {
        this.level.coins.forEach(coin => {
            if (this.character.isColliding(coin)) {
                coinCollecting_sound.play();
                this.statusBarCoins.collectedCoins += 1;
                this.statusBarCoins.setPercentage(this.statusBarCoins.collectedCoins);
                this.findIndexOfCoins(coin);
            }
        });
    }

    findIndexOfCoins(indexOfCoin) {
        let index = this.level.coins.indexOf(indexOfCoin);
        this.coinIsCollected(index);
    }

    coinIsCollected(index) {
        this.level.coins.splice(index, 1);
    }

    characterHasCollectedPoisonVessel() {
        this.level.poisonVessels.forEach(poisonVessel => {
            if (this.character.isColliding(poisonVessel)) {
                poisonVesselCollecting_sound.play();
                this.statusBarPoisson.collectedPoisonVessels += 1;
                this.statusBarPoisson.setPercentage(this.statusBarPoisson.collectedPoisonVessels);
                this.findIndexOfPoisonVessel(poisonVessel);
            }
        });
    }

    findIndexOfPoisonVessel(indexOfPoisonVessel) {
        let index = this.level.poisonVessels.indexOf(indexOfPoisonVessel);
        this.poisonVesselIsCollected(index);
    }

    poisonVesselIsCollected(index) {
        this.level.poisonVessels.splice(index, 1);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.jellyfishes);
        this.addObjectsToMap(this.level.pufferfishes);
        this.addObjectsToMap(this.level.endbosses);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisonVessels);
        this.addToMap(this.character);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonBubbles);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarPoisson);
        this.addToMap(this.statusBarEndboss);

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
        /* mo.drawFrame(this.ctx); */
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