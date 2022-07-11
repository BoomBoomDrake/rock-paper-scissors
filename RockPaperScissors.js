// Bank of choices for both players.
let choiceArr = ["rock", "paper", "scissors"];


function computerPlay() {
    return choiceArr[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    return playerSelection === computerSelection ? `Draw, ${playerSelection} and ${computerSelection} are buds.`
        : playerSelection === "rock" && computerSelection === "scissors" ? `You win! Rock beats Scissors.`
        : playerSelection === "rock" && computerSelection === "paper" ? `You lose! Paper beats Rock.`
        : playerSelection === "paper" && computerSelection === "rock" ? `You win! Paper beats Rock.`
        : playerSelection === "paper" && computerSelection === "scissors" ? `You lose! Scissors beat Paper.`
        : playerSelection === "scissors" && computerSelection === "paper" ? `You win! Scissors beats Paper.`
        : playerSelection === "scissors" && computerSelection === "rock" ? `You lose! Rock beats Scissors.`
        : "What the hell did you input?";
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i ++) {
        
    }
}