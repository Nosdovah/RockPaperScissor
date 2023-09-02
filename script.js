//Choosing for player choice based on keydown eventListener

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
        let result = ""
        if( (playerChoice == null || playerChoice == undefined) || (compChoice == null || compChoice == undefined) || (arrChoice.includes(playerChoice) == false) ) {
            return result = "invalid choice"
        }else{
                if(playerChoice == compChoice) {
                    return result = "It's a Tie!"     
                }
                if(playerChoice == "Rock") {
                    //Rock
                    if(compChoice == "Scissors") {
                        return result = `You Win! ${compChoice} beats ${playerChoice}`
                    }else {
                        return result = `You Lose! ${playerChoice} beats ${compChoice}`
                    }
                }else if(playerChoice == "Paper") {
                    //Paper
                    if(compChoice =="Scissors") {
                        return result = `You Lose! ${compChoice} beats ${playerChoice}`
                    }else {
                        return result = `You Win! ${playerChoice} beats ${compChoice}`
                    }
                }else if(playerChoice == "Scissors") {
                    if(compChoice == "Paper") {
                        return result = `You Win! ${playerChoice} beats ${compChoice}`
                    }else {
                        return result = `You Lose! ${compChoice} beats ${playerChoice}`
                    }
                }
        }
        return result;

    }

    function playRound() {
        let arrChoice = ["Rock","Paper","Scissors"]
        const random = Math.floor(Math.random() * arrChoice.length);
        let randdisplay = arrChoice[random]
        
        //Invoke Player choice function here
        //let playerchoice = prompt("Please enter your choice",randdisplay)
        let compchoice = getComputerChoice(arrChoice)

        const result = Result(playerChoice,compchoice,arrChoice)

        return result

    }

    
    //Round of 5
    let rounds = function (rounds) {
        console.log(playRound())
        let counter = 0;
        while(counter < rounds) {
            counter ++;
        }
    }


}))





// let rounds = prompt("How many rounds of RPS do you wanna play ?",1)
