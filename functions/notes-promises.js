// callback example to compare with promises
const getDataCallback = (callback) => {
  setTimeout(() => {
    // callback(undefined, "this is the callback data!"); // on success
    callback("This is my callback error", undefined);
    // The order of the arguments determines whether things went well or not
  }, 2000);
};

// promises - Don't have to know what we're going to do with the code before we start the process of fetching the information
// Callbacks, Have to define callback that uses the data before can fetch the data (because have to call the callback ('getDataCallback') with it)
getDataCallback((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Promise
// The constructor function for promise takes an argument - which is a function
// this gets called with two arguments (resolve and reject) which are functions themselves
const getDataPromise = (data) =>
  new Promise((resolve, reject) => {
    // resolve and rejects are both functions themselves
    setTimeout(() => {
      resolve(`this is my success data: ${data}`);
      //   reject("this is the promise error");
      //   reject("this is the promise error");
    }, 2000);
  });

const myPromise = getDataPromise(123);

// what to do when have the information
// then function gets called when the promise resolves i.e. when things went well
// get access to the data via the first argument
// attach then to access the value coming back from the promise

//=================================================================
// With promises it's impossible to run more than one each of these functions
// And, it's only ever going to run once (cannot resolve once or reject once or resolve and then reject etc)
// can run one, one time, with a single value then everything else ig going to be ignored
//=================================================================
// If want to pass back multiple pieces of information just put all of that information on an object and resolve or reject the object instead
//=================================================================
// Don't have to know what we're going to do with the code (i.e. as per the below) before we start the process of fetching the information
// Once the promise starts it's process we do not need to attach 'then' to start waiting
// adding the reject arg above would reject just the same, would just do nothing with it if the below were not included
myPromise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

// Now waiting on a single promise to resolve or reject
// if run this twice, are not requesting the data twice, are just doing two different things with the same information
myPromise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);
