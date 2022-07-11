//Default messages at end of round

function computerPlay() {
    let choiceArr = ["rock", "paper", "scissors"];

    return choiceArr[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper, Scissors?');
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(`Computer Choice: ${computerSelection}`);

    if (playerSelection === "rock") {
        return computerSelection === "paper" ? loseMessage
            : computerSelection === "scissors" ? loseMessage
            : drawMessage;
    } else if (playerSelection === "paper") {
        return computerSelection === "scissors" ? loseMessage
            : computerSelection === "rock" ? winMessage
            : drawMessage;
    } else if (playerSelection === "scissors")  {
        return computerSelection === "rock" ? loseMessage
            : computerSelection === "paper" ? winMessage
            : drawMessage;
    } else {
        return errorMessage;
    }
}


let playerSelection
let computerSelection = computerPlay();

const winMessage = `You win! ${playerSelection} beats ${computerSelection}!`;
const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}!`;
const drawMessage = "Draw, no winners."
const errorMessage = "Error, please choose rock, paper, or scissors. Round wash.";

const gameWin = "Game Over. You Win!";
const gameLose = "Game Over. You Lose!";
const gameDraw = "Game Over. Draw!";

function game() {
    const compScore = 0;
    const playerScore = 0;

    for (let i = 0; i < 5; i ++) {
        let roundCount = i + 1;
        
        alert(`ROUND: ${roundCount}, Player: ${playerScore} Computer: ${compScore}`);

        playRound(playerSelection, computerSelection);

        if (playRound() = winMessage) {
            roundCount += 1;
            playerScore +=1;
        } else if (playRound() = loseMessage) {
            roundCount += 1;
            compScore += 1;
        } else if (playRound() = drawMessage) {
            roundCount += 1;
        } else if (playRound() = errorMessage) {
            i -= 1;
        }
    }

    if (playerScore > compScore) {
        alert(gameWin);
    } else if (playerScore < compScore) {
        alert(gameLose);
    } else if (playerScore = compScore) {
        alert(gameDraw);
    }
}