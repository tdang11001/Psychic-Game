// store 26 letters of the alphabet
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// number of win
let win = 0;

// number of loss
let loss = 0;

// number of tries
let numberOfTries = 10;
    
// user guess stored in array
let userGuessArray = [];

// global user input variable
let userGuessCharacter;

// computer random character
let computerRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];



let winTarget = document.getElementById("wins");

document.getElementById('wins').innerHTML = win;
document.getElementById('losses').innerHTML = win;


$(document).keyup(function(event) {
    userGuessCharacter = event.key;
   
    if (userGuessCharacter === computerRandomLetter) {
        win += 1;
    }
    else {
        numberOfTries -= 1;
    }

    if (numberOfTries == 0) {
        alert('Game over. The computer character is ' + computerRandomLetter);
    }

   





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







