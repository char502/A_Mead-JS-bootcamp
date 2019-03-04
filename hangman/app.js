// HTTP (Hypertext Transfer Protocol)
// A request - what do we want to do
// response protocol - what was actually done

const gameEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("car", 2);
// To initially display on the web page
gameEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

// console.log(game1);
window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeAGuess(guess);
  // To run again every time a guess is made and display changes to the screen
  gameEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

// this code runs before have access to the data so undefined will print before the data prints
// This is an example of asynchronous execution

// =====================================================================

//Promise version
getPuzzle("4")
  .then((puzzle) => {
    console.log(puzzle);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

// getCountryDetails("GB")
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getLocation()
//   .then((data) => {
//     console.log(`living in ${data.city}, in ${data.region}, ${data.country}`);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

getLocation()
  .then((location) => {
    return getCountryDetails(location.country);
    // console.log(`living in ${data.city}, in ${data.region}, ${data.country}`);
  })
  .then((country) => {
    console.log(country.name);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

// getDataPromise(10)
//   .then((data) => {
//     return getDataPromise(data);
//   })
//   .then((data) => {
//     return "this is some test data";
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
