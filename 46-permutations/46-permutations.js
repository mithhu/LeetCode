/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];
  
  if (nums.length === 1) {
    return [[...nums]];
  }
  
  for (let i = 0; i < nums.length; i++) {
    let n = nums.shift();
    let perms = permute(nums);
    
    for (let perm of perms) {
      perm.push(n);
    }
    
    result.push(...perms);
    nums.push(n);
  }
  
  return result;
    
};