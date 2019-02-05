// prototypal ingeritance

// Not arrow function for constructor - arrow functions do not bind 'this'
const Hangman = function(word, guessedLetters = [], remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.guessedLetters = guessedLetters;
  this.remainingGuesses = remainingGuesses;
};

// this prototype gets set to the Hangman prototype in the constructor (behind the scenes) which then makes the prototype available to all object instances created by the constructor
Hangman.prototype.getPuzzle = function() {
  let puzzle = "";
  // let newArr = [];

  this.word.forEach((letter) => {
    if (this.guessedLetters.indexOf(letter) !== -1 || letter === " ") {
      return (puzzle += letter);
    } else {
      return (puzzle += "*");
    }
  });

  console.log(Hangman.prototype);
  // console.log(puzzle);
  // puzzle = newArr.join("");
  return puzzle;
};

const game1 = new Hangman("Baby Shark gone home", ["b", "k", "h", "o"], 3);
// const game1 = new Hangman("Gone Home", ["e", "t"], 5);
const game2 = new Hangman("magazine", 0, 8);

// console.log(game1);
// console.log(game2);

console.log(game1.getPuzzle());
// console.log(game2.getPuzzle());
