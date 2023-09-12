//Choosing for player choice based on keydown eventListener

let gameplay 
let counter = 0;
let playerWin = 0;
let compWin = 0

const button = document.querySelectorAll('.RPS_Div button')
button.forEach(node => node.addEventListener(('click'), function(element) {
    
    //Define player choice 
    let playerChoice = (element.target.classList.value)
    
    function getComputerChoice(arrChoice) {
        let compChoice = ""
        if(arrChoice.length <= 1) {
            return "choice not valid"
        }
        compChoice = Math.floor(Math.random() * arrChoice.length)
        return arrChoice[compChoice];
    }

    function Result (playerChoice,compChoice,arrChoice) {
        let playerWin 
        if( (playerChoice == null || playerChoice == undefined) || (compChoice == null || compChoice == undefined) || (arrChoice.includes(playerChoice) == false) ) {
            console.log("invalid choice")
            return
        }else{
                if(playerChoice == compChoice) {
                    console.log("It's a Tie!")
                    compWin--
                    return 
                }
                if(playerChoice == "Rock") {
                    //Rock
                    if(compChoice == "Scissors") {
                        console.log(`You Win! ${compChoice} beats ${playerChoice}`)
                        return playerWin = true
                    }
                    if(compChoice == "Paper"){
                        console.log(`You Lose! ${playerChoice} beats ${compChoice}`)
                        return playerWin = false
                    }
                }else if(playerChoice == "Paper") {
                    //Paper
                    if(compChoice =="Scissors") {
                        console.log(`You Lose! ${compChoice} beats ${playerChoice}`)
                        return playerWin = false
                    }
                    if(compChoice == "Rock"){
                        console.log(`You Win! ${playerChoice} beats ${compChoice}`)
                        return playerWin = true
                    }
                }else if(playerChoice == "Scissors") {
                    if(compChoice == "Paper") {
                        console.log(`You Win! ${playerChoice} beats ${compChoice}`)
                        return playerWin = true
                    }
                    if(compChoice == "Rock"){
                        console.log(`You Lose! ${compChoice} beats ${playerChoice}`)
                        return playerWin = false
                    }
                }
        }
        return playerWin

    }

    function playRound(rounds) {
        let arrChoice = ["Rock","Paper","Scissors"]

        //Invoke Player choice function here
        let compchoice = getComputerChoice(arrChoice)
        //JANKENPON!
        const result = Result(playerChoice,compchoice,arrChoice)

        if(result) {
            playerWin = playerWin + 1
            counter = counter + 1
        }
        if(!result) {
            compWin = compWin + 1
            counter = counter + 1
        }
        if(counter == rounds) {
            if(playerWin == compWin) {
                window.alert("IT'S A TIE!")
            }
            if(playerWin > compWin) {
                window.alert("PLAYER WINS")
            }
            if(playerWin < compWin) {
                window.alert("AI WINS")
            }

        }

    }

playRound(5)

    /*Display the running score, and announce a winner of the game once one player reaches 5 points. */
  
}))
 





// let rounds = prompt("How many rounds of RPS do you wanna play ?",1)
