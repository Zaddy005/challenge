const users = [
    { username: "alice", score: 42 },
    { username: "bob", score: 75 },
    { username: "charlie", score: 64 },
  ];


//function sortUserByScore(users){
//    let result = new Array(users.length);
//    let temp = [];
//
//    users.map((user,idx,arr)=>{
//        temp.push(user['score']);
//        if(temp.length >= users.length){
//            temp.sort((a,b)=>b-a);
//            arr.forEach((user)=>{
//                let idx = temp.indexOf(user.score);
//                result[idx] = user.username;
//            })
//        }
//    });
//    return result;
//}

//function sortUserByScore(users) {
//    return users
//      .slice() // to avoid mutating original array
//      .sort((a, b) => b.score - a.score)
//      .map(user => user.username);
//}

function sortUserByScore(users){
    return users
        .slice()
        .sort((a,b)=>b.score - a.score)
        .map((user)=>user.username);
}

console.log(sortUserByScore(users));

