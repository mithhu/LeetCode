/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let cache = Array(s.length + 1).fill(false);
  cache[cache.length - 1] = true;
  
  for (let i = s.length; i >= 0; i--) {
    for (let word of wordDict) {
      if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
        cache[i] = cache[i + word.length];
      }
      if (cache[i]) {
        break;
      }
    }
   }
  
  return cache[0];
};