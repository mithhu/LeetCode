/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  let pair = [];
  
  for (let i = 0; i < position.length; i++) {
    pair.push([position[i], speed[i]]);
  }
  let stack = [];
  pair.sort((a, b) => b[0] - a[0]);
  
  for (let [p, s] of pair) {    
    let time = (target - p) / s;
    
    if (stack.length === 0 || (stack.length && time > stack.at(-1))) {
      stack.push(time);
    }
  }
  return stack.length;
};