// students score, total possible score
// letter grade
// percentage

let studentsScore = function(studentsScore, totalPossible) {
  let score = (studentsScore / totalPossible) * 100;
  let grade;
  let grammar;

  if (score >= 90) {
    grade = "A";
    grammar = "an";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
    grammar = "a";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
    grammar = "a";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
    grammar = "a";
  } else {
    grade = "F";
    grammar = "an";
  }

  return `You got ${grammar} ${grade} grade! (${score}%)`;
};

let result = studentsScore(18, 20);
console.log(result);
