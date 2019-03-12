// ======================================================================
// ======================================================================
// Date and time in JS (although easier to use Moment.js)
// ======================================================================
// Putting a date in parentheses changes the starting point for 'now'
// 'now no longer represents the time in which this script runs'
// const now = new Date("January 21 2001 6:25:01");

// Unix Epoch - January 1st 1970 00:00:00 (at midnight)
// the number increases in milliseconds (i.e. 1 second is 1000)
// positive numbers for time after this date
// negative numbers for time before this date
// 0 = this point in time
// 1000 = 1 second from this point in time (1000 milliseconds in a second)
// 6000 = 1 minute in the past (60 secs for a min * 1000)

// const now = new Date("January 21 2001 6:25:01");

// ==== for creating a new note ====
// const now = new Date();
// const timestamp = now.getTime();

// ==== After read the data from local storage and want to do something related to the date ====
// const myDate = new Date(timestamp);
// const year = myDate.getFullYear();
// console.log(year);
// console.log(now.getTime());

// const dateOne = new Date("March 22 2010 11:35:01");
// const timeStampDateOne = dateOne.getTime();
// // gets timestamp
// console.log(timeStampDateOne);

// const dateTwo = new Date("December 4 2013 23:00:01");
// const timeStampDateTwo = dateTwo.getTime();
// // gets timestamp
// console.log(timeStampDateTwo);

// if (timeStampDateOne < timeStampDateTwo) {
//   // const d1 = new Date(timeStampDateOne);
//   console.log(dateOne.toString());
//   // console.log(typeof dateOne);
//   // console.log("timeStampDateOne comes before timeStampDateTwo");
// } else {
//   // const d2 = new Date(timeStampDateTwo);
//   console.log(dateTwo.toString());
//   // console.log("timeStampDateTwo comes after timeStampDateOne");
// }

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of Month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);
