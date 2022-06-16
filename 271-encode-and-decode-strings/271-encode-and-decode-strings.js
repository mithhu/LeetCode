/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  let res = "";
  
  for (let s of strs) {
    res += `${s.length}#${s}`
  }
  return res;
    
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  let res = [];
  let i = 0;
  
  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") {
      j++;
    }
    let len = Number(s.slice(i, j));
    res.push(s.slice(j + 1, j + 1 + len));
    i = j + 1 + len;
  }
  
  return res;
    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */