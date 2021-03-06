// callback example to compare with promises
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("Number must be provided");
    }
  }, 2000);
};

getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log("err");
      } else {
        console.log(data);
      }
    });
  }
});

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
    }, 2000);
  });

// const myPromise = getDataPromise(123);

getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`Promise data: ${data}`);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    return "this is some test data";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// const getDataPromise = (data) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`this is my success data: ${data}`);
//       //   reject("this is the promise error");
//       //   reject("this is the promise error");
//     }, 2000);
//   });

// const myPromise = getDataPromise(123);

// myPromise.then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// myPromise.then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
