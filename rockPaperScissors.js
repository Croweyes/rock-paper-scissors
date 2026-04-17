let humanScore = 0
let computerScore = 0
const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

console.log("Lets play rock, scissors, paper!")

function getComputerChoice() {
    let pick
    let numberChoice = Math.floor(Math.random() * 3)
    if (numberChoice == 0) {
        pick = "scissors"
        console.log(pick)
    }
    else if (numberChoice == 1) {
        pick = "paper"
        console.log(pick)
    } 
    else {
        pick = "rock"
        console.log(pick)
    }
}

function getHumanChoice() {
    pick = prompt("Your turn")
    console.log(pick)
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice.toLowerCase())

    if (humanChoice == "rock") {
        humanChoice = "B"
        if (computerChoice == "scissors") {
            computerChoice = "C"
        }
        else {
            computerChoice = "A"
        }
    }

    else if (humanChoice == "scissors") {
        humanChoice = "B"
        if (computerChoice == "paper") {
            computerChoice = "C"
        }
        else {
            computerChoice = "A"
        }
    }

    else {
        humanChoice = "B"
        if (computerChoice == "rock") {
            computerChoice = "C"
        }
        else {
            computerChoice = "A"
        }
    }

    if (humanChoice > computerChoice) {
        humanScore += 1
    }

    else if (computerChoice > humanChoice) {
        computerScore += 1
    }
    else {
        console.log("Tie")
    }
}

getComputerChoice()
getHumanChoice()
playRound()
console.log("You: " + humanScore)
console.log("Computer: " + computerScore)