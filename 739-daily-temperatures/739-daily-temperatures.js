/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let res = Array(temperatures.length).fill(0);
  let stack = [];
  
  for (let i = 0; i < temperatures.length; i++) {
    let t = temperatures[i];
    while (stack.length && stack.at(-1)[0] < t) {
      let [sT, sI] = stack.pop();
      res[sI] = i - sI;
    }
    
    stack.push([t, i]);
  }
  
  return res;
};