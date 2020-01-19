const gameContainer = document.getElementById('game-container');

let level = 0;

let stages = ['level-1', 'level-1-battle-screen', 'level-2', 'level-2-battle-screen', 'level-3', 'level-3-battle-screen', 'level-4', 'level-4-battle-screen'];


function nextStage() {
    gameContainer.src = (`../game-files/${stages[level]}.html`);
    level ++;
}



