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
    console.log(p, s)
    
    let time = (target - p) / s;
    stack.push(time);
    
    if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
      stack.pop();
    } 
  }
  return stack.length;
};