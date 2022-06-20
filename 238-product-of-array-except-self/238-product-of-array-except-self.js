/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let prefix = 1;
  let res = Array(nums.length).fill(1);
  
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix; //1 1 2 6
    prefix *= nums[i]; //1 2 6 24
  }
  
  let postfix = 1;
  
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix; //24 12 8 6
    postfix *= nums[i];//4 12 24 24 
  }
  
  return res;
    
};