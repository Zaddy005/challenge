const fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("apple");

console.log(fruits);

const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(nums.map((num)=>num))];

console.log(uniqueNums);


const set = new Set(["a","b","c"]);

for(let item of set){
    console.log(item);
}

let TrackVisitors = function(arrs){
    let temp = [...new Set(arrs)];
    return {
        "Unique Visitors": temp,
        "Total Unique":temp.length
    }
}

const visits = [
  "kazuha", "izo", "kazuha", "maki", "maki", "gojo", "kazuha", "gojo"
];

console.log(TrackVisitors(visits));
