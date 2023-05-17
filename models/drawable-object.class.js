class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 400;
    height = 100;
    width = 100;
    

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

        if (this instanceof Character || this instanceof Endboss || this instanceof Pufferfish_green || this instanceof Pufferfish_orange || this instanceof Pufferfish_red || this instanceof Jellyfish_green || this instanceof Jellyfish_lila || this instanceof Jellyfish_pink) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

}