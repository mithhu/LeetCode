/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let idx = digits.length - 1;
  
  while (idx >= 0) {
    if (digits[idx] < 9) {
      digits[idx] += 1;
      return digits;
    } else {
      digits[idx] = 0;
      idx--;
    }
  }
  return [1, ...digits];
};

