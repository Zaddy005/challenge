//Destructuring Objects:
const user = {
    name:"Zaddy",
    age:20
};
const {name,age} = user;
console.log(name, age);

//Destructuring Arrays:
const arr = [10,20,30];
const [a,b,c] = arr;
console.log(a,b,c);

// Spread Operator:
const nums = [1,2,3];
const copy =  [...nums]; // copy

const obj = {a:1,b:2};
const newobj = {...obj,c:3};
console.log(newobj);

// Rest Parameters:
function sum(...args){
    return args.reduce((a,b)=> a + b,0);
}

console.log(sum(10,20,30,40,50,60,70));


let getFullName = ({first,last})=>{
    console.log(first,last);
}

let fullname = {
    first:"Kazuha",
    last:"izo"
}

getFullName(fullname);

function sumAll(...nums){
    return nums.reduce((a, b) => a + b);
}

console.log(sumAll(10,20,30,40,50,60));

function mergeObjects(obj1, obj2){
    return {...obj1,...obj2}
}

console.log(mergeObjects(fullname,obj));

// lv 2

function outer() {
    let secret = "hello";
    return function inner() {
      console.log("Secret:", secret);
    };
}

const reveal = outer();
reveal(); // remembers secret even after outer() is done

sayHi(); // works
function sayHi() { console.log("Hi"); }

//console.log(z); // undefined
//var z = 10;

//console.log(y); // ❌ error
//let y = 20;


//15CT