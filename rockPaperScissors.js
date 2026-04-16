let humanScore = 0
let computerScore = 0

console.log("Lets play rock, scissors, paper!")
function getComputerChoice() {
    let pick
    let numberChoice = Math.floor(Math.random() * 3)
    if (numberChoice == 0) {
        pick = "Scissors"
        console.log(pick)
    }
    else if (numberChoice == 1) {
        pick = "Paper"
        console.log(pick)
    } 
    else {
        pick = "Rock"
        console.log(pick)
    }
}

function getHumanChoice() {
    pick = prompt("Your turn")
    console.log(pick)
}

getComputerChoice()
getHumanChoice()