// prototypal ingeritance
// Not arrow function for constructor - arrow functions do not bind 'this'
const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.guessedLetters = [];
  this.remainingGuesses = remainingGuesses;
  this.status = "playing";
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

  return puzzle;
};

Hangman.prototype.makeAGuess = function(guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(guess);
    // console.log(`You have ${this.remainingGuesses} guesses Remaining!`);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
    console.log(`You have ${this.remainingGuesses} guess(es) Remaining!`);
  }
};

Hangman.prototype.playerStatus = function() {
  if (this.remainingGuesses === 0) {
    this.status = "failed";
  }

  if (this.remainingGuesses !== 0) {
    this.status = "finished";
  }

  // if () {
  //   this.status = 'playing'
  // }
};

// failed - run out of remaining guesses
// finished - all the letters in 'word' exist somewhere in the guessed letters array (have guessed all the letters in the word playing with)
// haven't failed and haven't finished
