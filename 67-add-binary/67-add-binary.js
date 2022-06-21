/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = "";
  let carry = 0;
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let digitA = i < a.length ? Number(a[i]) : 0;
    let digitB = i < b.length ? Number(b[i]) : 0;
    
    let total = digitA + digitB + carry;
    let char = String(total % 2);
    res = char + res;
    carry = Math.floor(total / 2);
  }
  
  if (carry) {
    res = "1" + res;
  }
  
  return res;
};