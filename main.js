const controlBtns = document.querySelectorAll('.control-btns');
const options = ['rock','paper','scissors'];
const symbolOptions = ['🪨','📰','✂️'];

let computerSymbol = null;
let humanSymbol = null;
let humanOption = null;
let computerOption = null;
var humanWins = 0;
var computerWins = 0;


const computerWinFUnc = () => {

    document.getElementById('winner').innerHTML = 'Computer wins!!';
    computerWins = computerWins+ 1;

}

const humanWinFUnc = () => {

    document.getElementById('winner').innerHTML = 'Human wins!!';
    humanWins= humanWins +1;

}

const computerChoice = () => {   

    let cc = Math.floor(Math.random()*3)
    computerSymbol = symbolOptions[cc];
    return options[cc];     

}

const checkGameStatus = () => {
    if(humanOption && humanOption === computerOption){

        document.getElementById('winner').innerHTML = "It's a Tie!!";

    } else if( humanOption && humanOption === 'rock' && computerOption==='paper'){

        computerWinFUnc();

    } else if( humanOption && humanOption === 'rock' && computerOption==='scissors'){

        humanWinFUnc();

    } else if (humanOption && humanOption === 'paper' && computerOption === 'rock'){

        humanWinFUnc();

    } else if(humanOption && humanOption === 'paper' && computerOption === 'scissors'){

        computerWinFUnc();


    } else if (humanOption && humanOption === 'scissors' && computerOption === 'rock'){

        computerWinFUnc();


    } else if(humanOption && humanOption === 'scissors' && computerOption === 'paper'){

        humanWinFUnc();

    }else{
        return;
    }
}

const handleClick = (e) => {
    humanOption = e.target.classList[0]
    computerOption = computerChoice();
    // 
    if (humanOption === 'rock') document.getElementsByClassName('image')[0].innerHTML = symbolOptions[0];
    if (humanOption === 'paper') document.getElementsByClassName('image')[0].innerHTML = symbolOptions[1];
    if (humanOption === 'scissors') document.getElementsByClassName('image')[0].innerHTML = symbolOptions[2];
    if (computerOption === 'rock') document.getElementsByClassName('image')[1].innerHTML = symbolOptions[0];
    if (computerOption === 'paper') document.getElementsByClassName('image')[1].innerHTML = symbolOptions[1];
    if (computerOption === 'scissors') document.getElementsByClassName('image')[1].innerHTML = symbolOptions[2];
    // 
    document.getElementsByClassName('score')[0].innerHTML = `Human Wins ${humanWins}`;
    document.getElementsByClassName('score')[1].innerHTML = `Computer Wins ${computerWins}`;
    checkGameStatus();    
}

for(const controlBtn of controlBtns){
    controlBtn.addEventListener('click',handleClick);
}



// Game Connstants
const startTheGame = () => {

    const gameBoard = document.getElementsByClassName('gameBoard')[0];
    gameBoard.classList.remove('hidden')
    const gameStart = document.getElementsByClassName('startButton')[0];
    gameStart.classList.add('hidden');
    
}


