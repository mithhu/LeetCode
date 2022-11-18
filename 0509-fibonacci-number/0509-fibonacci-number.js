/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, map = {}) {
    if (n === 0 || n === 1) {
        return n;
    }
    
    if (n in map) {
        return map[n];
    }
    
    map[n] = fib(n - 1) + fib(n - 2);
    return map[n];
    
};