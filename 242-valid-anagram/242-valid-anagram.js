/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in map)) {
      map[s[i]] = 0;
    }
    map[s[i]]++;
    
    if (!(t[i] in map)) {
      map[t[i]] = 0;
    }
    map[t[i]]--;
  }
  
  for (let key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
    
};