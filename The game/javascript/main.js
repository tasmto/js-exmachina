//COLLECT INGREDIENTS


//<P> TAG
const text = document.getElementById('text');
const sceneImage = document.getElementById('scene-image');
let sceneNmbr = 0;
let i = 0;
let speed = 30;

//WHEN THE WINDOW LOADS START THE FIRST SCENE
window.onload = function () {
    nextScene();
};

function typeWriter() {
    if (i < txt.length) {
        text.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function nextScene() {

    //CLEAR ALL THE TEXT
    text.innerHTML = '';

    //STOP THE TYPE WRITER LOOP
    stopAddingWords();


    //JUMP TO THE NEXT DATA-TEXT ATTRIBUTE
    if (!(text.getAttribute(`data-text-${sceneNmbr}`) === null)) {

        nextText();
        nextImage();

        //IT HELPS US RESTART THE TYPING EFFECT
        restartTypingEffect();

        //SET THE NEXT SCENE
        sceneNmbr = sceneNmbr + 1;
    }

    else {
        //MOVE TO THE CODE EDITOR
    }

}

function stopAddingWords() {
    //STOP THE LOOP
    txt = '';
}

function nextText() {
    txt = text.getAttribute(`data-text-${sceneNmbr}`);

    //REMOVE THE DATA TEXT
    text.removeAttribute(`data-text-${sceneNmbr}`);
}

function nextImage() {
    sceneImage.src = sceneImage.getAttribute(`data-image-src-${sceneNmbr}`);
}


function restartTypingEffect () {
    i = 0;
    typeWriter();
}

//WHEN YOU PRESS X...
document.onkeydown = function (event) {
//IF YOU CLICK ANY OTHER KEY ON THE KEYBOARD ASIDE FROM X
    if (!(event.keyCode = 88)) {
        return;
    }

    //IF YOU PRESS X AND ALL THE WORDS HAVE BEEN ADDED
    if (!(i < txt.length)) {
        nextScene();
    } else {
        text.innerText = txt;
        stopAddingWords();
    }
};