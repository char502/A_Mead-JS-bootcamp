const getPuzzle = (wordCount) => {
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

// ===============================================================

// Country code example
// const countryCode = "LB";

const getCountryDetails = (countryCode) => {
  return fetch(`http://restcountries.eu/rest/v2/all`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("cannot get country data");
      }
    })
    .then((data) => {
      return data.find((country) => country.alpha2Code === countryCode);
      // console.log(name.name);
      // return name.name;
    });
};

// ================================================================

const getLocation = () => {
  return fetch(`http://ipinfo.io/json?token=f1f188b77e5c66`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("cannot get data");
      }
    })
    .then((data) => {
      console.log(data);
    });
};
