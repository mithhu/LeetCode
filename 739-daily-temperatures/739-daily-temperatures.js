/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let res = Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    let t = temperatures[i];
    while (stack.length && t > stack.at(-1)[0]) {
      let [sT, sIdx] = stack.pop();
      res[sIdx] = i - sIdx;
    }

    stack.push([t, i]);
  }

  return res;
  
}
