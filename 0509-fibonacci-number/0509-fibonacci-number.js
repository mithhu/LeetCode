/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, map = {}) {
    if (n === 0 || n === 1) {
        return n;
    }
    
    let cache = Array(n + 1).fill(0);
    cache[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    
    return cache[n];

    
};