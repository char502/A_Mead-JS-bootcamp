// students score, total possible score
// letter grade
// percentage

const studentsScore = function(studentsScore, totalPossible) {
  if (typeof studentsScore !== "number" || typeof totalPossible !== "number") {
    throw Error("studentsScore and totalPossible must be numbers");
  }

  const score = (studentsScore / totalPossible) * 100;
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

try {
  const result = studentsScore(true, 20);
  console.log(result);
} catch (e) {
  console.log(e.message); // e.message allows you to access the throw message as per line 30 above
}
