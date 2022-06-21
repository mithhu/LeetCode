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
  
  let nei = {};
  wordList.push(beginWord);
  
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (!(pattern in nei)) {
        nei[pattern] = []
      }
      nei[pattern].push(word);
    }
  }
  
  let q = [];
  q.push(beginWord);
  let res = 1;
  let visited = new Set();
  
  while (q.length) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      let word = q.shift();
      if (word === endWord) {
        return res;
      }
      for (let i = 0; i < word.length; i++) {
        let pattern = word.slice(0, i) + "*" + word.slice(i + 1);
        for (let n of nei[pattern]) {
          if (!visited.has(n)) {
            q.push(n);
            visited.add(n);
          }
        }
      }
      
    }
    res++;
  }
  
  return 0;
    
};