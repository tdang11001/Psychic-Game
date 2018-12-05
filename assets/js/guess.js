// store 26 letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// number of win
var win = 0;

// number of loss
var loss = 0;

// number of tries
var numberOfTries = 10;
    
// user guess stored in array
var userGuessArray = [];

// global user input variable
var userGuessCharacter;

// computer random character
var computerRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];



var winTarget = document.getElementById("wins");

// document.getElementById('wins').innerHTML = win;
// document.getElementById('losses').innerHTML = win;




$(document).keyup(function(event) {
    userGuessCharacter = event.key;
    console.log(userGuessCharacter);


    userGuessArray.push(userGuessCharacter);
    $("#guessArraySpan").text(userGuessArray, + " , ");
    
   
    if (userGuessCharacter === computerRandomLetter) {
        win += 1;
        $("#winsSpan").text(win);
    }
    else {
        numberOfTries -= 1;
        $("#guessLeftSpan").text(numberOfTries);
    }

    if (numberOfTries == 0) {
        loss += 1;
        alert('Game over. The computer character is ' + computerRandomLetter);
        $("#lossesSpan").text(loss);
        numberOfTries = 10;
        $("#guessLeftSpan").text(numberOfTries);
        userGuessArray = [];

    }

    i



   





}); 







// let lossTarget = document.getElementById("losses");

// let numberOfTriesTarget = document.getElementById("guessLeft");

// winTarget.innerHTML = "Hi";

// let userInput = 




// if ( computerRandomLetter === userGuessArray) {
//     win++;
// }
// else {
//     numberOfTries--;
// }

// if (numberOfTries == 0) {
//     alert("Game over! Computer's letter is " + computerRandomLetter);
//     loss--;
// }

// function resetGame() {
//     numberOfTries = 10;
//     userGuessArray[];
// }

// function 







