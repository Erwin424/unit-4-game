
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
var winTimes = 0;

var loseTimes = 0;

var guessesToGo = 10;

var guessArray = [];

// Create Variables that determine which option was chosen from the array by computer
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Create Document that holds the function of keyboard event 
document.onkeyup = function(event) {

  // Create Variables that determine which key was pressed by user
  var userGuess = event.key;

  // **Create Conditional Statement that determine the outcome of the matching
  if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

    if (userGuess === computerGuess) {
      //Win
      winTimes++;
      guessesToGo = 10; 
      guessArray = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    } else if (guessesToGo === 0) {
      //Lose
      loseTimes++;
      guessesToGo = 10; 
      guessArray = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    } else {
      // Guess wrong
      guessesToGo--;
      guessArray.push(userGuess);
    }
    
  }  

  // *Create Variables that display(print) of guesses and matching results
  document.getElementById("win").innerHTML = winTimes;
  document.getElementById("lose").innerHTML = loseTimes;
  document.getElementById("left").innerHTML = guessesToGo;
  document.getElementById("record").innerHTML = guessArray;

}