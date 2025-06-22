const users = [
    { email: "a@example.com", logins: 2, devices: ["phone"] },
    { email: "b@example.com", logins: 1, devices: ["laptop"] },
    { email: "a@example.com", logins: 3, devices: ["tablet", "phone"] },
    { email: "c@example.com", logins: 4, devices: ["desktop"] },
    { email: "b@example.com", logins: 2, devices: ["laptop", "phone"] }
];

function mergeDuplicateUsers(users){
    return users.
        reduce((acc,user)=>{
            if(!acc[user.email]) acc[user.email] = {logins:0,devices:[]}
            acc[user.email].logins += user.logins;
//            user["devices"].forEach((device)=>{
//                if(!acc[user.email]['devices'].includes(device))
//                    acc[user.email]['devices'].push(device);
//            });

            // super clean way
            acc[user.email].devices = Array.from(new Set([...acc[user.email].devices, ...user.devices]));
            return acc;
        },{})
}

console.log(mergeDuplicateUsers(users));

// 22IM