function wordFrequency(sents){
    let words = sents.toLowerCase().split(" ");
    let obj = {};
    words.forEach((word)=>{
        obj[word] = (obj[word] || 0 ) +1 ;
    });
    return obj;
}


console.log(wordFrequency("I love coding and I love JavaScript"));
// ➜ { i: 2, love: 2, coding: 1, and: 1, javascript: 1 }
