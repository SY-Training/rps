const rock = document.querySelector('#rock');

const paper = document.querySelector('#paper');

const scissors = document.querySelector('#scissors');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>
{
    button.addEventListener('click', () => 
    {

            playRound(button.id)
    });
});

let playerScore = 0;
let compScore = 0;

let roundResult = "Who will win?";
let round = 0;

const pScore = document.querySelector('.playerScore');
pScore.textContent = playerScore;

const aiScore = document.querySelector('.aiScore');
aiScore.textContent = compScore;

const result = document.querySelector('.result');
result.textContent = roundResult;





function playerChoice(select) {

    if (select == "rock" || select == "paper" || select == "scissors"){
            console.log("You chose: " + select);                        
    }
    else {
        console.log("That is not a choice!");
    }

    return select;               
}

// AI randomly selects choice.
function computerChoice(AIChoice) {
    const choices = ["rock", "paper", "scissors"];
    
    AIChoice = choices[Math.floor(Math.random() * choices.length)]

    return AIChoice;
}

function playRound(player) {

    console.log(player)
    let comp = computerChoice();

    const p = "paper";
    const r = "rock";
    const s = "scissors"

    playerChoice(player);

    fiveRounds();

    //compare player and comp

    if (player === p && comp === r){
        playerScore++;
        pScore.textContent = playerScore;
        aiScore.textContent = compScore;
    }

    else if (player === s && comp === p){
        playerScore++;
        pScore.textContent = playerScore;
        aiScore.textContent = compScore;
    }

    else if (player === r && comp === s){
        playerScore++;
        pScore.textContent = playerScore;
        aiScore.textContent = compScore;
    }

    else if (player === comp){
        pScore.textContent = playerScore;
        aiScore.textContent = compScore;
    }

    else {
        compScore++;
        pScore.textContent = playerScore;
        aiScore.textContent = compScore;
    }

} 



function fiveRounds() 
{

    if (round < 5)
    {
        round++;
    }

    else 
    {
         if (playerScore > compScore)
         {
            result.textContent = "YOU WIN!"
         }

         else 
         {
            result.textContent = "YOU LOSE!"
         }

         round = 0;
         playerScore = 0;
         compScore = 0;
    }
}
