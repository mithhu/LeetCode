var maxProduct = function(nums) {
  let res = -Infinity;
  let curMax = 1;
  let curMin = 1;
  
  for (let num of nums) {
    let tempMax = curMax * num;
    curMax = Math.max(num, curMax * num, curMin * num);
    curMin = Math.min(num, tempMax, curMin * num);
    res = Math.max(res, curMax);
  }
  return res;
}
