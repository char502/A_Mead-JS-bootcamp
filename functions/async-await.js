// async = function -
// async functions always return a promise
// That promise is resolved with the value that the developer chooses to return from the function
// ====================================================================
// await = operator
// can only be used with async functions
// a bit like using the new operator when instantiating a new object from a constructor
// use await operator with a function that returns a promise
// await throws the error for you if the promise is rejected
// ====================================================================

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
    }, 2000);
  });

const processData = async () => {
  let data = await getDataPromise(2);
  data = await getDataPromise(data);
  data = await getDataPromise(data);

  return data;
  //   throw new Error("Something went wrong!");
  //   return 12;
};

processData()
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
