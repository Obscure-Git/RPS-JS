const userScoreElem = document.getElementById('user-score');
const comScoreElem = document.getElementById('com-score');
const resultElem = document.getElementById('result');

const rock = document.getElementsByClassName('rock')[0];
const paper = document.getElementsByClassName('paper')[0];
const scissors = document.getElementsByClassName('scissors')[0];

let userScore = 0;
let comScore = 0;

function getComChoice() {
    // r > s > p > r
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    userScore++;
    userScoreElem.innerHTML = userScore;

    const winMsg = "You Won!";
    resultElem.innerHTML = winMsg;
}

function lose() {
    comScore++;
    comScoreElem.innerHTML = comScore;

    const loseMsg = "You Lost!";
    resultElem.innerHTML = loseMsg;
}

function draw() {
    const drawMsg = "Draw!"
    resultElem.innerHTML = drawMsg;
}

function winCheck(userChoice) {
    const comChoice = getComChoice();

    
    switch (userChoice + comChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win()
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose()
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw()
            break;
    }
}

function main() {
    rock.addEventListener('click', () => {
        winCheck('r');
    })

    paper.addEventListener('click', () => {
        winCheck('p');
    })

    scissors.addEventListener('click', () => {
        winCheck('s');
    })
}

main();