endboss_sound = new Audio('audio/danger.mp3');
swimming_sound = new Audio('audio/swimming.mp3');
bubble_sound = new Audio('audio/bubble-shoot.mp3');
poisonBubble_sound = new Audio('audio/bubble-shoot-2.mp3');
gameOver_sound = new Audio('audio/game-over.mp3');
finslap_sound = new Audio('audio/finslap.mp3');
snoring_sound = new Audio('audio/snoring.mp3');
coinCollecting_sound = new Audio('audio/collecting.mp3');
poisonVesselCollecting_sound = new Audio('audio/biting.mp3');
main_sound = new Audio('audio/techno_loop.mp3');

let audioElements = [
    endboss_sound,
    swimming_sound,
    bubble_sound,
    poisonBubble_sound,
    gameOver_sound,
    finslap_sound,
    snoring_sound,
    coinCollecting_sound,
    poisonVesselCollecting_sound,
    main_sound
];

main_sound.volume = 0.4;
main_sound.loop = true;

function toggleVolume() {
    if (!sound) {
        for (let i = 0; i < audioElements.length; i++) {
            audioElements[i].volume = 0;
        }
    } else {
        for (let i = 0; i < audioElements.length-1; i++) {
            audioElements[i].volume = 1;
        }
        main_sound.volume = 0.4;
    }
};