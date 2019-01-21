// let num = 103.947;

// console.log(num.toFixed(2));

// console.log(Math.round(num));

// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// ================================================

// let min = 0;
// let max = 1;

// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

// let randomNum = (Math.random() * 10).toFixed(0);
// console.log(randomNum);

// ================================================

// take a guess (single arg)
// then generate a random number in a given range (1 - 5)
// then figure out if guess was correct - true if correct/false if not correct

let makeGuess = function(guess) {
  min = 1;
  max = 5;

  let result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result === guess;

  //   if (result === guess) {
  //     return `guess is ${guess}, result is ${result}, you guessed correctly :-) `;
  //   } else {
  //     return `guess is ${guess}, result is ${result}, you guessed incorrectly :-( )`;
  //   }
};

console.log(makeGuess(1));
console.log(makeGuess(2));
console.log(makeGuess(3));
console.log(makeGuess(4));
console.log(makeGuess(5));
