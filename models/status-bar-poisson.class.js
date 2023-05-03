class StatusBarPoisson extends DrawableObject {
    IMAGES = [
        'img/4. Marcadores/orange/0_ copia.png',
        'img/4. Marcadores/orange/20_ copia.png',
        'img/4. Marcadores/orange/40_ copia.png',
        'img/4. Marcadores/orange/60_ copia.png',
        'img/4. Marcadores/orange/80_ copia.png',
        'img/4. Marcadores/orange/100_ copia.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = 20;
        this.y = 80;
        this.width = 200;
        this.height = 40;
    };

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    resolveImageIndex() {
        return 5 ;
    }

}