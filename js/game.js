let canvas;
let world;
let keyboard = new Keyboard;
let sound = true;
let check = false;

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
        document.getElementById('headline').classList.remove('d-none');
        document.getElementById('startScreen').classList.remove('d-none');
    } else {
        document.getElementById('move').classList.add('d-none');
        document.getElementById('startScreen').classList.add('d-none');
        document.getElementById('turnScreen').classList.remove('d-none');
        document.getElementById('headline').classList.add('d-none');
    }
}

function getClientHeight() {
    let clientHeight = document.getElementById('startScreen').clientHeight;
    window.mobileAndTabletCheck();
    if (clientHeight < 480 || check) {
        document.getElementById('move').classList.remove('d-none');
        document.getElementById('icon_full_screen').classList.add('d-none');
        setFullSize();
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
    if (window.innerHeight != screen.height) {
        fullscreen();
        setFullSize();
        document.getElementById('icon_full_screen').classList.add('d-none');
        document.getElementById('icon_exit_full_screen').classList.remove('d-none');
    } else {
        exitFullscreen();
        setSmallSize();
        document.getElementById('icon_full_screen').classList.remove('d-none');
        document.getElementById('icon_exit_full_screen').classList.add('d-none');
    }
}

function setFullSize() {
    document.getElementById('canvas').style.height = "100vh";
    document.getElementById('canvas').style.width = "100vw";
    document.getElementById('startScreen').style.height = "100vh";
    document.getElementById('startScreen').style.width = "100vw";
    document.getElementById('wonScreen').style.height = "100vh";
    document.getElementById('wonScreen').style.width = "100vw";
    document.getElementById('lostScreen').style.height = "100vh";
    document.getElementById('lostScreen').style.width = "100vw";
    document.getElementById('headline').style.display = "none";
}

function setSmallSize() {
    document.getElementById('canvas').style.height = "480px";
    document.getElementById('canvas').style.width = "720px";
    document.getElementById('startScreen').style.height = "480px";
    document.getElementById('startScreen').style.width = "720px";
    document.getElementById('wonScreen').style.height = "480px";
    document.getElementById('wonScreen').style.width = "720px";
    document.getElementById('lostScreen').style.height = "480px";
    document.getElementById('lostScreen').style.width = "720px";
}

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

window.addEventListener('touchstart', mobileBtnTouched);
window.addEventListener('touchend', mobileBtnUntouched);

function mobileBtnTouched() {
        document.getElementById('space_btn').addEventListener('touchstart', (event) => {
            event.preventDefault();
            keyboard.SPACE = true;
        });
        document.getElementById('y_btn').addEventListener('touchstart', (event) => {
            event.preventDefault();
            keyboard.yButton = true;
        });
        document.getElementById('x_btn').addEventListener('touchstart', (event) => {
            event.preventDefault();
            keyboard.xButton = true;
        });
        document.getElementById('up_btn').addEventListener('touchstart', (event) => {
            event.preventDefault();
            keyboard.UP = true;
        });
        document.getElementById('down_btn').addEventListener('touchstart', (event) => {
            event.preventDefault();
            keyboard.DOWN = true;
        });
        document.getElementById('left_btn').addEventListener('touchstart', (event) => {
            event.preventDefault();
            keyboard.LEFT = true;
        });
        document.getElementById('right_btn').addEventListener('touchstart', (event) => {
            event.preventDefault();
            keyboard.RIGHT = true;
        });
}

function mobileBtnUntouched() {
        document.getElementById('space_btn').addEventListener('touchend', (event) => {
            event.preventDefault();
            keyboard.SPACE = false;
        });
        document.getElementById('y_btn').addEventListener('touchend', (event) => {
            event.preventDefault();
            keyboard.yButton = false;
        });
        document.getElementById('x_btn').addEventListener('touchend', (event) => {
            event.preventDefault();
            keyboard.xButton = false;
        });
        document.getElementById('up_btn').addEventListener('touchend', (event) => {
            event.preventDefault();
            keyboard.UP = false;
        });
        document.getElementById('down_btn').addEventListener('touchend', (event) => {
            event.preventDefault();
            keyboard.DOWN = false;
        });
        document.getElementById('left_btn').addEventListener('touchend', (event) => {
            event.preventDefault();
            keyboard.LEFT = false;
        });
        document.getElementById('right_btn').addEventListener('touchend', (event) => {
            event.preventDefault();
            keyboard.RIGHT = false;
        });
};

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

window.mobileAndTabletCheck = function() {
    
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };