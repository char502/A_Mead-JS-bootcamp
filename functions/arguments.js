let add = function(a = 5, b, c) {
  return a + b + c;
};

let result = add(undefined, 2, 3);
console.log(result);

// default arguments
let getScoreText = function(name = "Anonymous", score = 0) {
  return `Name: ${name} -  Score: ${score}`;
};

let scoreText = getScoreText("Char");
console.log(scoreText);

// tip calculator

let getTip = function(mealCost, tipPercent = 0.2) {
  let finalRes = mealCost * tipPercent;
  let percentCalc = tipPercent * 100;
  return `A ${percentCalc}% tip on $${mealCost} would be $${finalRes}`;
};

let tipResult = getTip(60);
console.log(tipResult);
