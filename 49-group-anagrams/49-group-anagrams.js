/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  
  let map = {};
  
  for (let str of strs) {
    
    const count = Array(26).fill(0);
    for (let s of str) {
      let idx = s.charCodeAt() - "a".charCodeAt();
      count[idx]++;
    }
          
    if (!(count in map)) {
      map[count] = [];
    }
    map[count].push(str);
  }
  
  let res = [];
  
  for (let key in map) {
    res.push(map[key]);
  }
  
  return res;
    
};


