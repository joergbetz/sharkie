let canvas;
let world;

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('My Charakter is ', world.character);
}