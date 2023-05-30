let canvas;
let world;
let keyboard = new Keyboard;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('wonScreen').classList.add('d-none');
    document.getElementById('lostScreen').classList.add('d-none');
    initLevel1();
    init();
}

function restartGame() {
    window.location.href = "index.html"
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function wonGame() {
    clearAllIntervals();
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('wonScreen').classList.remove('d-none');
    document.getElementById('lostScreen').classList.add('d-none');
}

function lostGame() {
    clearAllIntervals();
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('wonScreen').classList.add('d-none');
    document.getElementById('lostScreen').classList.remove('d-none');
}

function checkAspectRatio() {
    if (window.orientation === 0) {
        console.log('Hochformat')
        console.log('Please rotate your device');
    } else {
        console.log('Querformat');
    }
}

window.addEventListener('orientationchange', checkAspectRatio);

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 89) {
        keyboard.yButton = true;
    }

    if (e.keyCode == 88) {
        keyboard.xButton = true;
    }
})

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 89) {
        keyboard.yButton = false;
    }

    if (e.keyCode == 88) {
        keyboard.xButton = false;
    }
});