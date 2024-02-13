
const CHECK_MILLISECONDS = 1000;
const WINS_FOR_VICTORY = 5;

const choices = ["Rock", "Paper", "Scissors"];

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const textOutput = document.querySelector('.text-output');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const formatChoice = (choice) => choice.charAt(0).toUpperCase() + choice.substr(1).toLowerCase();

const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
    playerSelection = formatChoice(playerSelection);
    computerSelection = formatChoice(computerSelection);
    
    if (
        ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) ||
        ((playerSelection === 'Paper') && (computerSelection === 'Rock')) ||
        ((playerSelection === 'Scissors') && (computerSelection === 'Paper'))
    ) output = `You Win! ${playerSelection} beats ${computerSelection}`;

    else if (
        ((playerSelection === 'Rock') && (computerSelection === 'Paper')) ||
        ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) ||
        ((playerSelection === 'Scissors') && (computerSelection === 'Rock'))
    ) output = `You Lose! ${computerSelection} beats ${playerSelection}`;

    else output = `You Tie! ${computerSelection} ties ${playerSelection}`;
    const p = document.createElement('p');
    p.textContent = output;
    textOutput.appendChild(p);
    playGame(output)
};

const playGame = (output) => {
    let playerWins = +playerScore.textContent;
    let computerWins = +computerScore.textContent;

    if ((playerWins === 0) && (computerWins === 0)) {
        while (textOutput.childElementCount > 2) {
            textOutput.removeChild(textOutput.firstChild);
        }

    } 

    if (output.includes('Win')) playerWins++;
    else if (output.includes('Lose')) computerWins++;
    

    if (Math.max(playerWins, computerWins) >= WINS_FOR_VICTORY) {
        result = document.createElement('p');
        if (playerWins > computerWins) result.textContent = `Player Wins. Player: ${playerWins} Computer: ${computerWins}`;
        else result.textContent = `Computer Wins. Player: ${playerWins} Computer: ${computerWins}`;
        textOutput.appendChild(result);
        playerScore.textContent = '0';
        computerScore.textContent = '0';
    }
    else {
        playerScore.textContent = playerWins.toString();
        computerScore.textContent = computerWins.toString();
    }
    const promptMove = document.createElement('p');
    promptMove.textContent += 'Make your move.';
    textOutput.appendChild(promptMove);
};

rockButton.addEventListener('click', () => playRound(choices[0], getComputerChoice()));
paperButton.addEventListener('click', () => playRound(choices[1], getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound(choices[2], getComputerChoice()));
