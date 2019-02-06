// prototypal ingeritance

// Not arrow function for constructor - arrow functions do not bind 'this'
const Hangman = function(word, guessedLetters = [], remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.guessedLetters = [];
  this.remainingGuesses = remainingGuesses;
};

// this prototype gets set to the Hangman prototype in the constructor (behind the scenes) which then makes the prototype available to all object instances created by the constructor
Hangman.prototype.getPuzzle = function() {
  let puzzle = "";
  // let newArr = [];

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  // console.log(Hangman.prototype);
  // console.log(puzzle);
  // puzzle = newArr.join("");
  return puzzle;
};

// Hangman.prototype.makeAGuess = function (character) {
//   if (!this.guessedLetters.includes(character)) {
//     this.guessedLetters.push(character);
//     return (this.remainingGuesses -= 1);
//   }
// };

Hangman.prototype.makeAGuess = function(character) {
  if (this.word.indexOf(character) === -1) {
    this.remainingGuesses -= 1;
    console.log(`You have ${this.remainingGuesses} guesses Remaining!`);
    this.guessedLetters.push(character);
  } else if (
    this.word.indexOf(character) > -1 ||
    !this.guessedLetters.includes(character)
  ) {
    this.guessedLetters.push(character);
    console.log(`You have ${this.remainingGuesses} guesses Remaining!`);
  }
};

// const game1 = new Hangman("Cat", [], 2);
// // const game1 = new Hangman("Gone Home", ["e", "t"], 5);

// console.log(game1);
// // console.log(game2);

// console.log(game1.makeAGuess("c"));
// console.log(game1.getPuzzle());
// console.log(game1.makeAGuess("t"));
// console.log(game1.getPuzzle());
// console.log(game1.makeAGuess("z"));
// console.log(game1.getPuzzle());
// // console.log(game2.getPuzzle());

const game2 = new Hangman("New Jersey", [], 4);

console.log(game2);

console.log(game2.makeAGuess("w"));
console.log(game2.getPuzzle());
