const products = [
  { name: "iPhone", category: "tech" },
  { name: "T-shirt", category: "clothing" },
  { name: "MacBook", category: "tech" },
  { name: "Jeans", category: "clothing" },
  { name: "Blender", category: "home" },
];

//function groupByCategory(objs){
//    let categories = new Set();
//    let obj = {};
//    for(let obj of objs){
//        console.log(obj['category']);
//        if(!categories.has(obj['category'])){
//            categories.add(obj['category']);
//        }
//    }
//
//    for(category of categories){
//        obj[category] = [];
//    }
//
//    for(let item of objs){
//        let category = item.category;
//        obj[category].push(item.name);
//    }
//    return obj;
//}

function groupByCategory(objs){
    return objs.reduce((acc,item)=>{
        if(!acc[item.category]){
            acc[item.category] = [];
        }
        acc[item.category].push(item.name);
        return acc;
    },{});
}

let test = [
    { name: "iPhone", category: "tech" },
    { name: "T-shirt", category: "clothing" }
  ]


console.log(groupByCategory(products));
console.log(groupByCategory(test));