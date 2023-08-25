function getComputerChoice(arrChoice) {
    let compChoice = ""
    if(arrChoice.length <= 1) {
        return "choice not valid"
    }

    compChoice = Math.floor(Math.random() * arrChoice.length)
    return arrChoice[compChoice];
}

function Result (playerChoice,compChoice,arrChoice) {
    let result = ""
    if( (playerChoice == null || playerChoice == undefined) || (compChoice == null || compChoice == undefined)) {
        return result = "invalid choice"
    }
    if(arrChoice.includes(playerChoice) == false) {
        return result = "invalid player choice";
    }
    //Rock

    if(playerChoice == arrChoice[0]) {
        if(playerChoice == arrChoice[0] && compChoice == arrChoice[0]) {
            return result = "It's a Tie!"
        }else if(playerChoice == arrChoice[0] && compChoice == arrChoice[1]) {
            return result = `You Lose! ${compChoice} beats ${playerChoice}`
        }else if(playerChoice == arrChoice[0] && compChoice == arrChoice[2]) {
            return result = `You Win! ${playerChoice} beats ${compChoice}`
        }
    }

    if(playerChoice == arrChoice[1]) {
        if(playerChoice == arrChoice[1] && compChoice == arrChoice[1]) {
            return result = "It's a Tie!"
        }else if(playerChoice == arrChoice[1] && compChoice == arrChoice[2]) {
            return result = `You Lose! ${compChoice} beats ${playerChoice}`
        }else if(playerChoice == arrChoice[1] && compChoice == arrChoice[0]) {
            return result = `You Win! ${playerChoice} beats ${compChoice}`
        }
    }

    if(playerChoice == arrChoice[2]) {
        if(playerChoice == arrChoice[2] && compChoice == arrChoice[2]) {
            return result = "It's a Tie!"
        }else if(playerChoice == arrChoice[2] && compChoice == arrChoice[0]) {
            return result = `You Lose! ${compChoice} beats ${playerChoice}`
        }else if(playerChoice == arrChoice[2] && compChoice == arrChoice[1]) {
            return result = `You Win! ${playerChoice} beats ${compChoice}`
        }
    }

    return result;

}

function playRound() {
    let arrChoice = ["Rock","Paper","Scissors"]
    const random = Math.floor(Math.random() * arrChoice.length);
    let randdisplay = arrChoice[random]

    let playerchoice = prompt("Please enter your choice",randdisplay)
    let compchoice = getComputerChoice(arrChoice)

    const result = Result(playerchoice,compchoice,arrChoice)

    return result

}

function game(rounds) {
    for (let index = 0; index < rounds; index++) {
        console.log(playRound());
    }
}

let rounds = prompt("How many rounds of RPS do you wanna play ?",1)

game(rounds)
