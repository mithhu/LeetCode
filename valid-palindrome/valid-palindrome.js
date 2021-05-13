/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    let left = 0; right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) {
            return false
        }
        
        left++;
        right--;
    }
    
    return true;
};