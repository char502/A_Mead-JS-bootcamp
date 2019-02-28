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

//Promise version
getPuzzle("4").then(
  (puzzle) => {
    console.log(puzzle);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);

// Callback version
// getPuzzle("4", (error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });

getCountryDetails("GB").then(
  (name) => {
    console.log(name);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);

// Callback version
// getCountryDetails("GB", (error, name) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`country name is: ${name}`);
//   }
// });

// Making a HTTP request

// // ==============================================================
// // Country code example
// const countryCode = "GB";

// const countryRequest = new XMLHttpRequest();
// countryRequest.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     console.log(data);
//     // console.log(data[238].name);
//     const countryName = data.find((item) => item.alpha2Code === countryCode);

//     console.log(countryName.name);
//   } else if (e.target.readyState === 4) {
//     console.log("something went wrong");
//   }
// });

// countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
// countryRequest.send();
// ==============================================================
