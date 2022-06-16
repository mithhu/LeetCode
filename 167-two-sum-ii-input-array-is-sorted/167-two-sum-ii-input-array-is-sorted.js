/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (arr, target) => {
  // if (arr === null || arr.length === 0) return arr;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum < target) {
      start += 1;
    } else if (sum > target) {
      end -= 1;
    } else {
      return [start + 1, end + 1]; // return value
    }
  }
};
