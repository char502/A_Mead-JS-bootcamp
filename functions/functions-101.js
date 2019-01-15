let convertFahrenheitToCelsius = function(fah) {
  //   console.log("welcome user");
  let convert = (fah - 32) / 1.8;
  return convert;
};

let conv = convertFahrenheitToCelsius(32);
let convOther = convertFahrenheitToCelsius(68);
console.log(conv);
console.log(convOther);
