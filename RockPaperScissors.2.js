const r = "rock";
const p = "paper";
const s = "scissors";

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
function playRound() {
    let input = prompt("Rock, Paper, or Scissors?", "");

    playerSelection = input.toLowerCase();
    console.log(playerSelection); // confirm selection

    if (playerSelection != undefined) computerTurn(); //starts computer turn
    checkRoundWinner(); //check who won the round;
}

function computerTurn() {
    let number = Math.ceil(Math.random() * 3);

    if (number === 1) {
        computerSelection = r;
        console.log(computerSelection) //confirm selection
    } else if (number === 2) {
        computerSelection = p;
        console.log(computerSelection);//""
    } else if (number === 3) {
        computerSelection = s;
        console.log(computerSelection);//""
    }
}

function checkRoundWinner() {
    switch (roundCount < 5) {
        case playerSelection === r && computerSelection === s:
            roundCount++;
            playerScore++;
            console.log("You win. Rock beats Scissors.");
            if (roundCount === 6) endGame();
            break;
        
        case playerSelection === p && computerSelection === r:
            roundCount++;
            playerScore++;
            console.log("You win. Paper beats Rock.");
            if (roundCount === 6) endGame();
            break;

        case playerSelection === s && computerSelection === p:
            roundCount++;
            playerScore++;
            console.log("You win. Scissors beats Paper.");
            if (roundCount === 6) endGame();
            break;

        case playerSelection === r && computerSelection === p:
            roundCount++;
            compScore++;
            console.log("You lose. Paper beats Rock.");
            if (roundCount === 6) endGame();
            break;

        case playerSelection === p && computerSelection === s:
            roundCount++;
            compScore++;
            console.log("You lose. Scissors beats paper.");
            if (roundCount === 6) endGame();
            break;

        case playerSelection === s && computerSelection === r:
            roundCount++;
            compScore++;
            console.log("You lose. Rock beats Scissors.");
            if (roundCount === 6) endGame();
            break;

        default:
            roundCount++;
            console.log("Round draw.");
            if (roundCount === 6) endGame();
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