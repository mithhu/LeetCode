/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;
    
    for (log of logs) {
        if (log === "./") {
            continue;
        } else if (log === "../") {
            depth -= 1;
            if (depth < 0) {
                depth = 0;
            }
        } else {
            depth += 1;
        }
    }
    
    return depth
    
};