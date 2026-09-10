const choices = [ "rock", "paper", "scissors" ];

// Keep track of game statistics

const statistics = {
    playerWins: 0,
    computerWins:0,
    ties:0,
    rock: 0,
    paper: 0,
    scissors: 0,
};

//Function To play one round of the game

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    }
   return "computer wins!";
}

//Function for the computer to choose randomly 

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// To connect Java Script with HTML
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const result = document.getElementById("result");
const choicesDisplay = document.getElementById("choices");

const playerscore = document.getElementById("player-score");
const computerscore = document.getElementById("computer-score");
const tiescore = document.getElementById("ties");

//Create a function for playing the game

function playGame(playerChoice) {

    const computerChoice = getComputerChoice();

    const gameResult = playRound(playerChoice, computerChoice);

    statistics[playerChoice]++;

    choicesDisplay.textContent = 
    `You chose ${playerChoice}. computer chose ${computerChoice}.`;

    result.textContent = gameResult;

    if (gameResult === "You win!") {
        statistics.playerWins++;
    } else if (gameResult === "computer wins!") {
        statistics.computerWins++;
    } else {
        statistics.ties++;
    }

    playerscore.textContent = statistics.playerWins;
    computerscore.textContent = statistics.computerWins;
    tiescore.textContent = statistics.ties;
}

// To make the buttons work, we need to add event listeners to them

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

