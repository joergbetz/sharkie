class StatusBarCoins extends DrawableObject {
    IMAGES = [
        'img/4. Marcadores/orange/0_  copia 2.png',
        'img/4. Marcadores/orange/20_  copia 2.png',
        'img/4. Marcadores/orange/40_  copia 2.png',
        'img/4. Marcadores/orange/60_  copia 2.png',
        'img/4. Marcadores/orange/80_  copia 2.png',
        'img/4. Marcadores/orange/100_ copia 2.png'
    ];

    collectedCoins = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = 20;
        this.y = 40;
        this.width = 200;
        this.height = 40;
    };

    setPercentage(collectedCoins) {
        this.collectedCoins = collectedCoins;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    resolveImageIndex() {
        return  Math.ceil(this.collectedCoins / 2);
    }

}

