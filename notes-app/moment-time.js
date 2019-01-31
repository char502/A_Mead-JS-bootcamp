// Time with moment.js

const birthday = moment();
birthday
  .year(1976)
  .month(9)
  .date(29);
console.log(birthday.format("MMM, D, YYYY"));
// console.log(birthday.toString());
// birthday
//   .subtract(2, "days")
//   .add(9, "months")
//   .subtract(43, "years");
// // console.log(now.toString());
// birthday.format("MMM Do, YYYY");
// console.log(birthday.format("MMM D, YYYY"));

// const now = moment();
// now.subtract(1, "week").subtract(20, "days");
// console.log(now.format("MMMM Do, YYYY"));
// // November 3rd, 2003
// console.log(now.fromNow());
// const nowTimestamp = now.valueOf();
// console.log(moment(nowTimestamp).toString());

// Time from now

// now.add(amount, unit)
// now.minute(1);
// console.log(now.minute());

// with a number  - setting that value
// without a number - getting the value
