let canvas;
let world;
let keyboard = new Keyboard;
let sound = true;

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
    main_sound.play().loop;
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
    document.getElementById('move').classList.add('d-none');
}

function lostGame() {
    clearAllIntervals();
    getClientHeight();
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('wonScreen').classList.add('d-none');
    document.getElementById('lostScreen').classList.remove('d-none');
}

function checkAspectRatio() {
    if (screen.orientation.type === 'landscape-primary') {
        getClientHeight();
        document.getElementById('turnScreen').classList.add('d-none');
        document.getElementById('startScreen').classList.remove('d-none');
        console.log(screen.orientation.type);
    } else {  
        console.log(screen.orientation.type);
        document.getElementById('move').classList.add('d-none');
        document.getElementById('startScreen').classList.add('d-none');
        document.getElementById('turnScreen').classList.remove('d-none');
    }
}

function getClientHeight() {
    let clientHeight = document.getElementById('startScreen').clientHeight;
    console.log(clientHeight);
    if (clientHeight < 480) {
        document.getElementById('move').classList.remove('d-none');
    };
}

function toggleSound() {
    document.getElementById('icon_sound_off').classList.toggle('d-none');
    document.getElementById('icon_sound_on').classList.toggle('d-none');
    if (document.getElementById('icon_sound_off').classList.contains('d-none')) {
        sound = true;
        toggleVolume();
    } else {
        sound = false;
        toggleVolume();
    }
}

function toggleScreenSize() {
    document.getElementById('icon_full_screen').classList.toggle('d-none');
    document.getElementById('icon_exit_full_screen').classList.toggle('d-none');
    if (document.getElementById('icon_full_screen').classList.contains('d-none')) {
        fullscreen();
    } else {
        exitFullscreen();
    }
}

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
    }
  }

  function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }  

  function spaceBtnTouched() {
    keyboard.SPACE = true;
  };

  function spaceBtnUntouched() {
    keyboard.SPACE = false;
  };

  function yBtnTouched() {
    keyboard.yButton = true;
  };

  function yBtnUntouched() {
    keyboard.yButton = false;
  };

  function xBtnTouched() {
    keyboard.xButton = true;
  };

  function xBtnUntouched() {
    keyboard.xButton = false;
  };

  function upBtnTouched() {
    keyboard.UP = true;
  }

  function upBtnUntouched() {
    keyboard.UP = false;
  }

  function downBtnTouched() {
    keyboard.DOWN = true;
  }

  function downBtnUntouched() {
    keyboard.DOWN = false;
  }

  function leftBtnTouched() {
    keyboard.LEFT = true;
  }

  function leftBtnUntouched() {
    keyboard.LEFT = false;
  }

  function rightBtnTouched() {
    keyboard.RIGHT = true;
  }

  function rightBtnUntouched() {
    keyboard.RIGHT = false;
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
});

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