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

// // Callback version
// // getPuzzle("4", (error, puzzle) => {
// //   if (error) {
// //     console.log(`Error: ${error}`);
// //   } else {
// //     console.log(puzzle);
// //   }
// // });

getCountryDetails("GB")
  .then((country) => {
    console.log(country.name);
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

//======================================================================

// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getLocation()
//   .then((location) => {
//     return getCountryDetails(location.country);
//     // console.log(`living in ${data.city}, in ${data.region}, ${data.country}`);
//   })
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

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

// =====================================================================

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

// fetch returns a promise
// can wait for this promise to reolve or reject to do something with the data from our request
// do not have to worry about readyState, this promise will only resolve or reject once it is ready for us
// W know the request completed,
// do not have to figure out if it completed just need to know HOW it completed
// fetch("http://puzzle.mead.io/puzzle", {})
//   .then((response) => {
//     // the first then does the parsing and works out if things went well
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("unable to fetch puzzle"); // just like a try block would cause a catch block to run in a try/catch statement
//       // will then make the catch block run as per the below
//     }
//   })
//   .then((data) => {
//     console.log(data.puzzle);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
