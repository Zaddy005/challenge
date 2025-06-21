const students = [
    { name: "Alice", level: "freshman", score: 92 },
    { name: "Bob", level: "sophomore", score: 88 },
    { name: "Charlie", level: "freshman", score: 85 },
    { name: "David", level: "sophomore", score: 91 },
    { name: "Eve", level: "freshman", score: 97 }
];

//function leaderBoardByGrade(students){
//    let sortStudents = students
//        .slice()
//        .sort((a,b)=>b.score - a.score)
//        .map((student)=>{
//            return {
//                "name":student.name,
//                "level":student.level
//            }
//        });
//    return sortStudents.reduce((acc,item)=>{
//        if(!acc[item.level]){
//            acc[item.level] = [];
//        }
//        acc[item.level].push(item.name);
//        return acc;
//    },{});
//}

// function leaderBoardByGrade(students){
//     return students
//         .slice()
//         .sort((a,b)=>b.score - a.score)
//         .reduce((acc,student)=>{
//             if(!acc[student.level]) acc[student.level] = [];
//             acc[student.level].push(student.name);
//             return acc;
//         },{})
// }



//leaderBoardByGrade(students)
// console.log(leaderBoardByGrade(students));

// 21RD

// favFruit(people)
        // obj[word] = (obj[word] || 0 ) +1 ;
