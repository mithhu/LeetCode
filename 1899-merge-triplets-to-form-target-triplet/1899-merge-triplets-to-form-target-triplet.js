/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
  let res = new Set();
  
  for (let t of triplets) {
    if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
      continue;
    }
    
    for (let i = 0; i < t.length; i++) {
      if (t[i] === target[i]) {
        res.add(i);
      }
    }
  }
  
  return res.size === 3;
    
};