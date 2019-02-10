const gameEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Cat", 2);
const statusMessage = document.querySelector("status-message");
// To initially display on the web page
gameEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.remainingGuesses;
statusMessage.textContent = game1.statusMessage();

console.log(game1);
window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeAGuess(guess);
  // To run again every time a guess is made and display changes to the screen
  gameEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.remainingGuesses;
  statusMessage.textContent = game1.statusMessage();
  console.log(statusMessage);
});

// const wordToGuess = document.createElement("span");
// wordToGuess.textContent = game1.getPuzzle();
// document.querySelector("#puzzle").appendChild(wordToGuess);

// const remainingGuesses = document.createElement("p");
// remainingGuesses.textContent = game1.remainingGuesses;
// document.querySelector("#guesses").appendChild(remainingGuesses);
