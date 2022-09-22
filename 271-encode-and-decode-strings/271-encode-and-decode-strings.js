/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  let res = "";
  for (let str of strs) {
    let len = str.length;
    res += `${len}#${str}`;
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
    let str = s.slice(j + 1, j + 1 + len);
    res.push(str);
    i = j + 1 + len;
  }
  return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */