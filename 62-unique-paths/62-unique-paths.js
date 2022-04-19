/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let row = Array(n).fill(1);
  
  for (let i = 0; i < m - 1; i++) {
    let newR = Array(n).fill(1);
    for (let j = n - 2; j >= 0; j--) {
      newR[j] = newR[j+1] + row[j];
    }
    row = newR;
  }

  
  return row[0];
};