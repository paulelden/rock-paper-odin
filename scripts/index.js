// variables
let playerScore = 0; 
let computerScore = 0;

const playButtons = document.querySelector("#playButtons");
const pScore = document.querySelector("#player");
const cScore = document.querySelector("#computer");

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => { playRound('rock', computerPlay()) });

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => { playRound('paper', computerPlay()) });

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => { playRound('scissors', computerPlay()) });

let cValue = document.querySelector("#cValue").innerHTML;
let pValue = document.querySelector("#pValue").innerHTML;

const body = document.querySelector("body"); // will use this to add result as child element

// functions

function getRandomInt(max) {    // this is required to get a true random num
    return Math.floor(Math.random() * max);
  }
  

function computerPlay(num=3) {  // convert random int (1-3) into play value
    randomNum = getRandomInt(num)
    if (randomNum === 1) {
        return "rock";
    }
    else if (randomNum === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function updateScore() {
    document.querySelector("#pValue").innerHTML = playerScore;
    document.querySelector("#cValue").innerHTML = computerScore;
}

function playAgain() {
    let replay = prompt("Wanna play again? Y/N");
    if (replay === null) {
        // pass
    }
    else if (replay.toUpperCase() === 'N') {
        // pass
    }
    else if (replay.toUpperCase() === 'Y') {
        location.reload();
    }
    else { playAgain() }
}

function isWinner() {
    if (playerScore === 5 || computerScore === 5) {
        alert(`Game over! Final Score:\nPlayer:     ${playerScore}\nComputer:   ${computerScore}`);
        playAgain();
    }
}
// this contains the comparison logic to determine who wins a round
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper" ) {
        isWinner();
        computerScore++;
        console.log('You lose!');
        updateScore();
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ) {
        isWinner();
        playerScore++;
        console.log('You win!');
        updateScore();
    }
    else if (playerSelection === "rock" && computerSelection === "rock" ) {
        isWinner();
        console.log('Tie!');
        updateScore();
    }
    else if (playerSelection === "paper" && computerSelection === "rock" ) {
        isWinner();
        playerScore++;
        console.log('You win!');
        updateScore();
    }
    else if (playerSelection === "paper" && computerSelection === "scissors" ) {
        isWinner();
        computerScore++;
        console.log('You lose!');
        updateScore();
    }
    else if (playerSelection === "paper" && computerSelection === "paper" ) {
        isWinner();
        console.log('Tie!');
        updateScore();
    }
    else if (playerSelection === "scissors" && computerSelection === "rock" ) {
        computerScore++;
        console.log('You lose!');
        updateScore();
        isWinner();
    }
    else if (playerSelection === "scissors" && computerSelection === "paper" ) {
        isWinner();
        playerScore++;
        console.log('You win!') 
        updateScore();
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors" ) {
        isWinner();
        console.log('Tie!');
        updateScore();
    }
}

function game() {
    alert('Time to play Rock Paper Scissors! First to five wins. \n\nAre you ready?')
    if ( playerScore === 5 ) {
        alert('player');
    }
    
}

// main
game();