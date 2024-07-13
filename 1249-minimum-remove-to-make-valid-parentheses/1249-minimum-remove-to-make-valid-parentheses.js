/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let l = 0;
    let r = 0;
    
    const res = s.split("");
    
    for (let i = 0; i < res.length; i++) {
        const ch = res[i];
        if (ch === "(") {
            l++;
        } else if (ch === ")") {
            if (l > r) {
                r++;
            } else {
                res[i] = "";
            }
        }
    }
    
    if (l === r) {
        return res.join("");
    }
    
    let i = res.length - 1;
    while (i >= 0 && l > r) {
        if (res[i] === "(") {
            res[i] = "";
            l--;
        }
        i--;
    }
    
    return res.join("")
    
};