/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // 1 2 5 -> 11
  // // 5 5 1
  // 5 222
  
  //for -- 0 - amount
   // each coin //4
  
  let res = Array(amount + 1).fill(Infinity);
  res[0] = 0;
  

  for (let i = 0; i < amount + 1; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        res[i] = Math.min(1 + res[i - coin], res[i]);
      }
    }
  }
  
  return res[amount] === Infinity ? -1 : res[amount];
};