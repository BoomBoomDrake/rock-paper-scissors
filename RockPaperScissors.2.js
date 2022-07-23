//const r = "rock";
//const p = "paper";
//const s = "scissors";

let playerScore = 0;
let compScore = 0;
let roundCount = 1;

let playerSelection = "";
let computerSelection = "";

function gameStart() {
    for (i = 1; i < 6; i++) {
        playRound();
    }
}
function playRound(button) {
    let input = button.textContent;

    playerSelection = input.toLowerCase();
    console.log(playerSelection); // confirm selection

    if (playerSelection != undefined) computerTurn(); //starts computer turn
    checkRoundWinner(); //check who won the round;
}

function computerTurn() {
    let number = Math.ceil(Math.random() * 3);

    if (number === 1) {
        computerSelection = "rock";
        console.log(computerSelection) //confirm selection
    } else if (number === 2) {
        computerSelection = "paper";
        console.log(computerSelection);//""
    } else if (number === 3) {
        computerSelection = "scissors";
        console.log(computerSelection);//""
    }
}

function checkRoundWinner() {
    switch (compScore !== 5 && playerScore !== 0) {
        case playerSelection === "rock" && computerSelection === "scissors":
            roundCount++;
            playerScore++;
            console.log("You win. Rock beats Scissors.");
            if (compScore === 5 || playerScore === 5) endGame();
            break;
        
        case playerSelection === "paper" && computerSelection === "rock":
            roundCount++;
            playerScore++;
            console.log("You win. Paper beats Rock.");
            if (compScore === 5 || playerScore === 5) endGame();
            break;

        case playerSelection === "scissors" && computerSelection === "paper":
            roundCount++;
            playerScore++;
            console.log("You win. Scissors beats Paper.");
            if (compScore === 5 || playerScore === 5) endGame();
            break;

        case playerSelection === "rock" && computerSelection === "paper":
            roundCount++;
            compScore++;
            console.log("You lose. Paper beats Rock.");
            if (compScore === 5 || playerScore === 5) endGame();
            break;

        case playerSelection === "paper" && computerSelection === "scissors":
            roundCount++;
            compScore++;
            console.log("You lose. Scissors beats paper.");
            if (compScore === 5 || playerScore === 5) endGame();
            break;

        case playerSelection === "scissors" && computerSelection === "rock":
            roundCount++;
            compScore++;
            console.log("You lose. Rock beats Scissors.");
            if (compScore === 5 || playerScore === 5) endGame();
            break;

        default:
            roundCount++;
            console.log("Round draw.");
            if (compScore === 5 || playerScore === 5) endGame();
    }
}

function endGame() {
    let result = "";

    if (playerScore === compScore) {
        result = `${playerScore} : ${compScore} Draw! Game Over`;

    } else if (playerScore > compScore) {
        result = `${playerScore} : ${compScore} You win! Game Over`;

    } else if (playerScore < compScore) {
        result = `${playerScore} : ${compScore} You lose! Game Over`;

    }

    console.log(result);
    
    playerScore = 0;
    compScore = 0;
    roundCount = 1;
}

// UI buttons
const body = document.querySelector('body');
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
let scoreBoard = document.createElement('div');

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

body.appendChild(scoreBoard);
body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(button.textContent);
        playRound(button); 
    })
})