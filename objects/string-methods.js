// let name = "Char";

// console.log(name.length);

// console.log(name.toUpperCase());

// console.log(name.toLowerCase());

// ================================================

// let findCharacters = "lkslkdlskPasswordkslklksd";

// console.log(findCharacters.includes("Password"));

// ====================================================

// let remWhiteSpace = "  Take White Space Out   ";
// console.log(remWhiteSpace.trim());

// =====================================================

// let isValidPassword = function(password) {
//   if (password.length > 8 && !password.includes("password")) {
//     return true;
//   } else {
//     return false;
//   }
// };

let isValidPassword = function(password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$%^&"));
console.log(isValidPassword("asdfpasdfpoijpassword"));
