var button = document.getElementsByClassName("btn")[0];
var winner = document.querySelector("h2");

var resultPlayer1 = document.getElementsByClassName("grid-item3")[0];
var resultPlayer2 = document.getElementsByClassName("grid-item4")[0];
var player1_1 = document.getElementsByClassName("player1_1")[0];
var player1_2 = document.getElementsByClassName("player1_2")[0];
var player1_3 = document.getElementsByClassName("player1_3")[0];
var player1_4 = document.getElementsByClassName("player1_4")[0];
var player1_5 = document.getElementsByClassName("player1_5")[0];
var player1_6 = document.getElementsByClassName("player1_6")[0];
var player1_7 = document.getElementsByClassName("player1_7")[0];
var player1_8 = document.getElementsByClassName("player1_8")[0];
var player1_9 = document.getElementsByClassName("player1_9")[0];

var player2_1 = document.getElementsByClassName("player2_1")[0];
var player2_2 = document.getElementsByClassName("player2_2")[0];
var player2_3 = document.getElementsByClassName("player2_3")[0];
var player2_4 = document.getElementsByClassName("player2_4")[0];
var player2_5 = document.getElementsByClassName("player2_5")[0];
var player2_6 = document.getElementsByClassName("player2_6")[0];
var player2_7 = document.getElementsByClassName("player2_7")[0];
var player2_8 = document.getElementsByClassName("player2_8")[0];
var player2_9 = document.getElementsByClassName("player2_9")[0];

var diceColor = "#80142B";
var dotsColor = "white";


button.addEventListener('click', function(){

    winner.textContent = "Rolling..." + "🎲"; 

    for(let i = 0; i<6; i++){     
        setTimeout(() => {                             
            const randomNumber1 = Math.floor(Math.random() * 6) + 1;
            const randomNumber2 = Math.floor(Math.random() * 6) + 1;          

            resetBackgroundColor();
            switchCasePlayer1(randomNumber1);
            switchCasePlayer2(randomNumber2);                   
        }, i*300)                               
    };         

    setTimeout(() => {  
        const number1 = Math.floor(Math.random() * 6) + 1;
        const number2 = Math.floor(Math.random() * 6) + 1;
        
        resetBackgroundColor();
        switchCasePlayer1(number1);    
        switchCasePlayer2(number2);   

        if(number1 > number2) {
            winner.textContent = "Player 1 won! " + "🚩";
        } else if(number1 < number2) {
            winner.textContent = "Player 2 won! " + "🚩";
        } else {
            winner.textContent = "It's a tie!" + "🤝";
        }
    }, 6*300)                     
})

function resetBackgroundColor(){
    player1_1.style.backgroundColor = diceColor;
    player1_2.style.backgroundColor = diceColor;
    player1_3.style.backgroundColor = diceColor;
    player1_4.style.backgroundColor = diceColor;
    player1_5.style.backgroundColor = diceColor;
    player1_6.style.backgroundColor = diceColor;
    player1_7.style.backgroundColor = diceColor;
    player1_8.style.backgroundColor = diceColor;
    player1_9.style.backgroundColor = diceColor;
    player2_1.style.backgroundColor = diceColor;
    player2_2.style.backgroundColor = diceColor;
    player2_3.style.backgroundColor = diceColor;
    player2_4.style.backgroundColor = diceColor;
    player2_5.style.backgroundColor = diceColor;
    player2_6.style.backgroundColor = diceColor;
    player2_7.style.backgroundColor = diceColor;
    player2_8.style.backgroundColor = diceColor;
    player2_9.style.backgroundColor = diceColor;
}

function onePlayer1(){
    player1_5.style.backgroundColor = dotsColor;
}

function onePlayer2(){
    player2_5.style.backgroundColor = dotsColor;
}

function twoPlayer1(){
    player1_3.style.backgroundColor = dotsColor;
    player1_7.style.backgroundColor = dotsColor;
}

function twoPlayer2(){
    player2_3.style.backgroundColor = dotsColor;
    player2_7.style.backgroundColor = dotsColor;
}

function threePlayer1(){
    player1_3.style.backgroundColor = dotsColor;
    player1_5.style.backgroundColor = dotsColor;
    player1_7.style.backgroundColor = dotsColor;
}

function threePlayer2(){
    player2_3.style.backgroundColor = dotsColor;
    player2_5.style.backgroundColor = dotsColor;
    player2_7.style.backgroundColor = dotsColor;
}

function fourPlayer1(){
    player1_1.style.backgroundColor = dotsColor;
    player1_3.style.backgroundColor = dotsColor;
    player1_7.style.backgroundColor = dotsColor;
    player1_9.style.backgroundColor = dotsColor;
}

function fourPlayer2(){
    player2_1.style.backgroundColor = dotsColor;
    player2_3.style.backgroundColor = dotsColor;
    player2_7.style.backgroundColor = dotsColor;
    player2_9.style.backgroundColor = dotsColor;
}

function fivePlayer1(){
    player1_1.style.backgroundColor = dotsColor;
    player1_3.style.backgroundColor = dotsColor;
    player1_5.style.backgroundColor = dotsColor;
    player1_7.style.backgroundColor = dotsColor;
    player1_9.style.backgroundColor = dotsColor;
}

function fivePlayer2(){
    player2_1.style.backgroundColor = dotsColor;
    player2_3.style.backgroundColor = dotsColor;
    player2_5.style.backgroundColor = dotsColor;
    player2_7.style.backgroundColor = dotsColor;
    player2_9.style.backgroundColor = dotsColor;
}

function sixPlayer1(){
    player1_1.style.backgroundColor = dotsColor;
    player1_3.style.backgroundColor = dotsColor;
    player1_4.style.backgroundColor = dotsColor;
    player1_6.style.backgroundColor = dotsColor;
    player1_7.style.backgroundColor = dotsColor;
    player1_9.style.backgroundColor = dotsColor;
}

function sixPlayer2(){
    player2_1.style.backgroundColor = dotsColor;
    player2_3.style.backgroundColor = dotsColor;
    player2_4.style.backgroundColor = dotsColor;
    player2_6.style.backgroundColor = dotsColor;
    player2_7.style.backgroundColor = dotsColor;
    player2_9.style.backgroundColor = dotsColor;
}


function switchCasePlayer1(number1){
    switch(number1){
        case 1: onePlayer1()
                break
        case 2: twoPlayer1()
                break
        case 3: threePlayer1()
                break
        case 4: fourPlayer1()
                break
        case 5: fivePlayer1()
                break
        case 6: sixPlayer1()
                break
    }
}

function switchCasePlayer2(number2){
    switch(number2){
        case 1: onePlayer2()
                break
        case 2: twoPlayer2()
                break
        case 3: threePlayer2()
                break
        case 4: fourPlayer2()
                break
        case 5: fivePlayer2()
                break
        case 6: sixPlayer2()
                break
    }
}