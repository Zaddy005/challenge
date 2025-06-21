// Write a function that removes duplicates from an array
// const fruits = ["Apple", "banana", "Apple", "orange", "banana", "kiwi"];

// const uniqueFruits = (arrs)=>{
//     let result = [];
//     arrs.forEach((item)=>{
//         if(!result.includes(item.toLowerCase())){
//             result.push(item.toLowerCase());
//         }
//     });
//     return result;
// }


// console.log(uniqueFruits(fruits)); // ["apple", "banana", "orange", "kiwi"]

/*
 Rules:
Do not use any library (like Lodash)
You can use Set, filter, or reduce
Bonus: make it case-insensitive (e.g., treat "Apple" and "apple" as the same)
*/

// uniqueFruits(fruits); // ["apple", "banana", "orange", "kiwi"]


/*
 Requirements:
Return the number with the highest frequency

If there's a tie, return any one of the most frequent numbers

Use objects (or Maps) to count occurrences
*/
const nums = [1, 2, 3, 2, 4, 2, 1, 5, 3];
// let mostFrequent = (nums)=>{
    // const uniques = [...new Set(nums.map((num)=>num))];
    // const obj = {};
    // let result = undefined;
    // uniques.forEach((num)=>{
        // obj[num] = 0;
        // nums.forEach((value)=>{
            // if(value == num){
                // let count = obj[num]
                // count += 1;
                // obj[num] = count;
            // }
        // });
    // });
    // console.log(obj);
    // let max = 0;

    // for (let key of Object.keys(obj)) {
        // if (obj[key] > max) {
            // max = obj[key];
            // result = Number(key); // convert string key to number
        // }
    // }
    // return result;
// }

// let mostFrequent = (nums)=>{
//     let obj = {};
//     let result = null;
//     let max = 0;
//     nums.forEach((num)=>{
//         obj[num] = (obj[num] || 0) +1;
//     });

//     for(key in Object.keys(obj)){
//         if(obj[key] > max){
//             max = obj[key]
//             result = +key;
//         }
//     }

//     return result;
// }

// console.log(mostFrequent(nums)); // ➜ 2

// let capitalizeWords = (string)=>{
//     let words = string.split(" ");
//     let result = words.map((word)=>{
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     // return result;
//     console.log(result.join(" "));
// }

// capitalizeWords("i love javascript");
// ➜ "I Love Javascript"

// capitalizeWords("this is the way");
// ➜ "This Is The Way"

let removeDuplicateWords = (string)=>{
    let words = string.split(" ");
    let colls = new Set();
    let result = [];

    words.forEach((word)=>{
        let tmp = word.toLowerCase()
        if(!colls.has(word.toLowerCase())){
            colls.add(tmp);
            result.push(tmp);
        }
    });

    return result.join(" ");
}


console.log(removeDuplicateWords("I love LOVE JavaScript and i Love Coding")
); // "i love javascript and coding"
