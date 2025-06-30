let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    if (number === 0) {
        return "rock";
    }
    else if (number === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("please enter 'rock' 'paper' or 'scissors'");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return "You win! Rock beats Scissors"; }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        return "You lose! Paper beats Rock"; }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return "You win! Paper beats Rock"; }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        return "You lose! Scissors beats Paper"; }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return "You win! Scissors beats Paper"; }
    else if (humanChoice == "Scissors" && computerChoice == "rock") {
        computerScore += 1;
        return "You lose! Rock beats Scissors"; }
    else {
        return "Tie! you both entered the same";}
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection))
    }
    if (humanScore > computerScore) {
        return console.log("You Won the game! Great job!");
    }
    else if (computerScore > humanScore) {
        return console.log("You Lost the game! Better luck next time!");
    }
    else {
        return console.log("You both Tied the game!");
    }
}
 
playGame();