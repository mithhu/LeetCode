/**
 * @param {string} s
 * @return {number}
 */
const obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(str) {
  let value = 0;

  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1 || obj[str[i]] >= obj[str[i + 1]]) {
      value += obj[str[i]];
    } else {
      value -= obj[str[i]];
    } 
  }

  return value;
}
