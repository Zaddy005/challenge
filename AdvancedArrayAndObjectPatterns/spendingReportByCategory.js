const expenses = [
  { category: "Food", amount: 25 },
  { category: "Travel", amount: 100 },
  { category: "Food", amount: 50 },
  { category: "Utilities", amount: 80 },
  { category: "Travel", amount: 20 }
];


function spendingReportByCategory(expenses){
    return expenses
        .slice()
        .reduce((acc,expense)=>{
            acc[expense.category] = (acc[expense.category] || 0) + expense.amount;  
            return acc;
        },{});
}

// spendingReportByCategory(expenses);
console.log(spendingReportByCategory(expenses));