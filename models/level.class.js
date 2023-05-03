class Level {
    enemies;
    backgroundObjects;
    level_end_x = 2150;
    level_start_y = 120;
    level_end_y = 400;
    
    
    constructor(enemies, backgroundObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}
