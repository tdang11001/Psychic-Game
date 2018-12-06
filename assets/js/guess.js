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

// grab the p id "win" and stored it in the winTarget variable
var winTarget = document.getElementById("wins");

// what to do when the key is released
$(document).keyup(function(event) {
    userGuessCharacter = event.key; // stored the key pressed in a variable, userGuessCharacter
    // console.log(userGuessCharacter);


    userGuessArray.push(userGuessCharacter); // stored each chracter press inside of the array
    $("#guessArraySpan").text(userGuessArray); // print each stored character array to the page
    
    // what to do when the user guess matches the computer random letter
    if (userGuessCharacter === computerRandomLetter) {
        win += 1; // increment win by 1
        $("#winsSpan").text(win); // display number of win to the page
        alert('You win! The computer random character is ' + computerRandomLetter); // alert the computer random letter
        computerRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; // generate random letter
        $("#guessLeftSpan").text(numberOfTries); // display the number of tries to the page
        userGuessArray = []; // reset to empty array
        numberOfTries = 10; // reset number of tries

    }
    else { // if the guess does not match
        numberOfTries -= 1; // decrement the number of tries by 1
        $("#guessLeftSpan").text(numberOfTries); // display number of tries to the page

        if (numberOfTries == 0) { // if the number of tries equal to 0
            loss += 1; // increment number of loss by 1
            alert('You lose! Game over! The computer random character is ' + computerRandomLetter); // alert the computer random letter
            $("#lossesSpan").text(loss); // display the number of loss to the page
            numberOfTries = 10; // reset number of tries
            $("#guessLeftSpan").text(numberOfTries); // display number of guess left to the page
            userGuessArray = []; // reset the user guess array
    
        }
    }
}); 