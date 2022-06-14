/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;
  
  while (l <= r) {
    let k = l + Math.floor((r - l) / 2);
    console.log({k})
    let hours = 0;
    for (let hour of piles) {
      hours += Math.ceil(hour / k);
    }
    
    if (hours <= h) {
      res = Math.min(res, k);
      r = k - 1; 
    } else {
      l = k + 1;
    }
  }
  
  return res;
  
  
    
};