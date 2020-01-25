const gameContainer = document.getElementById('game-container');

let level = 0;

let stages = ['level-1', 'popup-1', 'level-1-battle-screen' , 'popup-2',  'level-2', 'popup-3','level-2-battle-screen', 'popup-4', 'level-3', 'popup-5', 'level-3-battle-screen', 'popup-6','level-4', 'popup-7', 'level-4-battle-screen','level-5','end-screen' ];


function nextStage() {
    gameContainer.src = (`../game-files/${stages[level]}.html`);
    level ++;
}

