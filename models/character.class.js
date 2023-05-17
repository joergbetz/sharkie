class Character extends MovableObject {

    height = 300;
    y = 50;
    speed = 6;
    width = 250;

    offset = {
        top: 130,
        bottom: 70,
        left: 80,
        right: 40
    };

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_FIN_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    IMAGES_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png',
    ];

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ]

    IMAGES_ELECTRIC_SHOCK = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ]

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ]

    world;
    swimming_sound = new Audio('audio/swimming.mp3');
    bubble_sound = new Audio('audio/bubble-shoot.mp3');
    poisonBubble_sound = new Audio('audio/bubble-shoot-2.mp3');
    gameOver_sound = new Audio('audio/game-over.mp3');
    finslap_sound = new Audio('audio/finslap.mp3');

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ELECTRIC_SHOCK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_BUBBLE);
        this.applyGravity();
        this.animate();
        this.bubbleShoot = false;
        this.poisonBubbleShoot = false;
        this.delayTime;
        this.startTime = new Date().getTime();
        this.startTimePoison = new Date().getTime();
        this.finSlap = false;
        this.otherDirection = false;
        this.playGameOverSound = false;
        this.gameOverSoundPlayed = false;

    }

    animate() {
        setInterval(() => {
            if (this.playGameOverSound && !this.gameOverSoundPlayed) {
                this.gameOver_sound.play();
                this.gameOverSoundPlayed = true;
            }
        }, 200);

        setInterval(() => {
            this.swimming_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < level1.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.UP && this.y > -20) {
                this.y -= this.speed;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.DOWN && this.y < 240) {
                this.y += this.speed;
                this.swimming_sound.play();
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.playGameOverSound = true;
            } else if (this.isHurt()) {
                if (world.collision == 'jellyfish') {
                    this.playAnimation(this.IMAGES_ELECTRIC_SHOCK);
                } else {
                    this.playAnimation(this.IMAGES_HURT);
                }
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIMMING);
            } else if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.UP && !this.world.keyboard.DOWN && !this.world.keyboard.SPACE) {
                this.playAnimation(this.IMAGES_IDLE)
                this.finSlap = false;
            };
        }, 200);

        setInterval(() => {
            this.delayTime = new Date().getTime() - this.startTime;
            
            if (this.world.keyboard.SPACE && !this.isDead()) {
                this.playAnimation(this.IMAGES_FIN_SLAP);
                this.finSlap = true;
                this.finslap_sound .play();
                this.startTime = new Date().getTime();
            } else {
                this.finSlap = false;
            };
        }, 10);

        setInterval(() => {
            this.delayTime = new Date().getTime() - this.startTime;
            if (this.world.keyboard.yButton && !this.isDead() && !this.bubbleShoot && this.delayTime > 1000) {
                this.playAnimation(this.IMAGES_BUBBLE);
                this.bubble_sound.play();
                this.bubbleShoot = true;
                this.startTime = new Date().getTime();
            };
        }, 60);

        setInterval(() => {
            this.delayTimePoison = new Date().getTime() - this.startTimePoison;
            if (this.world.keyboard.xButton && !this.isDead() && world.statusBarPoisson.collectedPoisonVessels > 0 && !this.poisonBubbleShoot && !level1.endbosses[0].endbossDead && this.delayTimePoison > 1000) {
                this.playAnimation(this.IMAGES_BUBBLE);
                this.poisonBubble_sound.play();
                this.poisonBubbleShoot = true;
                this.startTimePoison = new Date().getTime();
            };
        }, 60);
    };
} 