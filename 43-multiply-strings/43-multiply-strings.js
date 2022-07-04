/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  
  let res = Array(num1.length + num2.length).fill(0);
  
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  
  for (let i1 = 0; i1 < num1.length; i1++) {
    for (let i2 = 0; i2 < num2.length; i2++) {
      let digit = Number(num1[i1]) * Number(num2[i2]);
      res[i1 + i2] += digit;
      res[i1 + i2 + 1] += Math.floor(res[i1 + i2] / 10);
      res[i1 + i2] = res[i1 + i2] % 10;
    }
  }
  
  let begin = 0;
  res = res.reverse();
  
  while (begin < res.length && res[begin] === 0) {
    begin++;
  }
  
  return res.slice(begin).join("");
};