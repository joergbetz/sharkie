class Level {
    enemies;
    backgroundObjects;
    coins;
    poisonVessels;
    level_end_x = 2150;
    level_start_y = 120;
    level_end_y = 400;
    
    
    constructor(enemies, backgroundObjects, coins, poisonVessels) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisonVessels = poisonVessels;
    }
}
