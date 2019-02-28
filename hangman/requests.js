const getPuzzle = (wordCount) => {
  fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
};

// new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       resolve(data.puzzle);
//     } else if (e.target.readyState === 4) {
//       reject("An Error has Taken place");
//     }
//   });
//   request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// });

// ===============================================================

// Country code example
// const countryCode = "LB";

const getCountryDetails = (countryCode) =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();
    countryRequest.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const countryData = JSON.parse(e.target.responseText);
        const name = countryData.find((country) => {
          return country.alpha2Code === countryCode;
        });
        resolve(name.name);
      } else if (e.target.readyState === 4) {
        reject("An error has taken place");
      }
    });
    countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
    countryRequest.send();
  });

// ==================================================================
// SYNCHRONOUS Request
// ==================================================================
// const getPuzzleSync = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "http://puzzle.mead.io/slow-puzzle?wordCount=3", false);
//   request.send();

//   // Synchronous request - this won't run until the server returns with the data
//   // That's why don't have to reply on an event listener
//   if (request.readyState === 4 && request.status === 200) {
//     const data = JSON.parse(request.responseText);
//     return data.puzzle;
//   } else if (request.readyState === 4) {
//     throw new Error("Things did not go well");
//   }
// };
