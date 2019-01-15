// functions create a local scope much like if statements do
// function arguments are bound to that newly created local scope

// Global scope (convertFahrenheitToCelsius), tempOne, tempTwo
//// Local scope (fah, celsius) - the arguments of a function (i.e.fah) are also bound to that local scope - (even though not defined in the curly braces)
////// Local scope (isFreezing)

let randomThing = 123456;

let convertFahrenheitToCelsius = function(fah) {
  //   console.log("welcome user");
  let celsius = (fah - 32) / 1.8;

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
};

let conv = convertFahrenheitToCelsius(32);
let convOther = convertFahrenheitToCelsius(68);
console.log(conv);
console.log(convOther);
