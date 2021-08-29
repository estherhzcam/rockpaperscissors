"use strict"
window.addEventListener("DOMContentLoaded", startGame);
let winner = ""
let userchoice = ""
let computerchoice = ""


function startGame(){
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
    computerchoice = "paper";
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
        }
        else {
        winner = "none";
        console.log ("winner is" + winner)
        }
    }
    else if (userchoice == "paper") {
        if (computerchoice == "rock") {
        winner = "user";
        console.log ("winner is" + winner)
    }
        else if (computerchoice == "scissors") {
    winner = "computer";
    console.log ("winner is" + winner)
    }
    
    else {
    winner = "none";
    console.log ("winner is" + winner)
    }
}
    else if (userchoice == "scissors") {
        if (computerchoice == "paper") {
    winner = "user";
    console.log ("winner is" + winner)
    }
       else if (computerchoice == "rock") {
    winner = "computer";
    console.log ("winner is" + winner)
    }
        else {
    winner = "none";
    console.log ("winner is" + winner)
    }
}
    determineWinner()
}

function determineWinner() {
    console.log(winner + "wins")
    /* if statements */
    if (winner == "computer"){
        console.log("you lose")
        

        /* <div id="player1" class="player"></div>
        <div id="player2" class="player"></div> */
        showLose()
    }
    else if (winner == "user"){
        console.log("you win")
        showWin()
    }
    else {
        console.log("this is a tie")
        showDraw()
    }
}

function showWin(){
    console.log("showWin")
}

function showLose(){
    console.log("showLose");

}

function showDraw(){
    console.log("showDraw")
}

function showRockPaper(){
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock"); 
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("paper"); 

}