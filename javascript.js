const rock = document.querySelector('#rock');
rock.onclick = () => console.log("Clicked ROCK");
// set to play game

const paper = document.querySelector('#paper');
paper.onclick = () => console.log("Clicked PAPER");

const scissors = document.querySelector('#scissors');
scissors.onclick = () => console.log("Clicked SCISSORS");



function playerChoice(select) {

    //if button was scissors, select scissors
    //else if paper
    
    // Error if player chooses wrong. 
    if (select == "rock" || select == "paper" || select == "scissors"){
            console.log("You chose: " + select);                        
    }
    else {
        console.log("That is not a choice!");
    }

    return select;               
}


function ChangeColour()
{
    
}
/*
original button colour: rgba(193, 212, 214, 0.84);
on hover colour: rgba(106, 186, 240, 0.84)

*/