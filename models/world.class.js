class World {
    character = new Character();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/d1.png'),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png'),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png'),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png'),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png'),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png'),
        
    ]
    canvas;x  
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        //Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        })

    }

    addToMap(mo){
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}