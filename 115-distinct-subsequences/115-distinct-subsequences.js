/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let cache = {};

  function dfs(i, j) {
    if (j === t.length) {
      return 1;
    }
    if (i === s.length) {
      return 0;
    }
    if (`${i}_${j}` in cache) {
      return cache[`${i}_${j}`];
    }

    if (s[i] === t[j]) {
      cache[`${i}_${j}`] = dfs(i + 1, j + 1) + dfs(i + 1, j);
    } else {
	    cache[`${i}_${j}`] = dfs(i + 1, j);
    }
    return cache[`${i}_${j}`];
  }

  return dfs(0, 0);

};
