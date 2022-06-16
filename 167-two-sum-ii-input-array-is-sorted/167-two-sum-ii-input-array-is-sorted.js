/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
};
