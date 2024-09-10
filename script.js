let humanScore = 0;
let computerScore = 0;


let getComputerChoice = function(computerChoice){
    let choise  = ['','rock','paper','scissors'];
    const rndNumber = Math.floor(Math.random() * 3) + 1

    return choise[rndNumber];
}
    
let getHumanChoise = function (humanChoice){
    let choise = prompt('Choose one : (Rock , Paper , Scissor)');
   let humChoice = choise.toLowerCase();
   return humChoice;

}

let playRound = function (humanChoice,computerChoice){
    
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log("You Lost!, Paper Beats Rock. ")
        computerScore++}
        else if (humanChoice === 'rock' && computerChoice === 'scissors'){
            console.log("You Win!, Rock Beats Scissors. ")
            humanScore++

        } else if (humanChoice === 'paper' && computerChoice === 'rock'){
            console.log("You Win!,Paper Beats Rock. ")
            humanScore++
        
        } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
            console.log("You Lost!, Scissors Beats Paper. ")
            computerScore++
        } else if (humanChoice === 'scissors' && computerChoice ==='rock'){
            console.log("You Lost!, Rock Beats Scissors. ")
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log("You Win!, Scissors Beats Paper. ");
            humanScore++
        } else{
            console.log("Draw, try again!");
        }

        


}
let playGame = function(){

    for(let i = 0 ; i<5; i++){
const humanSelection = getHumanChoise();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);   
 
}

if(humanScore > computerScore){
    console.log("*******************")
    console.log("you've won the game!");
} else if(computerScore> humanScore){
    console.log("*******************")
    console.log("you've lost the game!");
} else {
    console.log("*******************")
    console.log("that's a draw!");
}
}

playGame();


