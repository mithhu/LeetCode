/**
 * @param {number[]} nums
 * @return {number[]}
 */

var countSmaller = function (nums) {
  if (nums.length == 0 || !nums) return nums;

  let inversion = new Array(nums.length).fill(0);
  let map = nums.map((val, index) => {
    return { val: val, index: index };
  });

  var merge = function (arr) {
    if (arr.length == 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = merge(arr.slice(0, mid));
    let right = merge(arr.slice(mid));

    let li = 0,
      ri = 0,
      inversionCount = 0,
      sorted = [];
    // compare numbers from left part to right part
    while (li < left.length) {
      if (right[ri] && left[li].val > right[ri].val) {
        // inversion found
        inversionCount++;
        sorted.push(right[ri++]);
      } else {
        // no inversions for this number (or right is exhausted)
        // update its inversion count up to the current stack
        inversion[left[li].index] += inversionCount;
        sorted.push(left[li++]);
      }
    }

    // deal with left over right values and return
    return [...sorted, ...right.slice(ri)];
  };

  merge(map);
  return inversion;
};