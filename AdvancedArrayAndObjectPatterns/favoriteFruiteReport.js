
const people = [
  { name: "Aki", favorite: "Apple" },
  { name: "Bo", favorite: "Banana" },
  { name: "Chi", favorite: "Apple" },
  { name: "Dee", favorite: "Orange" },
  { name: "Eva", favorite: "Banana" },
  { name: "Finn", favorite: "Banana" }
];


function favFruit(people){
    let count = people.slice()
    .reduce((acc,person)=>{
        acc[person.favorite] = (acc[person.favorite] || 0)+1;
        return acc;
    },{});

    let sorted = Object.entries(count)
    .sort((a,b)=>b[1] - a[1])
    .map((entry)=>entry[0]);

    return {
        count,
        sorted
    }
}

console.log(favFruit(people));