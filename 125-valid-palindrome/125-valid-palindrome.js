/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;
  
  while (l < r) {
    while(l < r && !isAlphaNumeric(s[l])) {
      l++;
    }
    while(l < r && !isAlphaNumeric(s[r])) {
      r--;
    }
    
    if( s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  
  return true;
    
};

function isAlphaNumeric(ch) {
  let code = ch.charCodeAt(); //48-58 65 - 90 97 - 122
  
  if (("A".charCodeAt() <= code && "Z".charCodeAt() >= code) ||
      ("a".charCodeAt() <= code && "z".charCodeAt() >= code) ||
      ("0".charCodeAt() <= code && "9".charCodeAt() >= code)) {    
    return true;
  }
  return false;
  
}

// function isAlphaNumeric(num) {
//   if (("A".charCodeAt() <= num.charCodeAt() <= "Z".charCodeAt()) ||
//     ("a".charCodeAt() <= num.charCodeAt() <= "z".charCodeAt()) ||
//     ("0".charCodeAt() <= num.charCodeAt() <= "9".charCodeAt())) {
//     return true;
//   }
//   return false;
// }