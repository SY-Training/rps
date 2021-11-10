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

let playerScore;
let compScore;

const pScore = document.querySelector('.playerScore');
pScore.textContent = playerScore;

const aiScore = document.querySelector('.aiScore');
aiScore.textContent = compScore;

const result = document.querySelector('.result');




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

    //compare player and comp

    if (player === p && comp === r){
        console.log("You win! You chose " + player + ", which beats " + comp);
        playerScore++;
    }

    else if (player === s && comp === p){
        console.log("You win! You chose " + player + ", which beats " + comp);
        playerScore++;
    }

    else if (player === r && comp === s){
        console.log("You win! You chose " + player + ", which beats " + comp);
        playerScore++;
    }

    else if (player === comp){
        console.log("It's a tie! You both chose " + player);
    }

    else {
        console.log("You lose! You chose " + player + ", which loses to " + comp);
        compScore++;
    }

} 

function game() {

    let round = 0;
        
    while (round < 5){
        console.log("Round: " + round);
        playRound();
        console.log(playerScore + "    " + compScore);
        round++;
    }
             

    if (playerScore > compScore) {
        console.log("You win! Your score was " + playerScore + ", which beats " + compScore);
    }

    if (playerScore < compScore) {
        console.log("You lose! Your score was " + playerScore + ", which loses to " + compScore);
    }
    
    if (playerScore === compScore){
        console.log("It's a tie! You both scored " + playerScore);
    }


}

function ChangeColour()
{
    
}
/*
original button colour: rgba(193, 212, 214, 0.84);
on hover colour: rgba(106, 186, 240, 0.84)

*/