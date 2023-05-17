class StatusBarEndboss extends DrawableObject {
    IMAGES = [
        'img/4. Marcadores/orange/0_  copia.png',
        'img/4. Marcadores/orange/20_ copia.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/100_  copia.png'
    ];


    percentageEndboss = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 3500;
        this.y = 0;
        this.width = 200;
        this.height = 40;
    };

    setPercentage(percentageEndboss) {
        this.percentageEndboss = percentageEndboss;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    resolveImageIndex() {
        return Math.floor(this.percentageEndboss / 20) ;
    }
};

    
