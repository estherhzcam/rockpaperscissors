"use strict"
window.addEventListener("DOMContentLoaded", startGame);
let winner = ""
let userchoice = ""
let computerchoice;
let options = ["rock", "paper", "scissors"]
let randomchoice;

function startGame(){
    randomchoice = options[Math.floor(Math.random() * options.length)]
    document.querySelector(".rock").addEventListener("click",getPlayerChoice1);
    document.querySelector(".paper").addEventListener("click",getPlayerChoice2)
    document.querySelector(".scissors").addEventListener("click",getPlayerChoice3)
}

function getPlayerChoice1(){
    userchoice = "rock";
    console.log("users choice is " + userchoice)
    makeRandomComputerchoice()
}
function getPlayerChoice2(){
    userchoice = "paper";
    console.log("users choice is " + userchoice)
    makeRandomComputerchoice()
}
function getPlayerChoice3(){
    userchoice = "scissors";
    console.log("users choice is " + userchoice)
    makeRandomComputerchoice()
}

function makeRandomComputerchoice() {
    computerchoice = randomchoice;
    console.log("computer randomly chose " + computerchoice)
    showAnimations();
}

function showAnimations() {
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    /* animation end code from https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event*/
    const animation = document.querySelector(".shake")
    animation.addEventListener('animationend', showElections)

}

function showElections () {
    if (userchoice == "rock") {
        if (computerchoice == "paper") {
        winner = "computer";
        console.log ("winner is" + winner);
        showRockPaper()
        }
        else if (computerchoice == "scissors") {
        winner = "user";
        console.log ("winner is" + winner)
        showRockScissors()
        }
        else {
        winner = "none";
        console.log ("winner is" + winner)
        showRockRock ()
        }
    }
    else if (userchoice == "paper") {
        if (computerchoice == "rock") {
        winner = "user";
        console.log ("winner is" + winner)
        showPaperRock ()
    }
        else if (computerchoice == "scissors") {
    winner = "computer";
    console.log ("winner is" + winner)
    showPaperScissors ()
    }
    
    else {
    winner = "none";
    console.log ("winner is" + winner)
    showPaperPaper ()
    }
}
    else if (userchoice == "scissors") {
        if (computerchoice == "paper") {
    winner = "user";
    console.log ("winner is" + winner)
    showScissorsPaper ()
    }
       else if (computerchoice == "rock") {
    winner = "computer";
    console.log ("winner is" + winner)
    showScissorsRock ()
    }
        else {
    winner = "none";
    console.log ("winner is" + winner)
    showScissorsScissors ()
    }
}
    determineWinner()
}

function determineWinner() {
    console.log(winner + "wins")
 
    if (winner == "computer"){
        console.log("you lose")
        /* how to make js wait until executing next funtion https://www.codegrepper.com/code-examples/javascript/how+to+wait+for+2+seconds+in+javascript */
        setTimeout(function showLose(){document.querySelector("#lose").classList.remove("hidden")}, 300);
        tryAgain()
      
    }
    else if (winner == "user"){
        console.log("you win");
        setTimeout(function showWin(){document.querySelector("#win").classList.remove("hidden")}, 300);
        tryAgain()
        
    }
    else {
        console.log("this is a tie")
        setTimeout(function showLose(){
        document.querySelector("#draw").classList.remove("hidden") }, 300)
        tryAgain()
        
    }
}

function tryAgain() {
    console.log("retry")
    document.querySelector(".rock").removeEventListener("click",getPlayerChoice1);
    document.querySelector(".paper").removeEventListener("click",getPlayerChoice2)
    document.querySelector(".scissors").removeEventListener("click",getPlayerChoice3)
    document.querySelector("button.rock").classList.add("disabled")
    document.querySelector("button.paper").classList.add("disabled")
    document.querySelector("button.scissors").classList.add("disabled")
    setTimeout(function showTry(){
    document.querySelector(".retry").classList.remove("hidden");
    document.querySelector(".retry").addEventListener("click", resetGame);}, 500)
}

function resetGame (){
    console.log("reseting")
    document.querySelector(".retry").classList.add("hidden");
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.remove("scissors");
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("paper");
    document.querySelector("#player2").classList.remove("scissors");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("button.rock").classList.remove("disabled")
    document.querySelector("button.paper").classList.remove("disabled")
    document.querySelector("button.scissors").classList.remove("disabled")
    startGame()
}


function showRockPaper(){
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("paper"); 
}

function showRockScissors(){
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("scissors");
}

function showRockRock () {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("rock");
}

function showScissorsRock () {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("rock");
}

function showScissorsPaper () {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("paper");
}

function showScissorsScissors () {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("scissors");
}

function showPaperScissors () {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("scissors");
}

function showPaperRock () {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("rock");
}

function showPaperPaper () {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("paper");
}

