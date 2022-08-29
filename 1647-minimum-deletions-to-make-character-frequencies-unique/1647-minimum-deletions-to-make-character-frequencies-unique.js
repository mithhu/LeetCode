/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  let count = _.countBy(s);
  let seen = new Set();
  let deleteCount = 0;
  
  let arr = Object.values(count).sort((a, b) => b - a);
  
  
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      while (arr[i] && seen.has(arr[i])) {
        deleteCount++;
        arr[i]--;        
      }
      seen.add(arr[i]);
    } else {
      seen.add(arr[i])
    }
  }
  return deleteCount;
};