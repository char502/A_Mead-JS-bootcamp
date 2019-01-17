// let myAccount = {
//   name: "Char",
//   expenses: 0,
//   income: 0
// };

// let addExpense = function(account, amount) {
//   account.expenses = account.expenses + amount;
// };

// functions to create:

// addIncome - takes the amount and income

// resetAccount - reset the expenses and the income for an a/c to 0 (rq's which account to change)

// getAccountSummary - includes current account balance, totals in expense income
// (can return the string as the return value for 'getAccountSummary', when want to use it, use console.log)

// Account for (Account) has $900. 1000 in income. $100 in expenses

// addExpense(myAccount, 2.5);
// console.log(myAccount);

let myAccount = {
  name: "Char",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function(account, income) {
  account.income = account.income + income;
  // console.log(account);
};

let resetAccount = function(account) {
  // account.expenses = account.expenses = 0;
  account.income = 0;
  account.expenses = 0;
  // console.log(account);
};

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has £${balance}. £${
    account.income
  } in income. £${account.expenses} in expenses`;
};

// let addIncomeAmount = addIncome(myAccount, 50, 250);
addIncome(myAccount, 250);
console.log(myAccount);
addExpense(myAccount, 50);
console.log(myAccount);
addExpense(myAccount, 100);
console.log(myAccount);
// resetAccount(myAccount);
// console.log(myAccount);
// let c = getAccountSummary(myAccount);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(myAccount);

// let resetAccountVals = resetAccount();
// let seeAccountSummary = getAccountSummary();
