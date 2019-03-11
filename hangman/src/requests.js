// using async/await
const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("unable to get puzzle");
  }
};

export { getPuzzle as default };

// ===============================================================

// Country code example
// const countryCode = "LB";

// const getCountryDetails = async (countryCode) => {
//   const response = await fetch(`http://restcountries.eu/rest/v2/all`);

//   if (response.status === 200) {
//     const data = await response.json();
//     return data.find((country) => country.alpha2Code === countryCode);
//   } else {
//     throw new Error("cannot get country data");
//   }
// };

// // // ================================================================

// const getLocation = async () => {
//   const response = await fetch("http://ipinfo.io/json?token=f1f188b77e5c66");

//   if (response.status === 200) {
//     return response.json();
//   } else {
//     throw new Error("cannot get location data");
//   }
// };

// // ================================================================

// const getCurrentCountry = async () => {
//   const location = await getLocation();
//   return getCountryDetails(location.country);
//   // const country = await getCountryDetails(location.country);
//   // return country;
// };
