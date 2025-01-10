

function playGame(){
    var humanChoice = " ";
    var computerChoice = " ";
    let computerScore =  0;
    let humanScore = 0;
    var winner = " ";
    while (humanScore < 5 && computerScore < 5){
        let result = playRound(humanScore, computerScore, humanChoice, computerChoice);
        humanScore = result.humanScore;
        computerScore = result.computerScore;
        
        if (humanScore == 5){
            winner = "You have won!";
            break;
        }
        if (computerScore == 5){
            winner = "Computer has won!";
            break;
        }
    }
    alert(winner);
}
function getComputerChoice(){
    var options = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return options[randNum];

}

function getHumanChoice(){
    let choice;
    
    while (true) {
        choice = window.prompt("Rock, Paper, or Scissors").toLowerCase();
    
        // Validate the input
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice; // Valid choice, exit the loop and return
        }
    
        // Invalid input, prompt again
        alert("Invalid choice. Please try again!");
    }
}

function playRound(humanScore, computerScore, humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    let message = `You chose: ${humanChoice}\nComputer chose: ${computerChoice}\n`;

    if (humanChoice !== computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            message += "You scored a point!\n";
        } else {
            computerScore++;
            message += "Computer scored a point!\n";
        }
    } else {
        message += "It's a tie! No points awarded.\n";
    }

    message += `Current Score - You: ${humanScore}, Computer: ${computerScore}`;
    alert(message);

    return { humanScore, computerScore };
}
console.log(playGame());



