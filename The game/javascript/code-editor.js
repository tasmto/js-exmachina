

//CODE EDITOR


const editor = document.querySelector(".editor");
const codeSubmitBtn = document.querySelector(".code-editor-btn");
const instructions = document.querySelector('.instructions');


let e = ace.edit('editor');
e.getSession().setMode('ace/mode/javascript');
e.setTheme('ace/theme/terminal');
e.getSession().setTabSize('2');

// WHEN YOU CLICK ON THE BUTTON
codeSubmitBtn.addEventListener('click', () => {
    let html = e.getValue();

    validateAnswer(html);
});

function validateAnswer(userAnswer) {
    const answer = instructions.getAttribute('data-solution');

    if (userAnswer === null) {
        alert('please set an answer')
    } else if (userAnswer.includes(answer)) {
       alert('well done');
       window.parent.nextStage();
    } else {
        alert('sorry, no...');
        printHint();
    }
}

function printHint() {
    const hint = instructions.getAttribute('data-hint');
    const p = document.createElement('p');
    const hintTxt = document.createTextNode(`hint: ${hint}`);

    const hintTxtExists = instructions.querySelector('.hint-txt');

    if (!(hintTxtExists === null)) {
        hintTxtExists.innerHTML = `hint: ${hint}`;
    } else {
        p.setAttribute('class', 'hint-txt')
        p.appendChild(hintTxt);
        instructions.appendChild(p);
    }
}


