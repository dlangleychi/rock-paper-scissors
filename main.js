
const choices = ["Rock", "Paper", "Scissors"];

const formatChoice = (choice) => choice.charAt(0).toUpperCase() + choice.substr(1).toLowerCase();

const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
    playerSelection = formatChoice(playerSelection);
    computerSelection = formatChoice(computerSelection);
    
    if (
        ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) ||
        ((playerSelection === 'Paper') && (computerSelection === 'Rock')) ||
        ((playerSelection === 'Scissors') && (computerSelection === 'Paper'))
    ) return `You Win! ${playerSelection} beats ${computerSelection}`;

    else if (
        ((playerSelection === 'Rock') && (computerSelection === 'Paper')) ||
        ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) ||
        ((playerSelection === 'Scissors') && (computerSelection === 'Rock'))
    ) return `You Lose! ${computerSelection} beats ${playerSelection}`;

    else return `You Tie! ${computerSelection} ties ${playerSelection}`;
};

const playGame = () => {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Make your choice: ');
        const computerSelection = getComputerChoice();
        const output = playRound(playerSelection, computerSelection);

        if (output.includes('Win')) playerWins++;
        else if (output.includes('Lose')) computerWins++;
        console.log(output);
    }

    if (playerWins > computerWins) console.log(`Player Wins. Player: ${playerWins} Computer: ${computerWins}`);
    else if (playerWins < computerWins) console.log(`Computer Wins. Player: ${playerWins} Computer: ${computerWins}`);
    else console.log(`Tie. Player: ${playerWins} Computer: ${computerWins}`);
};