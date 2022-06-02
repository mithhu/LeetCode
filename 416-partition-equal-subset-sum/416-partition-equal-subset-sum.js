/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((sum, curr) => curr + sum, 0);
  
  if (sum % 2) return false;
  
  let target = sum / 2;
  console.log(target)
  
  let dp = new Set();
  dp.add(0);
  
  for (let num of nums) { 
    let tempSet = new Set([...dp]);
    for (let val of dp) { 
      if (val + num === target) {
        return true;
      } else if (val + num < target) {
        tempSet.add(val + num);        
      }
    }    
    dp = tempSet; 
  }
  
  return dp.has(target); 
};