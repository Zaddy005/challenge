const students = [
    { name: "Alice Johnson", grade: 87 },
    { name: "Bob Smith", grade: 92 },
    { name: "Charlie Rose", grade: 78 },
  ];

function sortUserByGrade(users){
    return users
        .slice()
        .sort((a,b)=>b.grade - a.grade)
        .map((user)=>user.name.split(" ")[0].toLowerCase());
}

console.log(sortUserByGrade(students));