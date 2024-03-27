const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const scoreCount = document.querySelector('.score-count')
const selection = document.querySelector('.selection')
const btnWrapper = document.querySelector('.btn-wrapper');
const finalScore = document.querySelector('.final-score')

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function updateScore(){
    scoreCount.textContent = `your score is ${playerScore} the computer score is ${computerScore} you have drawn ${draws} times`
    if ((playerScore >= 5 || computerScore >= 5)){
        if(playerScore > computerScore){
            scoreCount.textContent = 'Play Again'
            if (btnWrapper.hasChildNodes() === false){
            let refresh = document.createElement('button')
            refresh.textContent = 'Refresh'
            refresh.classList.add('btn')
            refresh.addEventListener('click', () =>{
                refresh.remove()
                playerScore = 0;
                computerScore = 0;
                draws = 0;
                scoreCount.textContent = `your score is ${playerScore} the computer score is ${computerScore} you have drawn ${draws} times`
                selection.textContent = ''
                finalScore.textContent = ''
            })
            btnWrapper.appendChild(refresh);
            finalScore.textContent = `Final Score - Player:${playerScore} CPU:${computerScore}`
            }
        }
        else if(computerScore > playerScore){
            scoreCount.textContent = 'You Lose'
            if (btnWrapper.hasChildNodes() === false){
                let refresh = document.createElement('button')
                refresh.textContent = 'Play Again'
                refresh.classList.add('btn')
                refresh.addEventListener('click', () =>{
                    refresh.remove()
                    playerScore = 0;
                    computerScore = 0;
                    draws = 0;
                    scoreCount.textContent = `your score is ${playerScore} the computer score is ${computerScore} you have drawn ${draws} times`
                    selection.textContent = ''
                    finalScore.textContent = ''
                })
                btnWrapper.appendChild(refresh);
                finalScore.textContent = `Final Score - Player:${playerScore} CPU:${computerScore}`
                }
        }
        else if(playerScore === computerScore){
            scoreCount.textContent = 'Draw'
            if (btnWrapper.hasChildNodes() === false){
                let refresh = document.createElement('button')
                refresh.textContent = 'Play Again'
                refresh.classList.add('btn')
                refresh.addEventListener('click', () =>{
                refresh.remove()
                playerScore = 0;
                computerScore = 0;
                draws = 0;
                scoreCount.textContent = `your score is ${playerScore} the computer score is ${computerScore} you have drawn ${draws} times`
                selection.textContent = ''
                finalScore.textContent = ''
            })
                btnWrapper.appendChild(refresh);
                finalScore.textContent = `Final Score - Player:${playerScore} CPU:${computerScore}`
                }
        }
    }
    }

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


function playRound(e) {
    let playerChoice = e.target.className
    let computerChoice = getComputerChoice();
    let roundState = ''
    if((playerScore < 5 && computerScore < 5)){
        if(computerChoice === 'rock' && playerChoice === 'paper'){
            playerScore++
            roundState = 'Won';
        }
        else if(computerChoice ==='rock' && playerChoice ==='scissors'){
            computerScore++ // player lose
            roundState = 'Lost';
        }
        else if(computerChoice ==='rock' && playerChoice ==='rock'){
            draws++ // draw
            roundState = 'Drawn';
        }
        else if(computerChoice ==='paper' && playerChoice ==='scissors'){
            playerScore++
            roundState = 'Won';
        }
        else if(computerChoice ==='paper' && playerChoice ==='rock'){
            computerScore++
            roundState = 'Lost';
        }
        else if(computerChoice ==='paper' && playerChoice ==='paper'){
            draws++
            roundState = 'Drawn';
        }
        else if(computerChoice ==='scissors' && playerChoice ==='rock'){
            playerScore++
            roundState = 'Won';
        }
        else if(computerChoice ==='scissors' && playerChoice ==='paper'){
            computerScore++
            roundState = 'Lost';
        }
        else if(computerChoice ==='scissors' && playerChoice ==='scissors'){
            draws++
            roundState = 'Drawn';
        }
    selection.textContent = `You choose ${playerChoice} The computer chose ${computerChoice} the round is ${roundState}`
}

    updateScore();
}

function game(){
rock.addEventListener(('click'), playRound)
paper.addEventListener(('click'), playRound)
scissors.addEventListener(('click'), playRound)
}

game()