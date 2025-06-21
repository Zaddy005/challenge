function onlyUniqueWords(string){
    let duplicate = [];
    let set = new Set();
    let arrs = string.split(" ");
    arrs.forEach((arr)=>{
        let word = arr.toLowerCase();
        if(!set.has(word)){
            set.add(word);
        }else{
            duplicate.push(word);
        }
    });

    duplicate.forEach((word)=>{
        set.delete(word);
    });

    set = Array.from(set);
    return set.join(" ");
}


onlyUniqueWords("i love love javascript and i love coding");
// ➜ "javascript and coding"
