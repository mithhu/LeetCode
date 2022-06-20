/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
  let res = {};
  
  for (let s of strs)  {
    let count = Array(26).fill(0);
    for (let ch of s) {
      let idx = ch.charCodeAt() - "a".charCodeAt();
      count[idx]++;
    }
    
    if (!(count in res)) {
      res[count] = [];
    }
    res[count].push(s);
  }
  
  return Object.values(res);
  
}