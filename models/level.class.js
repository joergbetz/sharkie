class Level {
    jellyfishes;
    pufferfishes;
    endbosses;
    backgroundObjects;
    coins;
    poisonVessels;
    level_end_x = 2150;
    level_start_y = 120;
    level_end_y = 400;
    
    
    constructor(jellyfishes, pufferfishes, endbosses, backgroundObjects, coins, poisonVessels) {
        this.jellyfishes = jellyfishes;
        this.pufferfishes = pufferfishes;
        this.endbosses = endbosses;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisonVessels = poisonVessels;
    }
}
