/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
const minDifficulty = (A, D) => {
  if (D > A.length) {
    return -1;
  }
  

  let dp = new Map();
  
  function dfs(idx, d) {
    if (d === 1) {
      return Math.max(...A.slice(idx));
    }
    
    let key = d+"_"+idx;
    if (dp.has(key)) {
      return dp.get(key);
    }
    let max = 0;
    let res = Infinity;
    
    for (let i = idx; i < A.length - d + 1; i++) {
      max = Math.max(max, A[i]);
      res = Math.min(dfs(i + 1, d - 1) + max, res);
    }
    dp.set(d+"_"+idx, res);
    return res;
  }
  
  return dfs(0, D);
};