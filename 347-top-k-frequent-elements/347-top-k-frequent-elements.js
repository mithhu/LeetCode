/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let count = {};
  for (let num of nums) {
    if (!(num in count)) {
      count[num] = 0; 
    }
    count[num]++;
  }
  
  let freq = Array(nums.length + 1).fill().map(() => []);
  for (let key in count) {
    freq[count[key]].push(key);
  }
  let res = [];
  for (let i = freq.length - 1; i >= 0; i--) {
    for (let num of freq[i]) {
      res.push(num);
      if (res.length === k) {
        return res;
      }
    }
  }
    
};