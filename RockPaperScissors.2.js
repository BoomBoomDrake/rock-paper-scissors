//const r = "rock";
//const p = "paper";
//const s = "scissors";

let playerScore = 0;
let compScore = 0;
let roundCount = 1;

let playerSelection = "WEAPON";
let computerSelection = "WEAPON";

function gameStart() {
    for (i = 1; i < 6; i++) {
        playRound();
    }
}
function playRound(button) {
    let input = button.textContent;

    playerSelection = input.toLowerCase();
    //console.log(playerSelection); // confirm selection

    if (playerSelection != undefined) computerTurn(); //starts computer turn
    checkRoundWinner(); //check who won the round;
}

function computerTurn() {
    let number = Math.ceil(Math.random() * 3);

    if (number === 1) {
        computerSelection = "rock";
        //console.log(computerSelection) //confirm selection
    } else if (number === 2) {
        computerSelection = "paper";
        //console.log(computerSelection);//""
    } else if (number === 3) {
        computerSelection = "scissors";
        //console.log(computerSelection);//""
    }
}

function checkRoundWinner() {
    switch (compScore !== 5 && playerScore !== 5) {
        case playerSelection === "rock" && computerSelection === "scissors":
            roundCount++;
            playerScore++;

            scoreBoard.textContent = `You ${playerScore} : ${compScore} Comp`;
            roundDisp.textContent = `Round: ${roundCount}`;
            selDisp.textContent = `${playerSelection} VS. ${computerSelection}`;
            results.textContent = "You win. Rock beats Scissors.";
            
            if (compScore === 5 || playerScore === 5) endGame();
            break;
        
        case playerSelection === "paper" && computerSelection === "rock":
            roundCount++;
            playerScore++;

            scoreBoard.textContent = `You ${playerScore} : ${compScore} Comp`;
            roundDisp.textContent = `Round: ${roundCount}`;
            selDisp.textContent = `${playerSelection} VS. ${computerSelection}`;
            results.textContent = "You win. Paper beats Rock.";
            
            if (compScore === 5 || playerScore === 5) endGame();
            break;

        case playerSelection === "scissors" && computerSelection === "paper":
            roundCount++;
            playerScore++;

            scoreBoard.textContent = `You ${playerScore} : ${compScore} Comp`;
            roundDisp.textContent = `Round: ${roundCount}`;
            selDisp.textContent = `${playerSelection} VS. ${computerSelection}`;
            results.textContent = "You win. Scissors beats Paper."
            
            if (compScore === 5 || playerScore === 5) endGame();
            break;

        case playerSelection === "rock" && computerSelection === "paper":
            roundCount++;
            compScore++;

            scoreBoard.textContent = `You ${playerScore} : ${compScore} Comp`;
            roundDisp.textContent = `Round: ${roundCount}`;
            selDisp.textContent = `${playerSelection} VS. ${computerSelection}`;
            results.textContent = "You lose. Paper beats Rock.";

            if (compScore === 5 || playerScore === 5) endGame();
            break;

        case playerSelection === "paper" && computerSelection === "scissors":
            roundCount++;
            compScore++;

            scoreBoard.textContent = `You ${playerScore} : ${compScore} Comp`;
            roundDisp.textContent = `Round: ${roundCount}`;
            selDisp.textContent = `${playerSelection} VS. ${computerSelection}`;
            results.textContent = "You lose. Scissors beats Paper.";
            
            if (compScore === 5 || playerScore === 5) endGame();
            break;

        case playerSelection === "scissors" && computerSelection === "rock":
            roundCount++;
            compScore++;

            scoreBoard.textContent = `You ${playerScore} : ${compScore} Comp`;
            roundDisp.textContent = `Round: ${roundCount}`;
            selDisp.textContent = `${playerSelection} VS. ${computerSelection}`;
            results.textContent = "You lose. Rock. beats Scissors.";
            
            if (compScore === 5 || playerScore === 5) endGame();
            break;

        default:
            roundCount++;
            roundDisp.textContent = `Round: ${roundCount}`;
            results.textContent = "Round Draw.";

            if (compScore === 5 || playerScore === 5) endGame();
    }
}

function endGame() {

    if (playerScore === compScore) {
        results.textContent = `Draw! Game Over`;

    } else if (playerScore > compScore) {
        results.textContent = `You win! Game Over`;

    } else if (playerScore < compScore) {
        results.textContent = `You lose! Game Over`;

    }
    
    body.removeChild(btnRock);
    body.removeChild(btnPaper);
    body.removeChild(btnScissors);

    body.appendChild(resetBtn);

}

function resetGame() {
    body.removeChild(resetBtn);
    
    playerScore = 0;
    compScore = 0;
    roundCount = 1;

    scoreBoard.textContent = `You ${playerScore} : ${compScore} Comp`;
    roundDisp.textContent = `Round: ${roundCount}`;
    selDisp.textContent = `${playerSelection} VS. ${computerSelection}`;
    results.textContent = 'Choose Your Weapon';

    body.appendChild(btnRock);
    body.appendChild(btnPaper);
    body.appendChild(btnScissors);
    

}

// UI buttons
const body = document.querySelector('body');
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');


// UI Displays
let scoreBoard = document.createElement('h1');
let roundDisp = document.createElement('h2');
let selDisp = document.createElement('h2');
let results = document.createElement('h3');

// UI Displays Default Text
scoreBoard.textContent = `You ${playerScore} : ${compScore} Comp`;
roundDisp.textContent = `Round: ${roundCount}`;
selDisp.textContent = `${playerSelection} VS. ${computerSelection}`;
results.textContent = 'Choose Your Weapon';


btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

body.appendChild(scoreBoard);
body.appendChild(roundDisp);
body.appendChild(selDisp);
body.appendChild(results);
body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.classList.add('weapon');
    button.addEventListener('click', () => {
        //console.log(button.textContent);
        playRound(button); 
    });
});

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.addEventListener('click', () => {
    resetGame();
});