/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    const seen = {};
    let left = 0, longest = 0;
    
    for(let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const previouslySeenChar = seen[currentChar];
        
        if(previouslySeenChar >= left) {
          left = previouslySeenChar + 1;
        }
        
        seen[currentChar] = right;
        
        longest = Math.max(longest, right - left + 1);
    }
    
    return longest;
    
};