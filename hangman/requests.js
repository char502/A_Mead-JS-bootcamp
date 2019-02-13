// callbacks
// returning the data right away
// this doesn't work in some cases as the data won't always be available to return right away i.e. when returning HTTP requests
// have to wait for the callback function to fire first, then, and only then is access to the data available
// so returning directly from getPuzzle is not going to be possible

const getPuzzle = (callback) => {
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
  request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
  request.send();
};

const getPuzzleSync = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3", false);
  request.send();

  // Synchronout request - this won't run until the server returns with the data
  // That's why don't have to reply on an event listener
  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    return data.puzzle;
  } else if (request.readyState === 4) {
    throw new Error("Things did not go well");
  }
};
