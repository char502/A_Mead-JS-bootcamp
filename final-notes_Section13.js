// The rest parameter

// const calculateAverage = (thing, ...numbers) => {
//   let sum = 0;
//   numbers.forEach((num) => (sum += num));
//   const average = sum / numbers.length;
//   return `The average ${thing} is ${average}`;
// };

// console.log(calculateAverage("grade", 0, 100, 88, 64));

const printTeam = (name, coach, ...players) => {
  console.log(`Team: ${name}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
  // return `the team is ${name}. the coach is ${coach} and the players are ${players}`;
};

printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry");
