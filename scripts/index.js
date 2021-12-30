function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

function computerPlay(num=3) {
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

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ) {
        return 1;    // lose
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" ) {
        return 3;    // win
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock" ) {
        return 2;    // tie
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock" ) {
        playerScore++;
        return 3;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" ) {
        computerScore++;
        return 1;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper" ) {
        return 2;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock" ) {
        computerScore++;
        return 1;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper" ) {
        playerScore++;
        return 3;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors" ) {
        return 2;
    }
}

function game() {
    let playerScore = 0; 
    let computerScore = 0;
    let roundCounter = 0;
    console.log("Time to play Rock, Paper, Scissors!")
    console.log("Ready?");
    while (roundCounter < 6) {
        let playerSelect = prompt("Rock, paper or scissors?");
        const computerSelect = computerPlay();
        const result = playRound(playerSelect, computerSelect);

        if (result === 1) {
            computerScore++;
            console.log("You lose!");
        }
        else if (result === 3) {
            playerScore++;
            console.log("You win!");
        }
        else {
            console.log("Tie!");
        }
        console.log(`The score is now ${playerScore} to ${computerScore}.`)
        roundCounter++;
    }

    console.log("Game over! Final score: ");
    console.log(`You: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

    

}

game();