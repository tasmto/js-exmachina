const gameControls = document.getElementById('game-controls');
const audio = document.querySelector("audio");


function startMusic() {
    audio.play();
    audio.volume = 0.5;

    gameControls.setAttribute('onclick', 'lowerVolume()');
}


function lowerVolume() {
    if (audio.volume  > 0.1) {
        audio.volume = audio.volume - 0.1;       
    }
    else{
        audio.volume = 0.4;  
    }
}

