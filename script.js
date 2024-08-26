let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random() * 3)
    return options[randIdx];
}

const drawGame = () =>{
    console.log("It is a draw.Play again")
    msg.innerText = "It is a draw.Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++; 
        userScorePara.innerText = userScore;
        console.log("You Win!")
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";


    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose.")
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ",compChoice);


    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin= compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false:true;
         }
         else{
            userWin = compChoice ==="rock" ? false:true;
         }
        showWinner(userWin ,userChoice ,compChoice);
    }

}


choices.forEach((choice) =>{
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () =>{
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})