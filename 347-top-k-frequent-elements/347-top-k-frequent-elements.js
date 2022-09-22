/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let maxFreq = 0; 
  
  const count = {};
  for (let num of nums) {
    if (!(num in count)) {
      count[num] = 0;
    }
    count[num]++;
    if (count[num] > maxFreq) {
      maxFreq = count[num];  
    }
  }
  
  const freqIdx = Array(maxFreq + 1).fill().map(() => []);
  
  for (let key in count) {
    freqIdx[count[key]].push(key);
  }
  
  const res = [];
  
  for (let i = freqIdx.length - 1; i >= 0; i--) {
    freqIdx[i].forEach((key) => res.push(key));
    if (res.length === k) {
      return res;
    }
  }
};