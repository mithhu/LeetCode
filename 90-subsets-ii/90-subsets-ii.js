/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
  let res = [];
  let subset = [];
  nums.sort((a, b) => a - b);
  function dfs(i) {
    if (i >= nums.length) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1);
    subset.pop();
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    dfs(i + 1);
  } 
  
  dfs(0);
  return res;
    
};
