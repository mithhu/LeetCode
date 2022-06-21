/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let arr = Array(26).fill(0);
  
  for (let ch of magazine) {
    let idx = ch.charCodeAt() - "a".charCodeAt();
    arr[idx]++;
  }
  
  for (let ch of ransomNote) {
    let idx = ch.charCodeAt() - "a".charCodeAt();
    arr[idx]--;
    if (arr[idx] < 0) {
      return false;
    }
  }
  
  return true;
    
};