/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let l = 0, r = 0, extra = 0;
    
    for (let ch of s) {
        if (ch === "(") {
            l++;
        } else if (ch === ")") {
            if (r < l) {
                r++;
            } else {
                extra++;
            }
        }
    }
    
    return extra + l - r;
    
    
};

// 5 - 5 = 0
// l - r = 

// // ()()

// ((((()