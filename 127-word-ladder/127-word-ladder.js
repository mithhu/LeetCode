/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!(wordList.includes(endWord))) {
    return 0;
  }
  
  wordList.push(beginWord);
  
  let nei = {};
  
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.substring(0, i) + "*" + word.substring(i + 1);
      if (!(pattern in nei)) {
        nei[pattern] = [];
      }
      nei[pattern].push(word);
    }
  }
  

  let visited = new Set();
  visited.add(beginWord);
  let q = [];
  q.push(beginWord);
  let res = 1;
  
  
  while (q.length > 0) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      const word = q.shift();
      if (word === endWord) return res;
      
      for (let j = 0; j < word.length; j++) {
        let pattern = word.substring(0, j) + "*" + word.substring(j + 1);
        for (let neiWord of nei[pattern]) {
          if (!(visited.has(neiWord))) {
            q.push(neiWord);
            visited.add(neiWord);
          }
        }
      }
      
    }
    
    res += 1;
  }
  
  return 0;
  


  
};