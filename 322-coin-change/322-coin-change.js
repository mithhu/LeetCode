/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let res = Array(amount + 1).fill(Infinity);
  res[0] = 0;
  

  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        res[i] = Math.min(1 + res[i - coin], res[i]);
      }
    }
  }
  
  return res[amount] === Infinity ? -1 : res[amount];
};