let canvas;
let ctx;
let character = new Image();

function init(){
    canvas = document.getElementById('canvas');
    character.src = '../img/1.Sharkie/3.Swim/1.png';
    ctx = canvas.getContext('2d');

    ctx.drawImage(character, 20, 20, 50, 100);
}