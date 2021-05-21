/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getPartition = function (nums, left, right) {
  let i = left;

  for (let j = left; j <= right; j++) {
    if (nums[j] <= nums[right]) {
      swap(nums, i, j);
      i++;
    }
  }
  return i - 1;
};

const quickSort = function (nums, left, right) {
  if(left < right) {
    const partitionIndex = getPartition(nums, left, right);

    quickSort(nums, left, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, right);
  }
};

var findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;
  quickSort(nums, 0, nums.length - 1);
  return nums[indexToFind]
};
