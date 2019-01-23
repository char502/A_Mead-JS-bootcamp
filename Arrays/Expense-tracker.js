const account = {
  name: "Char",
  expenses: [],
  income: [],
  addExpense: function(description, amount) {
    return this.expenses.push({
      description: description,
      amount: amount
    });
  },
  addIncome: function(description, income) {
    return this.income.push({
      description: description,
      income: income
    });
  },
  getAccountSummary: function() {
    let sumExpenses = 0;
    let sumIncome = 0;
    let balance = 0;

    this.expenses.forEach(function(item) {
      sumExpenses += item.amount;
    });

    this.income.forEach(function(item) {
      sumIncome += item.income;
    });

    balance = sumIncome - sumExpenses;

    return `${
      this.name
    } has a balance of £${balance}, £${sumIncome} in income and £${sumExpenses} in expenses`;
  }
};

// forEach mutates the current array

account.addExpense("Rent", 950);
account.addExpense("Coffee", 5);
account.addExpense("Water Bill", 150);
account.addExpense("Electricity", 200);
account.addIncome("Salary", 1800);
account.addIncome("Side Project", 500);
// console.log(account);
console.log(account.getAccountSummary());

// let addExpense = function (account, amount) {
//     account.expenses = account.expenses + amount;
// };

// [expenseDescription, amount] - ====== an array of objects =======
// addExpense - 2 args, description, amount - add a new object onto the expenses array

// getAccountSummary - total up all expenses MESSAGE==== Char has £amount in expenses

// use forEach to calcualte total expenses in array
