/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s[0] === "0") {
    return 0;
  }
  
  let cache = Array(s.length).fill(0);
  cache[0] = 1;
  
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "0") {
      cache[i] = 0;
    } else {
      cache[i] = cache[i - 1];
    }
    
    if (i - 1 >= 0 && (s[i - 1] === "1" || (s[i - 1] === "2" && "0123456".includes(s[i])))) {
      cache[i] += i - 2 >= 0 ? cache[i - 2] : 1;
    }
  }
  
  return cache[cache.length - 1];
};
