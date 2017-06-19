// Declare global variables to track wins, losses and guesses remaining
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// Create array of possible letters the computer can guess
var possibleLetters = ["A","B","C","D","E","F",
					   "G","H","I","K","L","M","N",
					   "O","P","Q","R","S","T","U",
					   "V","W","X","Y","Z"];
// Using Math.random() to decide on computer's guess
var computerLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length + 1)];
//Create array to hold user guesses
var lettersGuessed = [];

// When key is pressed by user, we store it in the 'guess' array and capitalize it 
// before comparing to computer's choice.
document.onkeyup = function(){
	var guess = event.key.toUpperCase();
	checkInput(guess);
	evaluateGuess(guess);
};

// Simple function to check input and make sure it's a letter
function checkInput(guess){  
	var alphabet = /^[a-zA-Z]+$/;  
 	if (guess.match(alphabet)){  
   		return true;  
  	} else {   
   		alert("You must enter a letter!");   
   		return false; 
   	}  
  };

// This function does all the dirty work. Takes in the parameter (user guess) and runs 
// through a series of conditionals to decide how to proceed through the application.
function evaluateGuess(guess){
	if (guess === computerLetter && guessesLeft > 0 && checkInput){
		wins += 1;
		alert("You guessed correctly! The computer chose " + ' "' + computerLetter + '".\n' +
			  "Click 'OK' and type and letter to play another round!" );
	reset();
	} else if (guess != computerLetter && guessesLeft > 0 && checkInput) {
		guessesLeft -= 1;
		lettersGuessed.push(guess);
	} else {
		alert("You're out of guesses. You lose!");
		losses += 1;
		reset();
	};

// This writes the values of our variables to thier respective HTML elements
	document.getElementById('letters-guessed').innerHTML = lettersGuessed.toString();
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('losses').innerHTML = losses;
	document.getElementById('guesses-left').innerHTML = guessesLeft;
};

// Simple function to reset all of our variables.
function reset(){
	guessesLeft = 9;
    computerLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length + 1)];
    lettersGuessed = [];
};

	
