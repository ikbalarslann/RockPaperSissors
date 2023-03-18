let _playerScore=0;
let _computerScore=0;            

let rock='rock',
    paper='paper',
    scissors='scissors';

let playerSelection=null;
let computerSelection;

function getComputerChoice()
{
    let resoult;
    let i=Math.floor(Math.random()*3) ;
    switch (i)
    {
    case 0:
        resoult=rock;
    break;  
    case 1:
        resoult=paper;
    break;  
    case 2:
        resoult=scissors;
    break;  
    }
    return resoult;
}
function Conditions(a,b)
{
    if (a === b) {
        return 'none of you';
      } else if (
        (a === 'rock' && b === 'scissors') ||
        (a === 'paper' && b === 'rock') ||
        (a === 'scissors' && b === 'paper')
      ) {
        return 'player';
      } else {
        return 'computer';
      }
}
 
function playRound()
{
    let winner =Conditions(playerSelection,computerSelection);
    
if(winner==="player")
{
    _playerScore+=5;
}
else if(winner==="computer")
{
_computerScore+=5;
}
if(_playerScore===15)
    {
          winner = 'player';
          _computerScore=0;
          _playerScore=0;
          return winner +" win the game";
          
    }
    else if(_computerScore===15)
    {
          winner = 'computer';
          _computerScore=0;
          _playerScore=0;
          return winner +" win the game";
    }
return winner +" win the hand";

}
function game()
{
        console.log(`player : ${playerSelection}`);
        console.log(`computer : ${computerSelection}`);
        div.textContent=playRound();
        pcohice.textContent=`player : ${playerSelection}`;
        ccohice.textContent=`computer : ${computerSelection}`;
        pscore.textContent=`player score = ${_playerScore}`;
        cscore.textContent=`computer score = ${_computerScore}`;

        console.log(`player : ${_playerScore}`);
        console.log(`computer : ${_computerScore}`);

        if(_computerScore||_playerScore===15)
        {
            if(_playerScore===15)
            {

            }
            else
            {

            }
        }
        
}




const buttons=document.querySelectorAll('.btn');

const pcohice=document.querySelector('.pchoice');
const ccohice=document.querySelector('.ccohice');

const div = document.querySelector('.resoult');

const pscore=document.querySelector('.pscore');
const cscore=document.querySelector('.cscore');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
       playerSelection = button.textContent ;
       computerSelection=getComputerChoice();
       if(playerSelection!==null)
       {
        game();
        
       }
        
    });
} );

