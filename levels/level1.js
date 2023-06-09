let level1;

function initLevel1(){
level1 = new Level(
    [
        new Jellyfish_lila(), 
        new Jellyfish_green(),
        new Jellyfish_pink()
    ],

    [
        new Pufferfish_green(),
        new Pufferfish_orange(),
        new Pufferfish_red(),
    ],

    [
        new Endboss(),
    ],

    [
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720),
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/d1.png', 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0), 
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720),
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/d1.png',1440),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 1440),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 1440), 
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png',1440),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 1440),
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D2.png', 2160),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 2160),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 2160),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 2160),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 2160),
    ],

    [
        new Coins('img/4. Marcadores/1. Coins/1.png', 900, 180),
        new Coins('img/4. Marcadores/1. Coins/1.png', 1000, 180),
        new Coins('img/4. Marcadores/1. Coins/1.png', 1100, 180),
        new Coins('img/4. Marcadores/1. Coins/1.png', 1200, 180),
        new Coins('img/4. Marcadores/1. Coins/1.png', 1400, 300),
        new Coins('img/4. Marcadores/1. Coins/1.png', 1450, 250),
        new Coins('img/4. Marcadores/1. Coins/1.png', 1500, 300),
        new Coins('img/4. Marcadores/1. Coins/1.png', 2100, 300),
        new Coins('img/4. Marcadores/1. Coins/1.png', 2150, 350),
        new Coins('img/4. Marcadores/1. Coins/1.png', 2200, 300),
    ],

    [
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 400, 150),
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 400, 380),
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 480, 380),
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 560, 380),
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 1500, 200),
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 1700, 200),
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 1800, 350),
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 2000, 400),
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 2050, 450),
        new PoisonVessels('img/4. Marcadores/Posión/Animada/1.png', 2100, 400),
    ]
);
}