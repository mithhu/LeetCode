/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  if (_.sum(gas) < _.sum(cost)) {
    return -1;
  }
  
  let res = 0;
  let total = 0;
  
  for (let idx = 0; idx < gas.length; idx++) {
    total += gas[idx] - cost[idx];
    if (total < 0) {
      res = idx + 1;
      total = 0;
    }
  }
  
  return res;
};