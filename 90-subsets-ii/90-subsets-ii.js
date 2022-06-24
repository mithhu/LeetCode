/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
  let res = [];
  let subset = [];
  nums.sort((a, b) => a -b);
  
  function dfs(idx) {
    res.push([...subset]);
    for (let i = idx; i < nums.length; i++) {
      if (i > idx && nums[i] === nums[i - 1]) {
        continue;
      }
      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
    }
  }
  
  dfs(0);
  return res;
    
};
