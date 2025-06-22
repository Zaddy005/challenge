
function charFrequency(str) {
  const freq = {};

  str.split("").forEach((word)=>{
    freq[word] = (freq[word] || 0 ) +1;
  });
  return freq;
}

const str = "hello";
charFrequency(str)