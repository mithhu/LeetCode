/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const pre = Array(nums.length).fill();
  
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    pre[i] = prefix;
    prefix *= nums[i];
  }
  const post = Array(nums.length).fill();
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    post[i] = postfix;
    postfix *= nums[i];
  }

  
  const res = Array(nums.length).fill();
  
  for (let i = 0; i < nums.length; i++) {
    res[i] = pre[i] * post[i];
  }

  
  return res;
    
};