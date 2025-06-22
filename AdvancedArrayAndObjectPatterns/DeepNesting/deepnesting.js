const orders = [
  {
    user: {name: "Alice"},
    items: [
      {name: "Keyboard", price: 50},
      {name: "Mouse", price: 25}
    ]
  },
  {
    user: {name: "Bob"},
    items: [
      {name: "Monitor", price: 150}
    ]
  },
  {
    user: {name: "Alice"},
    items: [
      {name: "Mouse", price: 25},
      {name: "Webcam", price: 75}
    ]
  }
];

function orderSummaryByUser(orders){
  return orders.reduce((acc,order)=>{
    if(!acc[order.user.name]) acc[order.user.name] = {"total":0,"items":[]};
    order.items.forEach((item)=>{
      acc[order.user.name].total += item.price;
      acc[order.user.name].items = Array.from(new Set([...acc[order.user.name].items,item.name]));
    });
    return acc;
  },{});
}

orderSummaryByUser(orders);
//console.log(orderSummaryByUser(orders));
