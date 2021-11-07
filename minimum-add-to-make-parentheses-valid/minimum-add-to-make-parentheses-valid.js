const minAddToMakeValid = function(s) {
    let left = 0;
    let right = 0;
    
    for (const char of s) {
        if (char === "(") {
            left++;
        } else {
            left > 0 ? left-- : right++;
        }
    }
    return left + right;
};
