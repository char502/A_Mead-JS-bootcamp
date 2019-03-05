// callbacks
// returning the data right away
// this doesn't work in some cases as the data won't always be available to return right away i.e. when returning HTTP requests
// have to wait for the callback function to fire first, then, and only then is access to the data available
// so returning directly from getPuzzle is not going to be possible

// =====================================================================================================
// Why are open and send at the end?
// The reason they are at the end is you don't know how fast the response will occur.  The ability to handle the response needs to be defined before you make the request incase it is almost an instantaneous response.  My understanding from the docs is open could be called before the eventListener without issue but you definitely want send() to be the last call as that will begin the server interaction.
// =====================================================================================================

// using promises
const getPuzzleOld = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("unable to fetch puzzle");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

// =======================================================================

const getPuzzle = (wordCount, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      // console.log(data);
      callback(undefined, data.puzzle);
      // return data; // Won't work - returning from the wrong function
      // return return's from the function are currently in
      // this code is not directly inside getPuzzle
    } else if (e.target.readyState === 4) {
      callback("An Error has Taken place");
    }
  });
  request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};

// ===============================================================
// Get Puzzle using promises
// promise example - replaced by fetch example above
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
// ===============================================================

// get country details using fetch
// const getCountryDetails = (countryCode) => {
//   return fetch(`http://restcountries.eu/rest/v2/all`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("cannot get country data");
//       }
//     })
//     .then((data) => {
//       return data.find((country) => country.alpha2Code === countryCode);
//       // console.log(name.name);
//       // return name.name;
//     });
// };

// const getCountryDetails = (countryCode) => {
//   return fetch(`http://restcountries.eu/rest/v2/all`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("cannot get country data");
//       }
//     })
//     .then((data) => {
//       return data.find((country) => country.alpha2Code === countryCode);
//       // console.log(name.name);
//       // return name.name;
//     });
// };

// ==========================================================================

// Get country details using promises
//   return fetch("http://ipinfo.io/json?token=f1f188b77e5c66")
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("cannot get data");
//       }
//     })
//     .then((data) => {
//       return data;
//     });
// };

// const getLocation = () => {
//   return fetch("http://ipinfo.io/json?token=f1f188b77e5c66")
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("cannot get data");
//       }
//     })
//     .then((data) => {
//       return data;
//     });
// };

// Country code example
// const countryCode = "LB";

const getCountryDetails = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();
  countryRequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const countryData = JSON.parse(e.target.responseText);
      const name = countryData.find((country) => {
        return country.alpha2Code === countryCode;
      });
      callback(undefined, name.name);
    } else if (e.target.readyState === 4) {
      callback("An error has taken place");
    }
  });
  countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
  countryRequest.send();
};

// new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest();
//   countryRequest.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const countryData = JSON.parse(e.target.responseText);
//       const name = countryData.find((country) => {
//         return country.alpha2Code === countryCode;
//       });
//       resolve(name.name);
//     } else if (e.target.readyState === 4) {
//       reject("An error has taken place");
//     }
//   });
//   countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
//   countryRequest.send();
// });

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
