let humanScore = 0
let computerScore = 0

 
console.log("Lets play rock, scissors, paper!")
let computerChoice
let humanChoice 
playGame()
/*playRound(humanChoice, computerChoice)
console.log("Your score: " + humanScore)
console.log("Computer's score: " + computerScore)*/

function getComputerChoice() {
    let pick
    let numberChoice = Math.floor(Math.random() * 3)
    if (numberChoice == 0) {
        pick = "scissors"
        console.log("Computer: " + pick)
    }
    else if (numberChoice == 1) {
        pick = "paper"
        console.log("Computer: " + pick)
    } 
    else {
        pick = "rock"
        console.log("Computer: " + pick)
    }
    return pick
}

function getHumanChoice() {
    let pick

    pick = prompt("Your turn")
    pick = pick.toLowerCase()
    console.log("You: " + pick)
    return pick
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie")
        return
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1
            console.log("You win! " + humanChoice + " beats " + computerChoice + "!")
        }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!")
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!")
    }
    else {
        computerScore += 1
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "!")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1) + "!")
        computerChoice = getComputerChoice()
        humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
        console.log("Your score: " + humanScore)
        console.log("Computer's score: " + computerScore)
    }
    
    if (humanScore > computerScore) {
        console.log("Game over. Congratulations! You won!")
    }
    else if (humanScore === computerScore) {
        console.log("Game over. It's a tie!")
    }
    else {
        console.log("Game over. Better luck next time")
    }
}


