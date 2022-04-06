/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const count = _.countBy(nums);
  const freq = Array(nums.length + 1).fill().map(() => []);
  
  for (let key in count) {
    freq[count[key]].push(key)
  }
  
  let res = [];
  
  for (let i = freq.length - 1; i >= 0; i--) {
    for (let n of freq[i]) {
      res.push(n);
      if (res.length === k) return res;
    }
  }
  
    
};