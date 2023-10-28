function getComputerChoice() {
    let computerSelection = Math.floor(Math.random()*3);
    if (computerSelection === 0) {
        return 'rock';
    }
    else if (computerSelection === 1) {
        return 'paper';
    }
    else return 'scissors'
}

function getPlayerChoice() {
    let playerchoice;
    do {
        playerchoice = prompt('Rock Paper scissors! what do you choose?').toLowerCase();
        if (playerchoice === 'rock' || playerchoice === 'paper' || playerchoice === 'scissors'){
            return playerchoice;
        }
    }
    while (playerchoice != 'rock' || 'paper' || 'scissors');
    
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 0; //computer point
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 1; //player point
    } 
    else if (playerSelection === 'rock' && computerSelection === 'rock'){
        return 2; //draw point
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 0; //cpu point
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 1; //player point
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return 2; //draw point
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 0; //cpu point
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 1; //player point
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 2; //draw point
    }
}

function game() {
    let cpu_score = 0;
    let player_score = 0;
    for (let i = 0; i<5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let score = playRound(playerSelection, computerSelection);
        if (score === 0){
            cpu_score++;
        }
        if (score === 1){
            player_score++;
        }
        if (score === 2){
            player_score++;
            cpu_score++;
        }
        console.log(`you chose ${playerSelection} the computer chose ${computerSelection} your score is ${player_score} the computers score is ${cpu_score}`);
    }
    console.log(`GAME OVER! Your score is ${player_score} The computers score is ${cpu_score}`)
    if (cpu_score>player_score){
        console.log('You lost Refresh the page to play again!')
    }
    else if (player_score>cpu_score){
        console.log('You won Refresh the page to play again!')
    }
    else if (player_score === cpu_score){
        console.log('You drew, Refresh to play again!')
    }
}




game();
