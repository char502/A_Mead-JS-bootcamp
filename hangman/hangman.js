// prototypal ingeritance
// Not arrow function for constructor - arrow functions do not bind 'this'
const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.guessedLetters = [];
  this.remainingGuesses = remainingGuesses;
  this.status = "playing";
};

Hangman.prototype.playerStatus = function() {
  const finished = this.word.every((letter) =>
    this.guessedLetters.includes(letter)
  );
  // ==== ALTERNATIVE wAYS TO SOLVE ====
  // const lettersUnguessed = this.word.filter((letter) => {
  //   return !this.guessedLetters.includes(letter);
  // });

  // const finished = lettersUnguessed.length === 0;
  // let finished = true;

  // this.word.forEach((letter) => {
  //   if (this.guessedLetters.includes(letter)) {
  //   } else {
  //     finished = false;
  //   }
  // });
  // ====================================
  if (this.remainingGuesses === 0) {
    this.status = "failed";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }

  console.log(this.status);
};

// Hangman.prototype.playerStatus = function() {
//   const checkFinished = this.word.every((letter) => {
//     return this.guessedLetters.includes(letter);
//   });
//   // console.log(this.remainingGuesses);
//   if (this.remainingGuesses === 0) {
//     this.status = "failed";
//   }
//   // console.log(checkFinished);
//   if (checkFinished) {
//     this.status = "finished";
//   }
//   console.log(this.status);
// };

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
    // console.log(`You have ${this.remainingGuesses} guess(es) Remaining!`);
  }

  if (this.status !== "playing" || this.remainingGuesses === 0) {
    document.onkeydown = function() {
      return false;
    };
  }
  this.playerStatus();
  // this.statusMessage();
};

// failed - run out of remaining guesses
// finished - all the letters in 'word' exist somewhere in the guessed letters array (have guessed all the letters in the word playing with)
// haven't failed and haven't finished

Hangman.prototype.statusMessage = function() {
  const wordInPlay = this.word.join("");
  console.log(wordInPlay);

  if (this.status === "playing") {
    console.log(`You have ${this.remainingGuesses} guess(es) left`);
  } else if (this.status === "finished") {
    console.log("Great! You guessed the word");
  } else if (this.status === "failed") {
    console.log(`Nice try! The word was ${wordInPlay}`);
  }
};
