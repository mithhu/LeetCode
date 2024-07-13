/**
 * @param {string} s
 * @return {boolean}
 */

function validPalindromeHelper(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

var validPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        if (s[l] !== s[r]) {
            // let skipL = s.slice(l+1, r + 1);
            // let skipR = s.slice(l, r);
            return validPalindromeHelper(s, l + 1, r) || validPalindromeHelper(s, l, r - 1);
            
        } else {
            l++;
            r--;
        }
    }
    
    return true;
    
};
