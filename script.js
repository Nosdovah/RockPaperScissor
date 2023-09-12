let gameplay
let counter = 0;
let playerWin = 0;
let compWin = 0

const resultContent = document.querySelector('.ResultContent')
const finalContent = document.querySelector('.FinalContent')
let buttonDisable = document.getElementsByTagName('button').disabled
buttonDisable = false


const button = document.querySelectorAll('.RPS_Div button')
button.forEach(node => node.addEventListener(('click'), function (element) {

    //Define player choice 
    let playerChoice = element.currentTarget.classList.value

    function getComputerChoice(arrChoice) {
        let compChoice = ""
        if (arrChoice.length <= 1) {
            return
        }
        compChoice = Math.floor(Math.random() * arrChoice.length)
        return arrChoice[compChoice];
    }

    function Result(playerChoice, compChoice, arrChoice) {
        let playerWin
        if ((playerChoice == null || playerChoice == undefined) || (compChoice == null || compChoice == undefined) || (arrChoice.includes(playerChoice) == false)) {
            return
        } else {
            if (playerChoice == compChoice) {
                resultContent.textContent = "It's a Tie"
                compWin--
                return
            }
            if (playerChoice == "Rock") {
                //Rock
                if (compChoice == "Scissors") {
                    resultContent.textContent = `You Win! ${compChoice} beats ${playerChoice}`
                    return playerWin = true
                }
                if (compChoice == "Paper") {
                    resultContent.textContent = `You Lose! ${playerChoice} beats ${compChoice}`
                    return playerWin = false
                }
            } else if (playerChoice == "Paper") {
                //Paper
                if (compChoice == "Scissors") {
                    resultContent.textContent = `You Lose! ${compChoice} beats ${playerChoice}`
                    return playerWin = false
                }
                if (compChoice == "Rock") {
                    resultContent.textContent = `You Win! ${playerChoice} beats ${compChoice}`
                    return playerWin = true
                }
            } else if (playerChoice == "Scissors") {
                if (compChoice == "Paper") {
                    resultContent.textContent = `You Win! ${playerChoice} beats ${compChoice}`
                    return playerWin = true
                }
                if (compChoice == "Rock") {
                    resultContent.textContent = `You Lose! ${compChoice} beats ${playerChoice}`
                    return playerWin = false
                }
            }
        }
        return playerWin

    }

    function playRound(rounds) {
        let arrChoice = ["Rock", "Paper", "Scissors"]

        //Invoke Player choice function here
        let compchoice = getComputerChoice(arrChoice)
        //JANKENPON!
        const result = Result(playerChoice, compchoice, arrChoice)

        if (result) {
            playerWin = playerWin + 1
            counter = counter + 1
        }
        if (!result) {
            compWin = compWin + 1
            counter = counter + 1
        }
        if (counter == rounds) {
            if (playerWin == compWin) {
                finalContent.textContent = "IT'S A TIE!"
            }
            if (playerWin > compWin) {
                finalContent.textContent = "PLAYER WINS"
            }
            if (playerWin < compWin) {
                finalContent.textContent = "AI WINS"
            }

        }

        if (counter == 5) {
            setTimeout(function(){
                window.location.reload();
             }, 500);
        
        }

    }

    playRound(5)

    /*Display the running score, and announce a winner of the game once one player reaches 5 points. */

}))






// let rounds = prompt("How many rounds of RPS do you wanna play ?",1)
