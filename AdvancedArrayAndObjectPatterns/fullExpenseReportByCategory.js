const expenses = [
  { category: "Food", amount: 25, item: "Pizza" },
  { category: "Travel", amount: 100, item: "Taxi" },
  { category: "Food", amount: 50, item: "Burger" },
  { category: "Utilities", amount: 80, item: "Internet" },
  { category: "Travel", amount: 20, item: "Bus" }
];


function expenseReportByCategory(expenses){
    return expenses
        .reduce((acc,expense)=>{
            if(!acc[expense.category]) acc[expense.category] = {total:0,items:[]}
            acc[expense.category].total += expense.amount;
            acc[expense.category]["items"].push(expense.item);
            return acc;
        },{});
}

console.log(expenseReportByCategory(expenses));

/*
result
{
  Food: {
    total: 75,
    items: ["Pizza", "Burger"]
  },
  Travel: {
    total: 120,
    items: ["Taxi", "Bus"]
  },
  Utilities: {
    total: 80,
    items: ["Internet"]
  }
}
*/

