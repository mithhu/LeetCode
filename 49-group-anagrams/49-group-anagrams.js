/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
  let res = {};
  
  for (let s of strs) {
    let count = Array(26).fill(0);
    
    for (let c of s) {
      let idx = c.charCodeAt() - "a".charCodeAt();
      count[idx] += 1; 
    }
    if (!(count in res)) {
      res[count] = [];
    }
    res[count].push(s); 
  }
  
  return Object.values(res);
}